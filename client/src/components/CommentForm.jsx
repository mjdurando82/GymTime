import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Client from '../services/api'


const CommentForm = ({ user }) => {
  let { id } = useParams()

  const initialState = {

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
      // `http://localhost:3001/comment/new/${workout_id}`,
      formState
    )
    setFormState(initialState)
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleSubmit} className="comment-form">
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
        <button className="submit-button" type="submit">
          Add Comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm
