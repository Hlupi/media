import React from 'react'
import styled from 'styled-components'

const Dropdown = styled.select`
  font-size: 23px;
  line-height: 27px;
  background: none;
  border: none;
  color: #fff;
  appearance: none;
`

const Select = ({ numOfOptions, handleChange, selected }) => {
  const options = [...Array(Number(numOfOptions)).keys()]

  const change = (e) => {
    handleChange(e.target.value)
  }

  const renderOptions = options.map((_, i) => {
    return (
      <option key={i} value={i+1}>Season {i+1}</option>
    )
  })


  return (
    <Dropdown value={selected} onChange={change}>
      {renderOptions}
    </Dropdown>
  )
}

export default Select
