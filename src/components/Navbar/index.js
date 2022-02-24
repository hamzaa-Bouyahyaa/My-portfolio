import React from 'react'
import {FaBars} from 'react-icons/fa'
/* import { NavLink } from 'react-router-dom' */
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon, 
    NavMenu, 
    // NavItem, 
    // NavLinks,
    // NavBtn,NavBtnLink
} from './NavbarElements'
import {Button} from './ButtonElementsnav';

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Hamza Bouyahya</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                    <Button to='about' smooth={true}>About</Button>
                    <Button to='discover' smooth={true}>Curriculum Vitae</Button>
                    <Button to='services' smooth={true} offset={-80}>Projects</Button>
                    <Button to='contact' smooth={true} offset={-80}>Contact</Button>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
