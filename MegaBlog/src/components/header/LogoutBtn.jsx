import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {
  // const [isColumn, setIsColumn] = useState(false)
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout().then(() => dispatch(logout()))
        
    }
  return (
   
      <button onClick={logoutHandler} className="inline-block font-bold bg-red-700 px-6 m-1 py-2 duration-200 hover:bg-blue-100 rounded-full">
        Logout
    </button>
    
    // <div className={isColumn ? "md:flex-row md:flex md:flex-wrap": "flex flex-col place-self-center"}>
    //   <button onClick={logoutHandler} className={`inline-block font-bold bg-red-700 px-6 m-1 py-2 duration-200 hover:bg-blue-100 rounded-full ${isColumn ? " right-2 top-40 absolute" : ""}`}>
    //     Logout
    // </button>
    // </div>
  )
}

export default LogoutBtn