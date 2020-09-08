import React, { useState } from 'react'
import styled from 'styled-components'

import SearchIcon from '../../fragments/icons/search'
import Wrapper from '../../fragments/wrapper'

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Input = styled.input`
  margin-right: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  background: rgba(255,255,255,0.7);
  border-color: ${({ error }) => error ? 'rgb(254, 43, 0)' : 'rgba(0,0,0,0.8)' };
  font-size: 23px;
  line-height: 27px;
`


const Search = ({ history }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [error, setError] = useState(false)

  const handleChange = e => {
    setSearchTerm(e.target.value)
    setError(!e.target.validity.valid)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if(searchTerm === '') {
      setError(true)
    } else {
      history.push(`/${searchTerm}`)
    }
  }

  return (
    <Wrapper title='Search for your media content here'>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} error={error} type='text' pattern='[^\s]+(\s[^\s]+)*' aria-label="type the name of the content you're looking for" />
        <button type='submit'><SearchIcon /></button>
      </Form>
    </Wrapper>
  )
}

export default Search
