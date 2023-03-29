import axios from "axios"
import Client from "../services/api"
import { useEffect, useState } from "react"
import CommentForm from "../components/CommentForm"

const Feed = ({ user }) => {


  const [posts, setPosts] = useState()

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
    <div>
      <h3>Posts Here</h3>
        {posts?.map((post) => (
      <div key={post._id}>
          <p>{post.name}</p>
          <p>Notes: {post.notes}</p>
          <p>{post.image}</p>
          <p>{post.date}</p>
          {post?.exercises?.map((exercise) => (
            <p key={exercise._id}>{exercise.name}: {exercise.sets} x {exercise.reps}</p>
            ))}
          <h5>Comments:</h5>
          {post?.comments?.map((comment) => (
            <>
            <p key={comment._id}>{comment.user}: {comment.content}</p>
            {user?.id === comment?.user &&(
              <button className="dark:bg-blue-900 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={(e) => deleteComment(e, comment._id)}>X</button>
            )} 
            </>
          ))}
          <CommentForm post={post} getPosts={getPosts} user={user}/>
      </div>
        ))}
    </div>
  )
}

export default Feed