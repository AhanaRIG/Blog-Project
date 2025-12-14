
import React, { useEffect, useState } from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiMenu } from "react-icons/fi";
import { FiXSquare } from "react-icons/fi";

const Header = () => {

    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const [showMobileMenu, setMobileMenu] = useState(false)
    const location = useLocation();

    useEffect(() => {
      setMobileMenu(false)
    }, [location.pathname])
    
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
        name: "Sign up",
        slug: "/signup",
        active: !authStatus
    },
    {
        name: "My Posts",
        slug: "/my-posts",
        active: authStatus
    },
    {
        name: "Add Post",
        slug: "/add-post",
        active: authStatus
    }
    ]

    return (
    <header className='
    sticky top-0 z-40 py-3 bg-blue-950 rounded-t-lg shadow-xl shadow-blue-800/40'>
        <Container>
            <nav className='md:flex hidden relative'>
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
                    </li>
                }
                </ul>
            </nav>
        </Container>

        <Container>
            <nav className=' md:hidden flex justify-between items-center'>
                <div className='mr-4'>
                    <Link to="/">
                        <Logo width="70px"/>
                    </Link>
                </div>
                {/* <FiMenu onClick={() => setMobileMenu(prev => !prev)} 
                className='text-3xl text-white fixed right-10'/> */}
                <button onClick={() => setMobileMenu(prev => !prev)} className='text-3xl text-white fixed right-12'>
                    {showMobileMenu? <FiXSquare /> : <FiMenu/>}
                </button>

                {showMobileMenu? 
                    // <ul className='w-full md:w-auto md:flex-row flex-col flex ml-auto'>
                    <ul>
                    <div className='bg-slate-900
                    w-[200px] rounded-xl absolute top-[3.1rem] translate-x-6 duration-200 py-4 right-10 '>
                    {navItems.map((item) => 
                        item.active ? 
                        (<li key={item.name}>
                            <NavLink to={item.slug}
                                className={({isActive}) => 
                                (isActive ? "hover:bg-blue-100 hover:text-[#243851] transition bg-cyan-200 text-blue-800 m-2 font-bold inline-block px-4 py-1 duration-200 rounded-full"
                                
                                    :

                                "hover:bg-blue-100 hover:text-[#213246] transition text-white m-1 font-bold inline-block px-6 py-2 duration-200 rounded-full")}>
                                <button>
                                    {item.name}
                                </button>
                            </NavLink>
                        </li>) 
                        : 
                        null
                    )}
                    
                    {authStatus && 
                        <li className='py-1'>
                            <LogoutBtn/>
                        </li>
                    }
                    </div>
                </ul>
                : ""
                }
            </nav>
        </Container>
    </header>
    )
}

export default Header

