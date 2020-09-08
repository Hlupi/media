import React from 'react'
import styled from 'styled-components'

import { episodesData } from '../../../data'
import Star from '../../fragments/icons/star'

const Container = styled.div`
  flex-basis: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  @media(min-width: 1280px) {
    flex-basis: 35%;
  }
`

const Thumb = styled.div`
  height: ${({ height }) => height ? `calc(100% - ${height}px)` : 'calc(100% - 250px) '} ;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const PaddedBox = styled.div`
  padding-left: 38px;
  padding-right: 44px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${({ height }) => `${height}px`};
`

const Stats = styled(PaddedBox)`
  padding-top: 45px;
  padding-bottom: 42px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);
  font-size: 18px;
  line-height: 22px;
`

const Rating = styled.span`
  margin-left: 17px;
  font-family: 'Helvetica Neue Bold';
`

const Description = styled(PaddedBox)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Name = styled.h2`
  margin-bottom: 7px;
  font-family: 'Helvetica Neue Bold';
  font-size: 27px;
  line-height: 32px;
`

const Plot = styled.p`
  font-size: 19px;
  line-height: 22px;
`


const EpisodeInformation = ({ selected, episode, height }) => {
  const { Episode, Released, imdbRating } = episode
  const { image, plot } = episodesData[selected]
  const roundedRating = Math.round(imdbRating)
  const ratingToDisplay = isNaN(roundedRating) ? '?' : roundedRating

  return (
    <Container>
      <Thumb style={{ backgroundImage: `url("/img/${image}")` }} height={height} />
      <Wrapper height={height}>
        <Stats>
          <p>Episode {Episode} &mdash; {Released}</p>
          <span>
            <Star />
            <Rating>{ratingToDisplay}</Rating>
            /10
          </span>
        </Stats>
        <Description>
          <Name>{episode.Title}</Name>
          <Plot>{plot}</Plot>
        </Description>
      </Wrapper>
    </Container>
  )
}


export default EpisodeInformation
