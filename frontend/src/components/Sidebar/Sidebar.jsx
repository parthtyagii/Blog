import React from 'react';
import './Sidebar.css';




export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2l0aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem illum accusamus,
                    praesentium excepturi cupiditate nemo maiores doloribus iusto! Ipsam voluptatem nostrum
                    officiis autem quos sed voluptatibus nulla laudantium atque deserunt.
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">LIFE</li>
                    <li className="sidebarListItem">MUSIC</li>
                    <li className="sidebarListItem">STYLE</li>
                    <li className="sidebarListItem">SPORT</li>
                    <li className="sidebarListItem">CINEMA</li>
                    <li className="sidebarListItem">TECH</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-instagram"></i>
                </div>
            </div>

        </div>
    );
}
