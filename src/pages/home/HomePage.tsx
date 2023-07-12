import type React from 'react'
import { useNavigate } from 'react-router-dom'

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate()

  const goToProfile = (): void => {
    navigate('/profile')
  }
  return (
        <div>
            <h1>Home Page</h1>
            <h2>Dashboard</h2>
            <button onClick={goToProfile}>My profile</button>
        </div>
  )
}

export default HomePage
