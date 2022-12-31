import React from 'react';
import Header from '../../components/Header/Header';
import Posts from '../../components/Posts/Posts';
import Sidebar from '../../components/Sidebar/Sidebar';
import './Home.css';
import Topbar from '../../components/Topbar/Topbar';

export default function Home() {
    return (
        <>
            <Header />
            <div className='Home'>
                <Posts />
                <Sidebar />
            </div>
        </>
    );
}
