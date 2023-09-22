import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import { changeDateForm } from "../data";

const blogsAdapter = createEntityAdapter()

const initialState = blogsAdapter.getInitialState()

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getBlogs: builder.query({
            query: () => `/blogs`,
            transformResponse: (responseData) => {
                const loadedBlogs = responseData
                    .map(blog => {
                        if (!blog?.postDate) blog.postDate = new Date(changeDateForm(blog.date)).getTime()

                        blog.comments = blog.comments.map(comment => {
                            if (!comment.reactions) {
                                comment.reactions = {
                                    thumbsUp: 0,
                                    dislike: 0,
                                    angry: 0,
                                    fire: 0,
                                    coffee: 0
                                }
                            }

                            return comment
                        })

                        return blog
                    })
                    .sort((a, b) => b.postDate - a.postDate)

                return blogsAdapter.setAll(initialState, loadedBlogs)
            },
            providesTags: ['Blogs']
        }),
        addComment: builder.mutation({
            query: ({ comments, blogId }) => ({
                url: `/blogs/${blogId}`,
                method: "PATCH",
                body: { comments }
            }),
            invalidatesTags: ['Blogs']
        }),
        addReaction: builder.mutation({
            query: ({ blogId, comments }) => ({
                url: `blogs/${blogId}`,
                method: 'PATCH',
                body: { comments }
            }),
            async onQueryStarted({ blogId, comments }, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(
                    extendedApiSlice.util.updateQueryData('getBlogs', undefined, draft => {
                        const blog = draft.entities[blogId];
                        if (blog) blog.comments = comments
                    })
                )
                try {
                    await queryFulfilled
                } catch {
                    patchResult.undo()
                }
            }
        })
    })
})

export const {
    useGetBlogsQuery,
    useAddCommentMutation,
    useAddReactionMutation
} = extendedApiSlice

export const selectBlogsResult = extendedApiSlice.endpoints.getBlogs.select()

const selectBlogsData = createSelector(
    selectBlogsResult,
    blogResult => blogResult.data
)

export const {
    selectAll: selectAllBlogs,
    selectById: selectBlogById,
    selectIds: selectBlogsIds,
} = blogsAdapter.getSelectors(state => selectBlogsData(state) ?? initialState)