import { useEffect, useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [show , setShow] = useState(false);

  const transitionNavbar = ()=>{
    if(window.scrollY > 100){
      setShow(true)
    }else{
      setShow(false)
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar);
    return ()=> (
      window.removeEventListener("scroll",transitionNavbar)
    )
  },[])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
          <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix__Logo" />
          
          <img className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix__avatar" />
      </div>
        
        
    </div>
  )
}

export default Navbar