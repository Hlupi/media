import React, { useState } from 'react'
import styled from 'styled-components'

import { episodesData } from '../../data'
import Arrow from './arrow'

const Wrapper = styled.div`
  margin-top: auto;
  overflow: hidden;
`

const List = styled.ul`
  margin-bottom: 14px;
  display: flex;
  transition: transform .35s ease-out;
`

const Card = styled.li`
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
  font-family: 'Helvetica Neue Bold';
  font-size: 15px;
  line-height: 18px;
`

const P = styled.p`
  font-size: 13px;
  line-height: 15px;
`

const BContainer = styled.div`
  padding-right: 21px;
  padding-bottom: 19px;
  text-align: right;
`

const Button = styled.button`
  padding: 10px;
  opacity: ${({ disabled }) => disabled ? '0.2': '1'};
  transition: opacity .35s ease-out;
  &:first-of-type {
    margin-right: 5px;
  }
`

const Episodes = React.forwardRef(({ episodes = [], select, selected }, ref) => {
  const [translate, setTranslate] = useState(0)

  if(!episodes.length) return null

  const slide = (direction) => {
    if(direction === 'back') {
      setTranslate(translate + 228)
    } else {
      setTranslate(translate - 228)
    }
  }

  const renderEpisodes = episodes && episodes.map((episode, i) => {
    const { Episode, Title } = episode
    return (
      <Card key={i} onClick={() => select(i)}>
        <Thumb selected={i === selected} style={{ backgroundImage: `url("/img/${episodesData[i].image}")` }}>
          <Number>{Episode}</Number>
        </Thumb>
        <H3>{Title}</H3>
        <P>{episodesData[i].plot}</P>
      </Card>
    )
  })

  return (
    <Wrapper ref={ref}>
      <List style={{ transform: `translateX(${translate}px)`}}>{renderEpisodes}</List>
      <BContainer>
        <Button disabled={translate === 0} onClick={() => slide('back')} aria-label='Slide back'><Arrow /></Button>
        <Button onClick={slide} aria-label='Slide forward'><Arrow right /></Button>
      </BContainer>
    </Wrapper>
  )
})


export default Episodes
