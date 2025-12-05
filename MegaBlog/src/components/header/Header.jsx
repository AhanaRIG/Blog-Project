
import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()

    const navItems = [
    {
        name: "Home",
        slug: "/",
        active: true
    },
    {
        name: "Login",
        slug: "/login",
        active: !authStatus
    },
    {
        name: "Signup",
        slug: "/signup",
        active: !authStatus
    },
    {
        name: "All Posts",
        slug: "/all-posts",
        active: authStatus
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus
    }
    ]

    return (
    <header className='py-3 bg-blue-950 rounded-t-lg shadow-xl shadow-blue-800/40'>
        <Container>
            <nav className='flex'>
                <div className='mr-4'>
                    <Link to="/">
                        <Logo width="70px"/>
                    </Link>
                </div>
                <ul className='w-full md:w-auto md:flex-row flex-col flex ml-auto'>
                {navItems.map((item) => 
                    item.active ? 
                    (<li key={item.name}>
                        <NavLink to={item.slug}
                            className={({isActive}) => 
                            (isActive ? "hover:bg-blue-100 hover:text-[#243851] transition bg-green-600 m-1 font-bold inline-block px-6 py-2 duration-200 rounded-full"
                            
                                :

                            "hover:bg-blue-100 hover:text-[#213246] transition bg-cyan-600 m-1 font-bold inline-block px-6 py-2 duration-200 rounded-full")}>
                            {/* <button onClick={() => {navigate(item.slug)}}
                            className="hover:bg-zinc-900 hover:text-[#60A5FA] transition bg-slate-900 m-1 font-bold inline-block px-6 py-2 duration-200 rounded-full" */}
                            <button>
                                {item.name}
                            </button>
                        </NavLink>
                    </li>) 
                    : 
                    null
                )}
                {authStatus && 
                    <li>
                        <LogoutBtn/>
                    </li>}
                </ul>
            </nav>
        </Container>
    </header>
    )
}

export default Header

// import React, { useState } from 'react'
// import {Container,Logo,LogoutBtn} from '../index'
// import { Link, NavLink, useNavigate  } from 'react-router-dom'
// import { useSelector } from 'react-redux'


// const Header = () => {
//   // const [isColumn, setIsColumn] = useState(false)
//   const authStatus = useSelector((state) => state.auth.status)
//   const navigate = useNavigate()
//   const navItems = [
//     {
//       name : "Home",
//       slug : "/",
//       active : true
//     },
//     {
//       name : "Login",
//       slug : "/login",
//       active : !authStatus
//     },
//     {
//       name : "Signup",
//       slug : "/signup",
//       active : !authStatus
//     },
//     {
//       name : "All Posts",
//       slug : "/all-posts",
//       active : authStatus
//     },
//     {
//       name : "Add Post",
//       slug : "/add-post",
//       active : authStatus
//     }


//   ]
//   return (
//     <header className='py-3 bg-blue-950 rounded-t-lg shadow-xl shadow-blue-800/40'>
//       <Container>
//         <nav className='flex'>

//           <div className='mr-4'>
//             <Link to = "/"> 
//               <Logo width = "70px"/> 
//             </Link>
//           </div>

//           <ul className='w-full  md:w-auto flex-col md:flex-row flex ml-auto'>
//             { navItems.map( (item) => 
//               item.active ? 
//               (
//                 <NavLink to = {item.slug}
//                     className={({isActive}) => isActive ? ' inline-block font-bold bg-green-600 m-1 px-6 py-2 duration-200 hover:bg-blue-100 rounded-full '
//                     : ' inline-block font-bold bg-cyan-600 m-1 px-6 py-2 duration-200 hover:bg-blue-100 rounded-full '}
//                 >
//                   <li key = {item.name}>
//                     {/* <button onClick={ () => navigate(item.slug)}
//                       className=' inline-block font-bold bg-cyan-600 m-1 px-6 py-2 duration-200 hover:bg-blue-100 rounded-full '
//                     > */}
//                     <button>
//                       {item.name}
//                     </button>
//                   </li>
//                 </NavLink>
//               ) 
//               : null
//             )}

//             {authStatus && 
//               <li>
//                 {/* <LogoutBtn isColumn={isColumn}/> */}
//                 <LogoutBtn/>
//               </li>
//             }
//           </ul>
//         </nav>
//       </Container>
//     </header>
//   )
// }

// export default Header