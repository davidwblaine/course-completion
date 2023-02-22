import React from 'react';

export default function NotFound(){

return(

<div className = "NotFound">
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
</body>
<section>
    <h3> 404: Not Found</h3>
</section>
</div>
);

}