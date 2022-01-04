import styled from 'styled-components';
import React from 'react'

const MyNavbar = styled.nav`
  display: flex;
  flex-direction: row;
  background-color: #47E;
  align-items: center;
  height: 100px;
` 

const Navbar = () => {
  return (
    <div>
      <MyNavbar></MyNavbar>
    </div>
  )
}

export default Navbar;