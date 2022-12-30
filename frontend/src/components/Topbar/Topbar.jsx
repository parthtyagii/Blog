import React from 'react';
import './Topbar.css';



export default function Topbar() {
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
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>

            <div className="topRight">
                <img
                    className='topImg'
                    src="https://m.media-amazon.com/images/M/MV5BZWMzNTE4NTMtYWU0My00ZTQ5LWEyNmUtNjk4NmU0YjY3YmIzXkEyXkFqcGdeQXVyODU0OTkyNTk@._V1_.jpg" alt="" />
                <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
