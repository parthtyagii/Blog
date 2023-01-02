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
    const [updateMode, setUpdateMode] = ("");

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


    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get('/posts/' + path);
            setPost(res.data);
        }

        getPost();
    }, [path])

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">

                {post.photo &&
                    <img className='singlePostImg' src={PF + post.photo} alt="" />

                }
                <h1 className="singlePostTitle">
                    {post.title}

                    {post.username === user?.username && (
                        <div className="singlePostEdit">
                            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                            <i className="singlePostIcon fa-solid fa-trash" onClick={handleDelete}></i>
                        </div>
                    )}
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author :
                        <Link to={`/?user=${post.username}`} className='link'>
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlePostDate">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className='singlePostDesc'>
                    {post.desc}
                </p>
            </div>
        </div >
    );
}
