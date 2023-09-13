import React from 'react';
import { useAuth } from './auth';
import './profile.css'


function Profile() {
    const auth = useAuth();
    return (
        <div>
            <h1>Welcome {auth.user} </h1>
        </div>
    )
}
export default Profile;