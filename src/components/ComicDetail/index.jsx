import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
// import { ThemeContext } from '../ThemeContext'
import { getComicByName, getComicById } from '../../utils/APICall'
import { monthNames } from '../../utils/helper'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    padding: 50px;
  }
`

const Image = styled.div`
  background-size: cover;
  background-image: url(${(props) => props.src});
  border: none;
  width: 300px;
  height: 500px;

  @media only screen and (min-width: 768px) {
    width: 545px;
    height: 838px;
  }
`

const TextWrapper = styled.div`
  width: auto;
  padding: 10px;
  padding-top: 20px;

  @media only screen and (min-width: 768px) {
    padding: 0 50px;
    width: calc(100% - 645px);
  }
`

const Title = styled.div`
  color: #505050;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 23px;
  line-height: 23px;
  margin-bottom: 30px;

  @media only screen and (min-width: 768px) {
    font-size: 25px;
    line-height: 25px;
  }
`

const Item = styled.div`
  color: #505050;
  font-family: Montserrat;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.7px;
  text-transform: capitalize;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`

const Items = styled.div`
  margin-bottom: 30px;
`

const Description = styled.div`
  padding-top: 10px;
  color: #505050;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 21px;
  }
`

function ComicDetail({ comicTitle, comicId }) {
  const [comic, setComic] = useState(null)
  const { status, data } = useQuery('comic', () => (comicId ? getComicById(comicId) : getComicByName(comicTitle)))

  useEffect(() => {
    if (status && status === 'success' && data) {
      const firstResult = data.data.data.results.length > 0 && data.data.data.results[0]
      setComic(firstResult || null)
    }
  }, [status, data])

  const getSrc = () => {
    if (comic) {
      const { thumbnail } = comic
      const { path, extension } = thumbnail
      const imagePath = path.replace('http', 'https')

      return `${imagePath}.${extension}`
    }
    return ''
  }

  const getItems = (comicInfo) => {
    let published = 'N/A'
    const datePublished = comicInfo.dates.find((date) => date.type === 'onsaleDate').date

    if (datePublished) {
      const transformDate = new Date(datePublished)
      published = `${
        monthNames[transformDate.getMonth() - 1]
      } ${transformDate.getDate()}, ${transformDate.getFullYear()}`
    }

    return (
      <Items>
        <Item>{`Published: ${published}`}</Item>
        {comicInfo.creators &&
          comicInfo.creators.items.length > 0 &&
          comicInfo.creators.items.map((item) => (
            <Item key={`${item.role} - ${item.name}`}>{`${item.role}: ${item.name}`}</Item>
          ))}
      </Items>
    )
  }

  return (
    <Wrapper>
      <Image src={getSrc(comic)} />
      <TextWrapper>
        <Title>{comic && comic.title}</Title>
        {comic && getItems(comic)}
        <Description>{comic && comic.description}</Description>
      </TextWrapper>
    </Wrapper>
  )
}

export default ComicDetail
