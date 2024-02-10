import "./SignUp.css"
import {useRef}  from 'react';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login} from "../../features/userSlice";
const SignUp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();



  const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,
      emailRef.current.value, passwordRef.current.value
    ).then((useCredential)=>{
      console.log(useCredential);
    })
    .catch((error) => alert(error.message));

  }

 const signin = (e)=>{
  e.preventDefault();
  signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
  .then((userCredential) => {
     const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
 }

  return (
    <div className="signup">
        <form>
          <h1>Sign in</h1>
          <input placeholder="Email" ref={emailRef}  type="email"/>
          <input ref={passwordRef} placeholder="Password"  type="password"/>
          <button type='submit' onClick={signin}>Sign In</button>

          <h4><span className="signup__gray">New to Netflix?</span> <span className="signup__link" onClick={register} >Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignUp