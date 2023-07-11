import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { User } from '../../models/user.class';

// type ProfileProps = {
//     user: User,
// }

const ProfilePage: React.FunctionComponent = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>Your profile</h1>
            <button onClick={() => navigate('/tasks')}>Go to tasks</button>
        </div>
    );
}

export default ProfilePage;
