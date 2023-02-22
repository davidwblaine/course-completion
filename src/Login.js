import React from 'react';
import './App.css';


export default function Login(){

    return(
<div className='Login'>
    <body className='Body'>
            
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
            <h3 className='loginTitle'>Login</h3><br/><br/>

        <label className='usn'>Username: </label> <input type ='text' id= 'usn' required = 'required '></input> 
        <br/><br/>
        <label className='pass'> Password </label> <input type ='text' id= 'pass' required = 'required '></input>
        <br/><br/>
        <input type = {'submit'}/><br/><br/>

        <button>Login with Google </button>

        </section>
        </body>
</div>
    );
}