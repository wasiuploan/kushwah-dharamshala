import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './Navbar'

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <img src="./images/logo.png" alt="logo" className='logo' />
      </NavLink>
      <Navbar />
    </MainHeader>
  )
}

const MainHeader = styled.header`
  padding: 0 , 4.8rem;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content : space-between;
  align-items:center; 

  .logo{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;

export default Header