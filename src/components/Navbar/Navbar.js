import { useEffect, useState } from "react"
import "./Navbar.css"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show , setShow] = useState(false);
  const navigate = useNavigate()
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
          <img onClick={()=> navigate("/")} className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix__Logo" />
          
          <img onClick={()=>navigate("/profile")} className="nav__avatar" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="netflix__avatar" />
      </div>
        
        
    </div>
  )
}

export default Navbar