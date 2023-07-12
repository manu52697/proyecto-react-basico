import type React from 'react'
import { useNavigate } from 'react-router-dom'
import { sessionRemove } from '../../util/session-storage'

// import { User } from '../../models/user.class';

// type ProfileProps = {
//     user: User,
// }

const ProfilePage: React.FunctionComponent = () => {
  const navigate = useNavigate()

  const onLogout = (): void => {
    sessionRemove('credentials')
    navigate('/home')
  }

  return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => { navigate('/tasks') }}>Go to tasks</button>
            <button onClick={onLogout}>Log Out</button>
        </div>
  )
}

export default ProfilePage
