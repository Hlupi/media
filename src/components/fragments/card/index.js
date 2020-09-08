import React from 'react'
import styled from 'styled-components'

const Container = styled.li`
  flex-basis: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  margin-right: 28px;
`

const Thumb = styled.div`
  margin-bottom: 20px;
  height: 134px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: #000000;
    z-index: 1;
    opacity: ${({ selected }) => selected ? '0' : '0.6'};
    transition: opacity .35s ease-out;
  }
  &:hover {
    &:before {
       opacity: 0;
    }
  }
`

const Number = styled.span`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 30px;
  height: 30px;
  background: #fff;
  color: #000;
  font-family: 'Helvetica Neue Bold';
  font-size: 16px;
  line-height: 19px;
  position: relative;
  z-index: 2;
`

const H3 = styled.h3`
  margin-bottom: 10px;
  font-size: 15px;
  line-height: 18px;
`

const P = styled.p`
  font-size: 13px;
  line-height: 15px;
`


const Card = ({ onClick, selected, image, episode, title, plot }) => {
  return (
    <Container onClick={onClick}>
      <Thumb selected={selected} style={{ backgroundImage: `url("/img/${image}")` }}>
        <Number>{episode}</Number>
      </Thumb>
      <H3>{title}</H3>
      <P>{plot}</P>
    </Container>
  )
}

export default Card
