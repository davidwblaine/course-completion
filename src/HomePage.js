import React from "react";
import './App.css';
//import background from './background.jpg'

export default function HomePage(){

return(
    <div className = "HomePage">
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
    <h2>Test</h2>
    </section>
    </body>
    </div>
)
}