import React from 'react'
import styled from 'styled-components'

// eslint-disable-next-line no-unused-vars
const myLayout = styled.div`
    display: flex;
    width: 80%;
    height: 80%;
    backgroundColor: red;
    align-items: center;
    flex-direction: column;
`
// eslint-disable-next-line no-unused-vars
const myContainer = styled.div`
  width: 1200px;
  background-color: red;
`


const Layout = ({ children }) => {
  return (
    <myLayout>
      <myContainer>
        { children }
      </myContainer>
    </myLayout>
  )    
}


export default Layout