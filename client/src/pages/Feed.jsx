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
    <div className='bg-slate-400 min-h-screen'>
      <h2 className="text-2xl font-bold mb-4 pt-16">Posted Workouts</h2>
        {posts?.map((post) => (
      <div key={post._id}>
          <p>{post.name}</p>
          <p>Notes: {post.notes}</p>
          <img src={post.image}/>
          <p>{post.date}</p>
          {post?.exercises?.map((exercise) => (
            <p key={exercise._id}>{exercise.name}: {exercise.sets} x {exercise.reps}</p>
            ))}
          <h5>Comments:</h5>
          {post?.comments?.map((comment) => (
            <div>
            <p key={comment._id}>{comment.user}: {comment.content}</p>
            {user?.id === comment?.user &&(
              <div>
              <button className="bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300 m-2" onClick={(e) => deleteComment(e, comment._id)}>Delete</button>
              <button className="bg-slate-700 text-white py-1 px-1 rounded-md font-small text-sm md:text-sm hover:bg-blue-700 transition-all duration-300"                      onClick={(e) => openForm(e,comment._id)}>Update</button>
              </div>
            )}
            <div>
            {comment?._id && showResults && (
                        <UpdateComment
                          openForm={openForm}
                          getPosts={getPosts}
                          comment={comment}
                          setShowResults={setShowResults}
                          closeForm={closeForm}
                        />
                      )}
            </div> 
            </div>
          ))}
          <CommentForm post={post} getPosts={getPosts} user={user}/>
      </div>
        ))}
    </div>
  )
}

export default Feed