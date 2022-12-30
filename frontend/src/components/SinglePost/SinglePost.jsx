import React from 'react';
import './SinglePost.css';



export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src="https://images.unsplash.com/photo-1618503551238-7df2c50d2236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                        <i class="fa-regular fa-pen-to-square"></i>
                        <i class="fa-solid fa-trash"></i>
                    </div>
                </h1>

                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author : <b>Parth</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolores amet nobis,
                    voluptates sapiente ratione quos ducimus harum dicta et suscipit earum doloribus
                    laborum dolorum repudiandae molestias vel veniam quibusdam!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolores amet nobis,
                    voluptates sapiente ratione quos ducimus harum dicta et suscipit earum doloribus
                    laborum dolorum repudiandae molestias vel veniam quibusdam!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque dolores amet nobis,
                    voluptates sapiente ratione quos ducimus harum dicta et suscipit earum doloribus
                    laborum dolorum repudiandae molestias vel veniam quibusdam!
                </p>
            </div>
        </div>
    );
}
