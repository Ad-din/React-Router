
import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

import Link from '../Link/Link';
import { RiMenuAddLine } from "react-icons/ri";

const NavBar = () => {
    const[open, setOpen]= useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/dashboard", name: "Dashboard" }
      ];
      
      
      
    return (
        
        <nav className='text-black p-6 bg-yellow-400'>
            <div className='md:hidden'  onClick={()=>setOpen(!open)}>
                {
                    open===true ? <RxCross2 className='text-3xl '/>

                    : 
                    
                    <RiMenuAddLine className='text-3xl '/>
                }
           
            </div>

           <ul className={`md:flex duration-1000 absolute md:static ${open ? 'top-17':'-top-60'} bg-yellow-200`}>
           {
                routes.map(route => <Link key={route.id}route={route}></Link>)
            }
           </ul>

        </nav>

    );
};

export default NavBar;