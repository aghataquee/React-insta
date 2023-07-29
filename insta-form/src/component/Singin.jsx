import {useState} from 'react';
function Signin(){
    const [email,Setemail]=useState('');
    const [password,SetPassword]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log("data submitted successfully",{email,password});
    }

    return(
        <div>
            <form onsubmit={handleSubmit}>
                <input type="text" placeholder={"Enter your email"} onChange={(e)=>Setemail(e.target.value)} />
                <input type="password" placeholder={"Enter your password"} onChange={(e)=>SetPassword(e.target.value)} />
                <button className="signin">Signin</button>
            </form>
        </div>
    )
}
export default Signin;