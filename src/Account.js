import React from 'react'; 
import './App.css';


export default function Account(){
    window.addEventListener('load', () => {
        const params = (new URLSearchParams("./SignUp"));
         const usn = params.get('usn')
         const email = params.get("email");
         const date = params.get("trip_start");
         const user_password = params.get("pass");
         document.getElementById("usn").innerHTML = usn;
         document.getElementById("email").innerHTML = "email";
        document.getElementById("trip_start").innerHTML = "trip_start";
        document.getElementsByName("user_password").innerHTML = "user_password";
    });

    return(

        <div className = "Account">
                
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
                    <h3 id = 'Welcome'>Welcome: <span id = 'usn'></span></h3>
                </section>
            </body>
        </div>
    );
}
