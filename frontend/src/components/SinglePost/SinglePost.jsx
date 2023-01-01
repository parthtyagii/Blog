import React from 'react';
import { useEffect } from 'react';
import { useActionData, useLocation, useSearchParams } from 'react-router-dom';
import './SinglePost.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';



export default function SinglePost() {

    const [post, setPost] = useState({});

    const location = useLocation();
    const path = location.pathname.split('/')[2];
    // console.log(path);

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
                    <img className='singlePostImg' src={post.photo} alt="" />

                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                    </div>
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
