import React, { useState } from 'react'
import Navbar from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavbarBrand from '@material-tailwind/react/NavbarBrand'
import NavbarToggler from '@material-tailwind/react/NavbarToggler'
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse'
import Nav from '@material-tailwind/react/Nav'
import NavItem from '@material-tailwind/react/NavItem'
import NavLink from '@material-tailwind/react/NavLink'

export default function Top() {
  const [openNavbar, setOpenNavbar] = useState(false)

  return (
    <Navbar navbar className='bg-pink-600'>
      <NavbarContainer>
        <NavbarWrapper>
          <NavbarBrand className='navtip italic'>
            Oluwatosin Faboade
          </NavbarBrand>
          <NavbarToggler
            color='white'
            onClick={() => setOpenNavbar(!openNavbar)}
            ripple='light'
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <NavLink
              href='https://drive.google.com/file/d/1uj8DjXepHv5oGq_qQeX9U618jIBMuqzb/view'
              ripple='light'
            >
              Resume
            </NavLink>
            {/* <NavItem ripple="light">Resume</NavItem> */}
            <a href='#projects'>
              <NavItem ripple='light'>Projects</NavItem>
            </a>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  )
}
