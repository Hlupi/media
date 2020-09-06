import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_ENDPOINT } from '../../config/constants'
import EpisodeOverview from './episode-overview'
import EpisodesList from './episodes'

const Container = styled.section`
  display: flex;
`

const SeasonView = styled.div`
  padding-left: 96px;
  flex-basis: 65%;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  & > * {
    color: #fff;
  }
`

const S = styled.span`
  font-size: 23px;
  line-height: 27px;
`

const H1 = styled.h1`
  font-family: 'Helvetica Neue Bold';
  font-size: 74px;
  line-height: 88px;
`

const P = styled.p`
  font-size: 23px;
  line-height: 27px;
`

const Content = styled.div`
  margin-top: 222px;
  max-width: 492px;
  align-self: center;
`


const SeasonOverview = () => {
  const [mediaData, setMediaData] = useState({})
  const [seasonData, setSeasonData] = useState({})
  const [selectedEpisode, setSelectedEpisode] = useState(0)
  const [height, setHeight] = useState(0)
  const episodesList = React.createRef()
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

  useEffect(() => {
    const episodesListHeight = episodesList && episodesList.current && episodesList.current.offsetHeight
    setHeight(episodesListHeight)
  }, [episodesList])

  const select = (i) => {
    setSelectedEpisode(i)
  }

  return (
    <Container>
      <SeasonView style={{ backgroundImage: `linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url("${Poster}")` }}>
        <Content>
          <S>Season {season}</S>
          <H1>{Title}</H1>
          <P>{Plot}</P>
        </Content>
        <EpisodesList ref={episodesList} episodes={Episodes} select={select} selected={selectedEpisode} />
      </SeasonView>
      {Episodes &&
        <EpisodeOverview selected={selectedEpisode} episode={Episodes[selectedEpisode]} height={height} />
      }
    </Container>
  )
}

export default SeasonOverview
