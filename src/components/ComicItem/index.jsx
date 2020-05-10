import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 150px;
  display: flex;
`

const Image = styled.div`
  background-size: cover;
  background-image: url(${(props) => props.src});
  border: none;
  height: 125px;
  width: 100px;
`

const TextWrapper = styled.div`
  width: calc(100% - 100px);
  padding: 0 10px;
  padding-top: 10px;
`

const Title = styled.div`
  color: #505050;
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
`

const Description = styled.div`
  padding-top: 10px;
  color: #505050;
  font-family: Montserrat;
  font-weight: 300;
  font-size: 12px;
`

function ComicItem({ history, comic }) {
  const { thumbnail, title, description, id } = comic
  const { path, extension } = thumbnail

  const imagePath = path.replace('http', 'https')

  return (
    <Wrapper onClick={() => history.push(`/comic-detail/${id}`)}>
      <Image src={`${imagePath}.${extension}`} />
      <TextWrapper>
        <Title>{title}</Title>
        <Description>{`${description ? `${description.split(' ').splice(0, 10).join(' ')}...` : ''}`}</Description>
      </TextWrapper>
    </Wrapper>
  )
}

export default ComicItem
