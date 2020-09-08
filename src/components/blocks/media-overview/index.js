import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_ENDPOINT } from '../../../config/constants'
import EpisodeInformation from '../episode-informaton'
import EpisodesList from '../episodes-list'
import ErrorPage from '../error'
import SeasonSelect from '../select'

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const SeasonView = styled.div`
  padding-top: 29px;
  padding-left: 38px;
  flex-basis: 100%;
  flex-grow: 1;
  flex-shrink: 0;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  @media(min-width: 1280px) {
    padding-left: 96px;
    flex-basis: 65%;
  }
  & > * {
    color: #fff;
  }
`

const Info = styled.span`
  font-size: 23px;
  line-height: 27px;
`

const Content = styled.div`
  max-width: 492px;
  align-self: center;
  @media(max-width: 1439px) {
    margin-bottom: 38px;
  }
`


const MediaOverview = ({ match }) => {
  const name = match.params.slug
  const [mediaData, setMediaData] = useState({})
  const [season, setSeason] = useState(1)
  const [seasonData, setSeasonData] = useState({})
  const [selectedEpisode, setSelectedEpisode] = useState(0)
  const [height, setHeight] = useState(0)
  const episodesList = React.createRef()

  const { Title, Plot, Poster, Error, totalSeasons } = mediaData
  const { Season, Episodes } = seasonData

  useEffect(() => {
    fetch(`${API_ENDPOINT}&t=${name}`)
      .then(response => response.json())
      .then(data => {
        setMediaData(data)
      })
      .catch(error => console.error(error))
  },[name])

  useEffect(() => {
    const episodesListHeight = episodesList && episodesList.current && episodesList.current.offsetHeight
    setHeight(episodesListHeight)
  }, [episodesList])

  useEffect(() => {
    if(mediaData.Type  === 'series') {
      fetch(`${API_ENDPOINT}&t=${name}&Season=${season}`)
        .then(response => response.json())
        .then(data => {
          setSeasonData(data)
        })
        .catch(error => console.error(error))
    }
  }, [season, mediaData, name])

  const select = (i) => {
    setSelectedEpisode(i)
  }

  const changeSeason = (num) => {
    setSeason(num)
  }

  return (
    <>
      {Error ?
        <ErrorPage message={Error} />
      :
      <Container>
        <SeasonView style={{ backgroundImage: `linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url("${Poster}")` }}>
          <Content>
            {Season && <SeasonSelect numOfOptions={totalSeasons} handleChange={changeSeason} selected={season} />}
            <h1>{Title}</h1>
            <Info as='p'>{Plot}</Info>
          </Content>
          <EpisodesList forwardRef={episodesList} episodes={Episodes} select={select} selected={selectedEpisode} />
        </SeasonView>
        {Episodes && <EpisodeInformation selected={selectedEpisode} episode={Episodes[selectedEpisode]} height={height} />}
      </Container>
      }
      </>
  )
}

export default MediaOverview
