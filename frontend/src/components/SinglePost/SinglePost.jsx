import React from 'react';
import { useEffect } from 'react';
import { useActionData, useLocation, useSearchParams } from 'react-router-dom';
import './SinglePost.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';



export default function SinglePost() {

    const PF = 'http://localhost:5000/images/';
    const { user } = useContext(Context);

    const [post, setPost] = useState({});
    const location = useLocation();
    const path = location.pathname.split('/')[2];
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    const handleDelete = async () => {
        try {
            // console.log(post._id, path)
            await axios.delete(`/posts/` + path, { data: { username: user.username } });
            window.location.replace("/");
        }
        catch (e) {
            console.log(e);
        }
    }

    const handleUpdate = async () => {
        try {
            // console.log(post._id, path)
            await axios.put(`/posts/` + path, {
                username: user.username,
                title,
                desc
            });
            setUpdateMode(false);
        }
        catch (e) {
            console.log(e);
        }
    }


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        }
        getPost();
    }, [path])

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">

                {post.photo &&
                    <img className='singlePostImg' src={PF + post.photo} alt="" />
                }

                {updateMode ? <input type='text' autoFocus value={title} onChange={(e) => setTitle(e.target.value)} className='singlePostTitleInput' /> :
                    (
                        <h1 className="singlePostTitle">
                            {title}

                            {post.username === user?.username && (
                                <div className="singlePostEdit">
                                    <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                    <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                                </div>
                            )}
                        </h1>
                    )
                }

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author :
                        <Link to={`/?user=${post.username}`} className='link'>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>

                {updateMode ? <textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)} /> :
                    (
                        <p className='singlePostDesc'>
                            {desc}
                        </p>
                    )
                }

                {updateMode &&
                    <button className='singlePostButton' onClick={handleUpdate}>Update</button>
                }

            </div>
        </div >
    );
}
