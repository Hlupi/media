import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_ENDPOINT } from '../../../config/constants'
import { episodesData } from '../../../data/index'
import EpisodeInformation from '../episode-informaton'
import EpisodesList from '../episodes-list'
import ErrorPage from '../error'

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
  const [seasonData, setSeasonData] = useState({})
  const [selectedEpisode, setSelectedEpisode] = useState(0)
  const [height, setHeight] = useState(0)
  const [dataIndices, setDataIndices] = useState([]) //to access the very limited dummy data set
  const episodesList = React.createRef()

  const { Title, Plot, Poster, Error } = mediaData
  const { Season, Episodes } = seasonData

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max))
  }

  const getSeason = (season) => {
    return fetch(`${API_ENDPOINT}&t=${name}&Season=${season}`)
      .then(response => response.json())
      .then(data => {
        setSeasonData(data)
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    fetch(`${API_ENDPOINT}&t=${name}`)
      .then(response => response.json())
      .then(data => {
        setMediaData(data)
        if(data.Type === 'series') {
          getSeason(1)
        }
      })
      .catch(error => console.error(error))
  },[name])

  useEffect(() => {
    const episodesListHeight = episodesList && episodesList.current && episodesList.current.offsetHeight
    setHeight(episodesListHeight)
  }, [episodesList])

  useEffect(() => {
    if(Episodes) {
      Episodes.length && Episodes.length > episodesData.length ?
        setDataIndices(Episodes.map(_ => getRandomInt(episodesData.length)))
        : setDataIndices(Episodes.map((_, i) => i))
    }
  }, [Episodes])

  const select = (i) => {
    setSelectedEpisode(i)
  }

  return (
    <>
      {Error ?
        <ErrorPage message={Error} />
      :
      <Container>
        <SeasonView style={{ backgroundImage: `linear-gradient(rgba(0,0,0, 0.6), rgba(0,0,0, 0.6)), url("${Poster}")` }}>
          <Content>
            {Season && <Info>Season {Season}</Info>}
            <h1>{Title}</h1>
            <Info as='p'>{Plot}</Info>
          </Content>
          <EpisodesList forwardRef={episodesList} episodes={Episodes} select={select} selected={selectedEpisode} dataIndices={dataIndices} />
        </SeasonView>
        {Episodes && dataIndices.length &&
          <EpisodeInformation selected={dataIndices[selectedEpisode]} episode={Episodes[selectedEpisode]} height={height} />
        }
      </Container>
      }
      </>
  )
}

export default MediaOverview
