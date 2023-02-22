import React from 'react';
import './App.css'

export default function Contact(){
    return(
        <div className = "About">
        <body className= "Body">
        <nav>
            <label className="title">Course Completion</label>
            <ul>
                <li> <a href= './'>Home</a></li>
                <li><a href={'./About'}>Our Goal</a></li>
                <li><a href={'./Contact'}>Contact</a></li>
                <li><a href={'./Login'}>Login</a></li>
                <li><a href={'./SignUp'}>Sign Up</a></li>
            </ul>
        </nav>
        <section>
            <h3>Contact Us</h3>
        </section>
        </body>
        </div>
    );
}