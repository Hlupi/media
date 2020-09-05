import React from 'react'
import styled from 'styled-components'

import { episodesData } from '../../data'


const EpisodeOverview = ({ selected, episode }) => {
  const {image, plot} = episodesData[selected]

  return (
    <div>
      <div style={{ backgroundImage: `url("/img/${image}")` }} />
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
    </div>
  )
}


export default EpisodeOverview
