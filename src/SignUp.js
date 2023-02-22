import React from 'react';
import './App.css';


export default function SignUp(){
    return(
        <div className = "SignUp">
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
                <h3 className='signupTitle'>Sign Up</h3><br/>
                <form name ='signup' method = 'GET' action = 'Account' onSubmit = ''>
                <label className='usn'>Username: </label> <input type ='text' id= 'usn' required = 'required '></input> 
                    <br/><br/>
                <label className='email'>Email: </label> <input type ='email' id= 'email' required = 'required '></input> 
                    <br/><br/>
                <label className='usn'>Birthday: </label> <input type ='text' id= 'date' required = 'required '></input> 
                    <br/><br/>
                <label className='pass'> Password </label> <input type ='text' id= 'pass' required = 'required '></input>
                    <br/><br/>
                <label className='pass2'>Confirm Password: </label> <input type ='text' id= 'pass2' required = 'required '></input> 
                    <br/><br/> 

                <div className ='dropdown'>
                    <button className='dropdown_button'>Select Major</button>
                        <div className='dropdown_menu'>
                            <a href ='#'>Computer Science</a>
                            <a href ='#'>Math</a>
                        </div>
                </div><br/><br/>

                <input type = 'submit' value ='Sign Up'></input><br/><br/>
                <input type = 'submit' value = 'Sign Up with Google'></input>
                </form>
            </section>
            </body>
        </div>

);
}