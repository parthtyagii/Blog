import React from 'react';
import { useState } from 'react';
import './Write.css';
import axios from 'axios';
import { useContext } from 'react';
import { Context } from '../../context/Context';



export default function Write() {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            username: user.username,
            title,
            desc
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append('name', filename);
            data.append('file', file);
            newPost.photo = filename;
            try {
                await axios.post('/upload', data);
            }
            catch (e) { }
        }

        try {
            const res = await axios.post('/posts', newPost);
            window.location.replace("/post/" + res.data._id);
        }
        catch (e) { }
    };

    return (
        <div className='write'>

            {file &&
                <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
            }

            <form action="" className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' onChange={(e) => setFile(e.target.files[0])} style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' onChange={e => setTitle(e.target.value)} className='writeInput' autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder='tell your story...' onChange={e => setDesc(e.target.value)} type='text' className='writeInput writeText' ></textarea>
                </div>
                <button className="writeSubmit" type='submit'>Publish</button>
            </form>
        </div>
    );
}
