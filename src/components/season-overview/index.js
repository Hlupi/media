import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_ENDPOINT } from '../../config/constants'
import EpisodeOverview from './episode-overview'
import EpisodesList from './episodes'

const Container = styled.section`
  display: flex;
`

const SeasonView = styled.div`
  flex-basis: 65%;
  flex-grow: 0;
  flex-shrink: 0;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & > * {
    color: #fff;
  }
`


const SeasonOverview = () => {
  const [mediaData, setMediaData] = useState({})
  const [seasonData, setSeasonData] = useState({})
  const [selectedEpisode, setSelectedEpisode] = useState(0)
  const media = 'insecure'
  const season = 1

  const { Title, Plot, Poster } = mediaData
  const { Episodes } = seasonData

  useEffect(() => {
    fetch(`${API_ENDPOINT}&t=${media}`)
      .then(response => response.json())
      .then(data => {
        setMediaData(data)
      })
      .catch(error => console.error(error))
  },[])

  useEffect(() => {
    fetch(`${API_ENDPOINT}&t=${media}&Season=${season}`)
      .then(response => response.json())
      .then(data => {
        setSeasonData(data)
      })
      .catch(error => console.error(error))
  }, [])

  const select = (i) => {
    setSelectedEpisode(i)
  }

  return (
    <Container>
      <SeasonView style={{ backgroundImage: `url("${Poster}")` }}>
        <span>Season {season}</span>
        <h1>{Title}</h1>
        <p>{Plot}</p>
        <EpisodesList episodes={Episodes} select={select} />
      </SeasonView>
      {Episodes &&
        <EpisodeOverview selected={selectedEpisode} episode={Episodes[selectedEpisode]} />
      }
    </Container>
  )
}

export default SeasonOverview
