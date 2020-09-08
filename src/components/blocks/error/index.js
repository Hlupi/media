import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Wrapper from '../../fragments/wrapper'
import Arrow from '../../fragments/icons/arrow'

const Button = styled(Link)`
  font-size: 20px;
  & > svg {
    vertical-align: middle;
    & > g {
      stroke: #000;
    }

  }
`


const Error = ({ message }) => {
   return (
    <Wrapper title={`Oops, ${message}`}>
      <Button to='/'><Arrow /> Back</Button>
    </Wrapper>
   )
}

export default Error
