import React from 'react';
import './Post.css';
import { Link } from 'react-router-dom';




export default function Post() {
    return (
        <div className='post'>
            <Link to='/post/123' className='link'>

                <img className='postImg' src="https://images.unsplash.com/photo-1618503551238-7df2c50d2236?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <div className="postInfo">
                    <div className="postCats">
                        <span className="postCat">MUSIC</span>
                        <span className="postCat">LIFE</span>
                    </div>
                    <span className="postTitle">
                        Lorem ipsum dolor sit amet
                    </span>
                    <hr />
                    <span className="postDate">
                        1 hour ago
                    </span>
                    <p className='postDesc'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et cumque autem ratione?
                        Excepturi accusantium praesentium, quidem perspiciatis iste explicabo illum debitis perferendis
                        molestiae consectetur. Earum iusto optio animi voluptatibus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et cumque autem ratione?
                        Excepturi accusantium praesentium, quidem perspiciatis iste explicabo illum debitis perferendis
                        molestiae consectetur. Earum iusto optio animi voluptatibus?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et cumque autem ratione?
                        Excepturi accusantium praesentium, quidem perspiciatis iste explicabo illum debitis perferendis
                        molestiae consectetur. Earum iusto optio animi voluptatibus?
                    </p>
                </div>

            </Link>
        </div>
    );
}










