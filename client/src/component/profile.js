import React from 'react';
import { useAuth } from './auth';
import './profile.css'
import Navbar from './navbar';

function Profile() {
    const auth = useAuth();
    return (
        <div>
            <Navbar />
            <h1 className='profile_head'>Welcome <span className='profile_span'>{auth.user}</span></h1>
        </div>
    )
}
export default Profile;