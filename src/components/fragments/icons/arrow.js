import React from 'react'


const Arrow = ({ right }) => {
  const style = right ? { transform: `rotate(180deg)`} : {}

  return (
    <svg style={style} width="29" height="19" viewBox="0 0 29 19" xmlns="http://www.w3.org/2000/svg" role="img" aria-label={`${right ? 'Right' : 'Left'} arrow icon`}>
      <g stroke="#FFF" fill="none" fillRule="evenodd">
        <path d="M28.5 9.5H.5" /><path strokeLinecap="square" d="M9.5 18.5l-9-9 9-9" />
      </g>
    </svg>
  )
}

export default Arrow
