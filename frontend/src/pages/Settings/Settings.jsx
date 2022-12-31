import React from 'react';
import './Settings.css';
import Sidebar from '../../components/Sidebar/Sidebar';






export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className='settingDeleteTitle'>Delete Account</span>
                </div>
                <form action="" className="settingForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img src="https://m.media-amazon.com/images/M/MV5BZWMzNTE4NTMtYWU0My00ZTQ5LWEyNmUtNjk4NmU0YjY3YmIzXkEyXkFqcGdeQXVyODU0OTkyNTk@._V1_.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />

                    </div>

                    <label>Username</label>
                    <input type="text" placeholder='Parth Tyagi' />

                    <label>Email</label>
                    <input type="email" id='email' placeholder='abcd@gmail.com' />

                    <label>Password</label>
                    <input type="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
