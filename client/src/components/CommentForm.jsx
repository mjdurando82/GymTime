import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'


const CommentForm = ({ user, post, getPosts }) => {

  const initialState = {
    user: user?.id,
    workout: post._id,
    content: ''
  }
  const [formState, setFormState] = useState(initialState)
  const [comment, setComment] = useState()

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value })
    setComment(formState.comment)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.post(
      `http://localhost:3001/comment/new/${post._id}`,
      formState
    )
    setFormState(initialState)
    getPosts()
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={() => handleSubmit()} className="comment-form">
        <label htmlFor="content" className="commenttitle">
          Comment
        </label>
        <input
          className="inputfield"
          type="text"
          id="content"
          onChange={handleChange}
          value={formState.content}
        />
        <button className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm
