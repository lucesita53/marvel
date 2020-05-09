import React, { useState } from 'react'
import styled from 'styled-components'
import Logo from '../../images/MarvelLogo.svg'

const Wrapper = styled.div`
  height: 66px;
  box-shadow: 0px 0px 10px #000000;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffffff;
`

const Marvel = styled.a`
  background-repeat: no-repeat;
  background-image: url(${Logo});
  width: 110px;
  margin: 0 10px;

  @media only screen and (min-width: 768px) {
    margin: 0 20px;
    cursor: pointer;
  }
`

const SearchBar = styled.input`
  padding: 12px;
  margin: 0.5em 0;
  font-size: 20px;
  font-family: Roboto;
  letter-spacing: 0px;
  color: #505050;
  border: none;
  border-left: 1px solid #a8a8a8;
  width: -webkit-fill-available;

  @media only screen and (min-width: 768px) {
    font-size: 24px;
  }

  &::placeholder {
    color: #a8a8a8;
    font-size: 20px;
    font-family: Roboto;
    letter-spacing: 0px;

    @media only screen and (min-width: 768px) {
      font-size: 24px;
    }
  }

  &:focus {
    outline: none;
  }
`

function Header({ setCharacterName }) {
  const [search, setSearch] = useState('')

  const handleChange = (event) => {
    setSearch(event.target.value)
    setCharacterName(event.target.value)
  }

  return (
    <Wrapper>
      <Marvel href="https://developer.marvel.com/docs" target="_blank" />
      <SearchBar placeholder="Buscar" type="text" value={search} onChange={handleChange} />
    </Wrapper>
  )
}

export default Header
