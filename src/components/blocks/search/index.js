import React, { useState } from 'react'
import styled from 'styled-components'

import SearchIcon from '../../fragments/icons/search'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`

const H1 = styled.h1`
  margin-bottom: 40px;
  font-family: 'Helvetica Neue Bold';
  font-size: 74px;
  line-height: 88px;
`

const Input = styled.input`
  margin-right: 10px;
  border-style: solid;
  border-width: 1px;
  border-radius: 3px;
  border-color: ${({ error }) => error ? 'rgb(184, 86, 86)' : 'rgba(151, 151, 151, 0.2)' };
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
    <Container>
      <H1>Search for your media content here</H1>
      <Form onSubmit={handleSubmit}>
        <Input onChange={handleChange} error={error} type='text' pattern='[^\s]+(\s[^\s]+)*' aria-label="type the name of the content you're looking for" />
        <button type='submit'><SearchIcon /></button>
      </Form>
    </Container>
  )
}

export default Search
