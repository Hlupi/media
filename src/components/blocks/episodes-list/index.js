import React, { useState } from 'react'
import styled from 'styled-components'

import { episodesData } from '../../../data'
import Card from '../../fragments/card'
import Arrow from '../../fragments/icons/arrow'

const Wrapper = styled.div`
  margin-top: auto;
  overflow: hidden;
`

const List = styled.ul`
  margin-bottom: 14px;
  display: flex;
  transition: transform .35s ease-out;
`

const BContainer = styled.div`
  padding-right: 21px;
  padding-bottom: 19px;
  text-align: right;
`

const Button = styled.button`
  padding: 10px;
  opacity: ${({ disabled }) => disabled ? '0.2' : '1'};
  transition: opacity .35s ease-out;
  &:first-of-type {
    margin-right: 5px;
  }
`

const EpisodesList = ({ episodes = [], select, selected, forwardRef }) => {
  const [translate, setTranslate] = useState(0)
  const [active, setActive] = useState(0)

  const slide = (direction) => {
    if (direction === 'back') {
      setTranslate(translate + 228)
      setActive(active - 1)
      select(active - 1)
    } else {
      setTranslate(translate - 228)
      setActive(active + 1)
      select(active + 1)
    }
  }

  const handleClick = (i) => {
    setActive(i)
    select(i)
  }

  if (!episodes.length) return null

  const renderEpisodes =  episodes.map((episode, i) => {
    const { Episode, Title } = episode
    return (
      <Card key={i}
        onClick={() => handleClick(i)}
        selected={i === selected}
        image={episodesData[i].image}
        episode={Episode}
        title={Title}
        plot={episodesData[i].plot}
      />
    )
  })

  return (
    <Wrapper ref={forwardRef}>
      <List style={{ transform: `translateX(${translate}px)` }}>{renderEpisodes}</List>
      <BContainer>
        <Button disabled={translate === 0} onClick={() => slide('back')} aria-label='Slide back'><Arrow /></Button>
        <Button disabled={active === episodes.length - 1} onClick={slide} aria-label='Slide forward'><Arrow right /></Button>
      </BContainer>
    </Wrapper>
  )
}


export default EpisodesList
