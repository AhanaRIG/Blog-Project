import {useDispatch} from "react-redux"
import React,{ useEffect, useState } from 'react'
import './App.css'
import authService from "./appwrite/auth"
import { login, logout } from "./store/authSlice"
import { Footer, Header } from "./components/index"
import {Outlet} from "react-router-dom" 
function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser() //can use then after promise
    .then( (userData) => {
      if (userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    }
    )
    .catch( (err) => 
      console.log("App.jsx :: UseEffect :: Error",err)
    )
    .finally( () => setLoading(false))
  
  }, [])
  

  return !loading ? 
  (<div
  className = "min-h-screen bg-gray-400 flex flex-wrap content-between">
    <div className="w-full block">
      <Header/>
      <main>
        {/* ToDo:  */}
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>)
  : <div></div>
}

export default App
