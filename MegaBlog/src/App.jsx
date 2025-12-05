import { useEffect, useState } from 'react'
import { useDispatch } from "react-redux"
import authService from './appwrite/auth';
import './App.css'
import {login, logout} from "./store/authSlice" 
import {Header, Footer} from "./components/index" 
import {Outlet} from "react-router-dom"
import { ToastContainer } from 'react-toastify';


function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData){
        dispatch(login({userData}))
        
      }
      else{
        dispatch(logout())
      }
    })
    .catch((error)=>{
      console.log("App.jsx :: useEffect :: error: ",error)
    })
    .finally( ()=>setLoading(false)
    )

  }, [])
  


  return !loading ? 
  (<div className="bg-opacity-50 min-h-screen bg-zinc-900 flex flex-wrap content-between">
    <div className='w-full block'>
      <Header/>
      <main>
        {/* TODO: <Outlet/> */}
        <ToastContainer/>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  </div>) 
  : 
  (<div>

  </div>)
}

export default App