function Signup(){
    const [Username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[cnfmpassword,setCnfm]=useState('');
    function handleSubmit(e){
        e.preventDefault();
        console.log('Data Submitted successfully',{Username,email,password,cnfmpassword})
    }
    return (
        <div className="Signupform">
            <form onsubmit={handleSubmit} >
                <img src="https://assets.turbologo.com/blog/en/2019/09/19084953/instagram-logo-illustration.png" alt="" />
                
                <input type={"text" } value={"Username or Phonenumber"} placeholder={"Username or Phonenumber"} onChange={(e) => setUsername(e.target.value)}/>
                <br />
                <input type={"text"} value={"email"}placeholder={"Enter your email"} onChange={(e)=>setEmail(e.target.value)}/>
                <br />
                <input type="password" value={"password"} placeholder={"enter your password"} onChange={(e)=>setPassword(e.target.value)}/>
                <br />
                <input type="password" value="cnfmpassword" placeholder={"confirm your password"} onChange={(e)=>setCnfm(e.target.value)}/>
                <button type="submit" className="signup">SignUp</button>
            </form>
            <h2>{have an account?signin</h2>
        </div>
    )
}
export default Signup;
