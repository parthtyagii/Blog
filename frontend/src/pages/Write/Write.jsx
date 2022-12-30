import React from 'react';
import './Write.css';





export default function Write() {
    return (
        <div className='write'>
            <img src="https://wallpapershome.com/images/pages/ico_h/24116.jpg" alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>

                <div className="writeFormGroup">
                    <textarea placeholder='tell your story...' type='text' className='writeInput writeText' ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
}
