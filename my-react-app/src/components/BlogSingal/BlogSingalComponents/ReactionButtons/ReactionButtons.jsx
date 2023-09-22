import React from 'react'
import './ReactionButtons.css'
import { useParams } from 'react-router-dom'
import {selectBlogById, useAddReactionMutation} from '../../../../features/blogsSlice'
import { useSelector } from 'react-redux'

const ReactionButtons = ({ comment }) => {
    const { blogId } = useParams()
    const [addReaction] = useAddReactionMutation()
    const blog = useSelector(state => selectBlogById(state, blogId))

    const commentId = blog.comments.findIndex(item => item.id === comment?.id)
    const copyArr =  JSON.parse(JSON.stringify(blog.comments));

    return (
        <div className='reaction-buttons'>
            {comment && Object.keys(comment.reactions).map(reaction => {
                return (
                    <button
                        key={reaction}
                        onClick={() => {
                            const newValue = comment.reactions[reaction] + 1
                            copyArr[commentId].reactions = {
                                ...copyArr[commentId].reactions,
                                [reaction]: newValue
                            }

                            addReaction({
                                blogId,
                                comments: [...copyArr]
                            })
                        }}
                    >
                        <img src={`../../../../../public/Images/reactio-buttons/${reaction}.png`} alt={reaction} />
                        <span>{comment.reactions[reaction]}</span>
                    </button>
                )
            })}
        </div >
    )
}

export default ReactionButtons
