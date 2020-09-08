import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #c5b99e;
  background-image:
    radial-gradient(circle farthest-corner at top left, rgba(254, 43, 0,1) 0%, rgba(225, 243, 97,0) 50%),
    radial-gradient(circle farthest-side at top right, rgba(181, 176, 177,1) 0%, rgba(181, 176, 177,0) 10%),
    radial-gradient(circle farthest-corner at bottom right, rgba(204, 104, 119,1) 0%, rgba(204, 104, 119, 0) 33%),
    radial-gradient(circle farthest-corner at top right, rgba(155, 221, 240,1) 0%, rgba(155, 221, 240,0) 50%),
    radial-gradient(ellipse at bottom center, rgba(225, 243, 97,1) 0%, rgba(254, 43, 0, 0) 80%);
`

const Title = styled.h1`
  margin-bottom: 40px;
  ${({ shorter }) => shorter && 'max-width: 750px;' }
`

const  Wrapper = ({ title, shorter, children }) => {
  return (
    <Container>
      <Title shorter={shorter}>{title}</Title>
      {children}
    </Container>
  )
}

export default Wrapper
