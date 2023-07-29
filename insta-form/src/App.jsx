import { useState } from 'react'
import Signup from './component/Signup';
import Signin from './component/Signin';

import './App.css'


function App() {
  const [isSignup,setValue]=useState(true);
    const setform=()=>{
        setValue(!isSignup);
    }

  return (
    <>
      <h1>{isSignUp?'Signup':'Signin'}</h1>
        {isSignUp?<Signup/>:<Signin/>}
        <button onClick={setform}>{isSignup?'Signin':'Signup'}</button>
      
    </>
  )
}

export default App
