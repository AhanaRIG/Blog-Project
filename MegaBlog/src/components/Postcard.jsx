import React from 'react'
import appwriteService from "../appwrite/config"
import { Link } from 'react-router-dom'

function Postcard({$id,title,featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='hover:shadow-xl hover:scale-105 transition-transform hover:opacity-65 duration-300 opacity-90 md:w-full bg-gray-100 rounded-xl p-4 w-40'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} 
                    alt = {title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    
    </Link>
  )
}

export default Postcard