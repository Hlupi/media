import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { API_ENDPOINT } from '../../config/constants'
import { episodesData } from '../../data'


const SeasonOverview = () => {
  const [mediaData, setMediaData] = useState({})
  const [seasonData, setSeasonData] = useState({})
  const media = 'insecure'
  const season = 1

  const { Title, Plot } = mediaData
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

  const renderEpisodes = Episodes && Episodes.map((episode, i) => {
    const { Title, Released, Rating } = episode
    return (
      <li key={i}>
        <div style={{ backgroundImage: `url("/img/${episodesData[i].image}")` }} />
        <h3>{Title}</h3>
        <p>{episodesData[i].plot}</p>
      </li>
    )
  })

  return (
    <section>
      <div>
        <span>season {season}</span>
        <h1>{Title}</h1>
        <p>{Plot}</p>
        <div>
          <ul>{renderEpisodes}</ul>
          <button>prev</button>
          <button>next</button>
        </div>
      </div>
    </section>
  )
}

export default SeasonOverview
