import { useState, useEffect } from 'react'
import server from '../Server'
import axios from 'axios'

const Home = () => {
  const [acc, setAcc] = useState()

  const getdet = async () => {
    try {
      const res = await axios.get(`${server}/acc/read`)
      const data = await res.data
      console.log(data)
      setAcc(data.data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
      getdet()
  }, [])

  return (
    <>
        <div>Home</div>
    </>
  )
}

export default Home