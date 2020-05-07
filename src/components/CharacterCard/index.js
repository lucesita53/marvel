import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '../ThemeContext'
import CharacterDetailModal from '../CharacterDetailModal'

const Content = styled.div`
  display: flex;
  width: 150px;
  height: 250px;
  background-size: cover;
  background-image: url(${(props) => props.image});
  border: none;
  border-radius: 10px;

  @media only screen and (min-width: 768px) {
    width: 256px;
    height: 380px;

    box-shadow: none;
  }
`

const ButtonCard = styled.button`
  margin: 15px;
  box-shadow: 0px 2px 13px ${(props) => (props.theme === 'white' ? '#000000' : '#FFFFFF')};
  display: flex;
  border: none;
  border-radius: 10px;
  padding: 0;

  @media only screen and (min-width: 768px) {
    box-shadow: none;
    margin: 30px;

    &:hover {
      box-shadow: 0px 2px 13px ${(props) => (props.theme === 'white' ? '#000000' : '#FFFFFF')};
      cursor: pointer;
    }
  }

  &:focus {
    outline: none;
  }
`
const Name = styled.div`
  text-align: left;
  font-size: 15px;
  font-family: Montserrat;
  font-weight: bold;
  letter-spacing: -0.25px;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.7);
  align-self: flex-end;
  margin-bottom: 17px;
  margin-left: 13px;
  border-radius: 10px;
  padding: 5px;

  @media only screen and (min-width: 768px) {
    font-size: 23px;
    margin-bottom: 27px;
    margin-left: 23px;
  }
`

function disableScroll() {
  document.body.style.overflow = 'hidden'
}

function CharacterCard({ character }) {
  const theme = useContext(ThemeContext)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const { name, thumbnail } = character
  const { path, extension } = thumbnail
  return (
    <>
      <ButtonCard
        theme={theme}
        type="button"
        onClick={() => {
          setIsModalOpen(true)
          disableScroll()
        }}>
        <Content image={`${path}.${extension}`}>
          <Name>{name}</Name>
        </Content>
      </ButtonCard>
      {isModalOpen && <CharacterDetailModal character={character} setIsModalOpen={setIsModalOpen} />}
    </>
  )
}

export default CharacterCard
