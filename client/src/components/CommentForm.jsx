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
      <form onSubmit={handleSubmit} className="comment-form">
        <label htmlFor="content" placeholder='Comment Here'>
          Leave a Comment: 
        </label>
        <input
        className="ml-2 border border-gray-400 p-2 rounded-md text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
          type="text"
          id="content"
          onChange={handleChange}
          value={formState.content}
        />
        <button className="ml-2 bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm
