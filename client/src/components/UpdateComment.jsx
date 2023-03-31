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
      <form onSubmit={handleUpdate}>
        <label htmlFor="content">Update Your Comment</label>
        <textarea
          className='appearance-none border rounded text-gray-700 leading-tight'
          type="text"
          id="content"
          onChange={handleChangeUpdate}
          value={updateComment.content}
        />
        <div className="center-submit">
          <button className="bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300 m-2"                           type="submit">
            Save
          </button>
          <button className="bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300"                           onClick={(e) => closeForm(e)}>
            {' '}
            Cancel{' '}
          </button>
        </div>
      </form>
    </div>
  )
}

export default UpdateComment