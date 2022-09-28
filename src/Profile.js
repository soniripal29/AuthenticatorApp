import { useEffect } from 'react';
import './Profile.css';
import Update from "./UpdateProfile";

export default function Profile(id) {

    return (
        <div>

            <form name ="contact-form" className='RegistrationForm'>
                <h2>Edit Profile!</h2>
                <div>
                    <input className='yolo' type="text" placeholder="FIRST NAME" id="firstname"></input>
                    <br/>
                    <input className='yolo' type="text" placeholder="LAST NAME" id="lastname"></input><br />
                    <input className='yolo' type="text" placeholder="Enter a Username" id="username"></input>  <br />
                    <input className='yolo' type="text" placeholder="Email Address" id="mail"></input>
                    <br />
                    <input className='yolo' type="number" placeholder="PHONE NUMBER" id="number"></input>
                    <br />
                    <input className='yolo' type="BIO" placeholder="BIO" id="Bio"></input><br />
                    <input className='yolo' type="file" id="img" name="img" accept="image/*"></input><br />
                    <input className='yolo' type="password" placeholder="Password" id="password"></input><br />
                    
                </div>
            </form><br />
            <button className='yolo' id="btn" onClick={Update}>Update Profile</button>
            &nbsp; &nbsp;
        </div>
    );
}