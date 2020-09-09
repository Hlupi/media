import React from 'react'

import { Container } from '../container'


const Spinner = () => {
  const color = 'rgb(225, 243, 97)'
  return (
    <Container>
      <svg version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 100 100" width="60px" enableBackground="new 0 0 0 0" xmlSpace="preserve" role='img' aria-labelledby="spinner">
        <title id="spinner">Loading</title>
        <circle stroke={color} fill="none" strokeWidth="4" cx="50" cy="50" r="44" strokeOpacity="0.5" />
        <circle stroke={color} fill="#fff" strokeWidth="3" cx="8" cy="54" r="6" >
          <animateTransform
            attributeName="transform"
            dur="2s"
            type="rotate"
            from="0 50 48"
            to="360 50 52"
            repeatCount="indefinite" />
        </circle>
      </svg>
    </Container>
  )
}

export default Spinner
