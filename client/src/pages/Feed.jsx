import axios from "axios"
import Client from "../services/api"
import { useEffect, useState } from "react"
import CommentForm from "../components/CommentForm"
import UpdateComment from "./UpdateComment"

const Feed = ({ user }) => {


  const [posts, setPosts] = useState()

  const [showResults, setShowResults] = useState(false)

  const openForm = (e, commentId) => {
    e.preventDefault()
    if (!commentId) {
      setShowResults(true)
    } else setShowResults(commentId)
  }

  const closeForm = (e) => {
    e.preventDefault()
    setShowResults(false)
  }
  
  const getPosts = async () => {
    const response = await axios.get(`http://localhost:3001/workout/posts`)
    setPosts(response.data.workouts)
    getPosts()
  }

  useEffect(() => {
    getPosts()
  }, [])

  const deleteComment = async (e, commentId) => {
    e.preventDefault()
    await Client.delete(`http://localhost:3001/comment/delete/${commentId}`)
    getPosts()
  }

  return (
    <div className="pt-16 bg-slate-400 min-h-screen">
      <div className="max-w-xl mx-auto py-8">
        <h2 className="text-3xl font-bold mb-4">Posted Workouts</h2>
        {posts?.map((post) => (
          <div key={post._id} className="border rounded-md shadow-md bg-white p-4 mb-4">
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
                <span className="font-medium">{exercise.name}:</span> {exercise.sets} x {exercise.reps}
              </p>
            ))}
            <h5 className="font-medium mt-4 mb-2">Comments:</h5>
            {post?.comments?.map((comment) => (
              <div key={comment._id} className="flex items-start mb-4">
                <div>
                  <p className="font-medium mb-1">{comment.user}</p>
                  <p className="text-gray-700">{comment.content}</p>
                  {user?.id === comment?.user && (
                    <div className="mt-2">
                      <button className="bg-red-500 text-white py-1 px-1 rounded-md text-sm mr-2 hover:bg-rose-700 transition-all duration-300" onClick={(e) => deleteComment(e, comment._id)}>Delete</button>
                      <button className="bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300"onClick={(e) => openForm(e,comment._id)}>Edit</button>
                    </div>
                  )}
                  {comment?._id && showResults && (
                    <div className="mt-2">
                      <UpdateComment
                        openForm={openForm}
                        getPosts={getPosts}
                        comment={comment}
                        setShowResults={setShowResults}
                        closeForm={closeForm}
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