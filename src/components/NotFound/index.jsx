import React from 'react'
import styled from 'styled-components'
import Shield from '../../images/Shield.svg'

const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 0 10px;
  flex-direction: column;
`

const Image = styled.div`
  background-repeat: no-repeat;
  background-image: url(${Shield});
  height: 150px;
  width: 150px;
  margin-top: ${(props) => (props.modal ? '40px' : '100px')};
  margin-bottom: ${(props) => (props.modal ? '15px' : '30px')};

  @media only screen and (min-width: 768px) {
    height: ${(props) => (props.modal ? '150px' : '300px')};
    width: ${(props) => (props.modal ? '150px' : '300px')};
  }
`

const Title = styled.span`
  text-align: center;
  color: #505050;
  font-family: Roboto;
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }
`

const Subtitle = styled.span`
  text-align: center;
  color: #a8a8a8;
  font-family: Roboto;
  font-weight: 400;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }
`

const NotFound = ({ search, comics }) => {
  return (
    <Wrapper>
      <Image modal={comics} />
      {comics ? (
        <Title>{`Ups... we couldn't find any comic of ${search}.`}</Title>
      ) : (
        <>
          <Title>{`Ups... we couldn't find ${search}.`}</Title>
          <Subtitle>{'Are you sure that is a hero?'}</Subtitle>
        </>
      )}
    </Wrapper>
  )
}

export default NotFound
