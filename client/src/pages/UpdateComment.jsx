import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import Client from '../services/api'

const UpdateComment = ({ comment, setShowResults, closeForm, getPosts }) => {
  const [updateComment, setUpdateComment] = useState({
    content: ''
  })

  const handleChangeUpdate = (event) => {
    setUpdateComment({
      ...updateComment,
      [event.target.id]: event.target.value
    })
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    await Client.put(
      `http://localhost:3001/comment/update/${comment._id}`,
      updateComment
    )
    setShowResults(false)
    getPosts()
  }

  return (
    <div className="comment-form-container">
      <form onSubmit={handleUpdate} className="comment-form">
        <label htmlFor="content">Update Your Comment</label>
        <textarea
          type="text"
          id="content"
          cols="80"
          rows="2"
          onChange={handleChangeUpdate}
          value={updateComment.content}
        />
        <div className="center-submit">
          <button className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"                            type="submit">
            Save
          </button>
          <button className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"                            onClick={(e) => closeForm(e)}>
            {' '}
            Cancel{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateComment