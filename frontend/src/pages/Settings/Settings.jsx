import React from 'react';
import './Settings.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { useState } from 'react';
import axios from 'axios';


export default function Settings() {

    const { user, dispatch } = useContext(Context);
    const PF = 'http://localhost:5000/images/';

    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "UPDATE_START" })
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            updatedUser.profilePic = filename;
            try {
                await axios.post('/upload', data);
            }
            catch (e) {
                console.log(e);
            }
        }

        try {
            const res = await axios.put('/users/' + user._id, updatedUser);
            setSuccess(true);
            dispatch({ type: "UPDATE_SUCCESS", payload: res.data })

        }
        catch (e) {
            console.log(e);
            dispatch({ type: "UPDATE_FAILURE" })
        }
    };

    return (
        <div className='settings'>
            <div className="settingWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className='settingDeleteTitle'>Delete Account</span>
                </div>
                <form action="" className="settingForm" onSubmit={handleSubmit}>

                    <label>Profile Picture</label>

                    <div className="settingPP">
                        
                        <img src={file ? URL.createObjectURL(file) : PF + user.profilePic} alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fa-regular fa-user"></i>
                        </label>
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} id='fileInput' style={{ display: 'none' }} />

                    </div>

                    <label>Username</label>
                    <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />

                    <label>Email</label>
                    <input type="email" id='email' placeholder={user.email} onChange={e => setEmail(e.target.value)} />

                    <label>Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} />

                    <button className="settingSubmit" type='submit'>Update</button>

                    {success && <span style={{ color: 'green', alignSelf: 'center', marginTop: '20px' }}>Profile has been updated!</span>}

                </form>
            </div>
            <Sidebar />
        </div>
    )
}
