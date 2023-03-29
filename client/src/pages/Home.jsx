import { useEffect} from 'react'
const Home = ({ user }) => {
  
  useEffect(() => {
    console.log(user)
  }, [])

  return (
    <h2>Home Page</h2>
  )
}

export default Home