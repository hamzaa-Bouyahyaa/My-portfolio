import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon, 
    NavMenu, 
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
