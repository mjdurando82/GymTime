import axios from "axios"
import { useEffect, useState } from "react"


const Feed = () => {

  const [posts, setPosts] = useState()

  const getPosts = async () => {
    const response = await axios.get(`http://localhost:3001/workout/posts`)
    setPosts(response.data.workouts)
  }
  console.log(posts)

  useEffect(() => {
    getPosts()
  }, [])
  return (
    <div>
      <h3>Posts Here</h3>
        {posts?.map((post) => (
      <div key={post._id}>
          <p>{post.name}</p>
          <p>{post.exercises}</p>
          <p>{post.notes}</p>
          <p>{post.image}</p>
          <p>{post.date}</p>
      </div>
        ))}
    </div>
  )
}

export default Feed