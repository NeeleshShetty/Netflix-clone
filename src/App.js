import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { auth } from './firebase';
import { store } from './app/store';
import {Provider, useDispatch, useSelector} from "react-redux"
import {login, logout, selectUser} from "./features/userSlice"
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Login from './components/Login/Login';
import { onAuthStateChanged } from 'firebase/auth';
import Profile from './components/Profile/Profile';
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth,(userAuth)=>{
      if(userAuth){
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email
        }))
      }else{  
        dispatch(logout())
      }

    })
  },[dispatch])
  return (
    <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      {!user ? <Login /> : (
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/profile' element={<Profile />}/>
        <Route path='/login' element={<Login />} />
        <Route path='*' element={"Page not found"} />
      </Routes>
      )}
      
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
