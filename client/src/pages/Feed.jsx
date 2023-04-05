import axios from "axios"
import Client from "../services/api"
import { useEffect, useState } from "react"
import CommentForm from "../components/CommentForm"
import UpdateComment from "../components/UpdateComment"

const Feed = ({ user }) => {


  const [posts, setPosts] = useState()
  
  const [editCommentId, setEditCommentId] = useState(null)

  const openForm = (e, commentId) => {
    e.preventDefault()
    setEditCommentId(commentId)
  }

  const closeForm = (e) => {
    e.preventDefault()
    setEditCommentId(null)
  }
  
  const getPosts = async () => {
    const response = await axios.get(`/api/workout/posts`)
    const sorted = response.data.workouts.sort((a, b) => new Date(b.date) - new Date(a.date))
    setPosts(sorted)
  }

  useEffect(() => {
    getPosts()
  }, [])

  const deleteComment = async (e, commentId) => {
    e.preventDefault()
    await Client.delete(`/api/comment/delete/${commentId}`)
    getPosts()
  }

  return (
    <div className="pt-16 bg-slate-400 min-h-screen">
      <div className="max-w-xl mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Posted Workouts</h2>
        {posts?.map((post) => (
          <div key={post._id} className="border rounded-md shadow-md bg-gray-100 p-4 mb-4">
            <div className="flex items-center mb-2">
              <p className="font-medium">{post.user.username}</p>
            </div>
            <p className="font-bold text-lg mb-2">{post.name}</p>
            {post.image && (
              <img className=" rounded w-full h-64 object-contain mb-4" src={post.image} alt={post.name} />
            )}
            <p className="text-gray-700 mb-2">{post.notes}</p>
            <p className="text-gray-500 text-sm mb-2">{new Date(post.date).toLocaleDateString()}</p>
            {post?.exercises?.map((exercise) => (
              <p key={exercise.name} className="text-gray-700 mb-1">
                <span className="font-medium">{exercise.name}:</span> {exercise.sets} x {exercise.reps} {exercise.weight} lbs
              </p>
            ))}
            <h5 className="font-medium mt-4 mb-2">Comments:</h5>
            {post?.comments?.map((comment) => (
              <div key={comment._id} className="flex items-start mb-4">
                <div>
                  <span className="font-medium mb-1">{comment.user.username}</span>
                  <span className="text-gray-700"> -   {comment.content}</span>
                  {user?.id === comment?.user._id && (
                    <div className="mt-2">
                      <button className="bg-red-500 text-white py-1 px-1 rounded-md text-sm mr-2 hover:bg-rose-700 transition-all duration-300" onClick={(e) => deleteComment(e, comment._id)}>Delete</button>
                      <button className="bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300"onClick={(e) => openForm(e,comment._id)}>Edit</button>
                    </div>
                  )}
                  {comment?._id === editCommentId && (
                    <div className="mt-2">
                      <UpdateComment
                        getPosts={getPosts}
                        comment={comment}
                        closeForm={closeForm}
                        setEditCommentId={setEditCommentId}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
            <CommentForm post={post} getPosts={getPosts} user={user} className="mt-4" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Feed