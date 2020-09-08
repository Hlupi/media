import React from 'react'


const Star = () => {
  const style = { verticalAlign: 'text-bottom' }
  return (
    <svg style={style} width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="rating">
      <path d="M14 .692l4.324 8.761 9.668 1.406-6.996 6.819 1.651 9.63L14 22.76l-8.647 4.547 1.65-9.63-6.995-6.82 9.668-1.405z" fill="#EFD358" fillRule="nonzero" />
    </svg>
  )
}

export default Star
