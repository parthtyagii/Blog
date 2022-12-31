import React from 'react';
import { Link } from 'react-router-dom';
import './Topbar.css';



export default function Topbar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-facebook"></i>
                <i className="topIcon fa-brands fa-twitter"></i>
                <i className="topIcon fa-brands fa-pinterest"></i>
                <i className="topIcon fa-brands fa-instagram"></i>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link to='/' className='link'>HOME</Link></li>
                    <li className="topListItem"><Link to='/' className='link'>ABOUT</Link></li>
                    <li className="topListItem"><Link to='/' className='link'>CONTACT</Link></li>
                    <li className="topListItem"><Link to='/write' className='link'>WRITE</Link></li>
                    <li className="topListItem">{user && <Link to='/' className='link'>LOGOUT</Link>}</li>
                </ul>
            </div>

            <div className="topRight">
                {!user ?
                    (
                        <>
                            <ul className="topList">
                                <li className="topListItem">
                                    <Link to='/login' className='link'>Login</Link>
                                </li>
                                <li className="topListItem">
                                    <Link to='/register' className='link'>Register</Link>
                                </li>
                            </ul>
                        </>
                    ) :
                    (
                        <img
                            className='topImg'
                            src="https://m.media-amazon.com/images/M/MV5BZWMzNTE4NTMtYWU0My00ZTQ5LWEyNmUtNjk4NmU0YjY3YmIzXkEyXkFqcGdeQXVyODU0OTkyNTk@._V1_.jpg" alt="" />
                    )
                }
                <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
