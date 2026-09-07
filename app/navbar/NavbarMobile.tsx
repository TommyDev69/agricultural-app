'use client'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const NavbarMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () =>{
        setIsOpen(!isOpen);
    }

    return (  
        <div className='lg:hidden text-[18px] '>
            <button onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>
        </div>
    );
}
 
export default NavbarMobile;