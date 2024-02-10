import { useSelector } from "react-redux"
import { selectUser } from "../../features/userSlice"
import Navbar from "../Navbar/Navbar"
import "./Profile.css"
import { auth } from "../../firebase"

const Profile = () => {
    const user = useSelector(selectUser)
  return (
    <div className="profile">
        <Navbar />
        <h1>Edit Profile</h1>
        <div className="profile__body">
        
            <div className="profile__info">
                {/* <h1>Edit Profile</h1> */}
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="profile__avatar" />
            </div>

            <div className="profile__details">
                <h2>{user.email}</h2>
                <div className="profile__plans">

                    <button 
                    onClick={()=>auth.signOut()}
                    className="profile__signout">Sign Out</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile