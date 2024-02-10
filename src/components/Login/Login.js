import SignUp from "../SignUp/SignUp"
import "./Login.css"
import {useState} from "react"
const Login = () => {
  const [signIn , setSignIn] = useState(false)
  return (
    <div className="loginScreen">
        <div className="loginScreen__background">
            <img className="loginScreen__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"  alt="netflix__logo"/>

            <button onClick={()=>setSignIn(true)} className="loginScreen__button">Sign In</button>

            <div className="loginScreen__gradient"/>

            <div className="loginScreen__body">

              {signIn ? <SignUp /> :(
                <>
                <h1>The biggest Indian hits. The best Indian stories. All streaming here.</h1>
                              <h2>Watch anywhere. Cancel anytime.</h2>
                              <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                
                              <div className="loginScreen__input">
                                <form>
                                  <input type="email" placeholder="Email address" />
                                  <button onClick={()=>setSignIn(true)} className="loginScreen__getStarted">Get Started </button>
                                </form>
                              </div>
                </>
                              
              ) }

            </div>
        </div>
    </div>
  )
}

export default Login