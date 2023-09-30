import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectBlogById, useAddReactionMutation } from '../../../../features/blogsSlice'

import './ReactionButtons.css'

const ReactionButtons = ({ comment }) => {
    const { blogId } = useParams()
    const [addReaction] = useAddReactionMutation()
    const blog = useSelector(state => selectBlogById(state, blogId))

    const commentId = blog.comments.findIndex(item => item.id === comment?.id)
    const copyArr = JSON.parse(JSON.stringify(blog.comments));

    const handleAddingReaction = async (reaction) => {
        try {
            const newValue = comment.reactions[reaction] + 1
            copyArr[commentId].reactions = {
                ...copyArr[commentId].reactions,
                [reaction]: newValue
            }

            await addReaction({
                blogId, comments: [...copyArr]
            }).unwrap()
        } catch (error) {
            console.log("ERROR: " + error.message)
        }
    }

    return (
        <div className='reaction-buttons'>
            {comment && Object.keys(comment.reactions).map(reaction => {
                return (
                    <button
                        key={reaction}
                        onClick={() => handleAddingReaction(reaction)}
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
