import React, { useState } from 'react'
import styled from 'styled-components'

import { episodesData } from '../../data'

const Wrapper = styled.div`
  overflow: hidden;
`

const List = styled.ul`
  margin-bottom: 24px;
  display: flex;
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
`

const H3 = styled.h3`
  margin-bottom: 10px;
`

const Episodes = ({ episodes = [], select }) => {
  const [translate, setTranslate] = useState(0)

  if(!episodes.length) return null

  const slide = (direction) => {
    if(direction === 'forward') {
      setTranslate(translate + 228)
    } else {
      setTranslate(translate - 228)
    }
  }

  const renderEpisodes = episodes && episodes.map((episode, i) => {
    const { Title } = episode
    return (
      <Card key={i} onClick={() => select(i)}>
        <Thumb style={{ backgroundImage: `url("/img/${episodesData[i].image}")` }} />
        <H3>{Title}</H3>
        <p>{episodesData[i].plot}</p>
      </Card>
    )
  })

  return (
    <Wrapper>
      <List style={{ transform: `translateX(${translate}px)`}}>{renderEpisodes}</List>
      <button disabled={translate === 0} onClick={() => slide('forward')}>prev</button>
      <button onClick={slide}>next</button>
    </Wrapper>
  )
}


export default Episodes
