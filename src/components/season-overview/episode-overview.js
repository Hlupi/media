import React from 'react'
import styled from 'styled-components'

import { episodesData } from '../../data'

const Container = styled.div`
  flex-basis: 35%;
  flex-grow: 0;
  flex-shrink: 0;
`

const Thumb = styled.div`
  height: ${({ height }) => height ? `calc(100% - ${height}px)` : 'calc(100% - 250px) '} ;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const EpisodeOverview = ({ selected, episode, height }) => {
  const {image, plot} = episodesData[selected]

  return (
    <Container>
      <Thumb style={{ backgroundImage: `url("/img/${image}")` }} height={height} />
      <div>
        <div>
          <p>Episode {episode.Episode} - {episode.Released}</p>
          <span>{episode.imdbRating}</span>
        </div>
        <div>
          <h2>{episode.Title}</h2>
          <p>{plot}</p>
        </div>
      </div>
    </Container>
  )
}


export default EpisodeOverview
