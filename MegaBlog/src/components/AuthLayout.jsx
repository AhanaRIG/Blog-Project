import React,{useDebugValue, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


function Protected({children , authentication=true}) {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status )

    useEffect(() => {
      if(authentication && authStatus !== authentication){
        navigate("/login")
      }
      else if (!authentication && authStatus !== authentication){
        navigate("/")
      }
      setLoader(false)
        
    }, [authentication,authStatus,navigate])
    
  return loader ? <h1>loading.....</h1>: <>{children}</>
}

export default Protected