import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
// import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Characters from '../components/Characters'
import ComicDetail from '../components/ComicDetail'
import { ThemeContext } from '../components/ThemeContext'

const MainWrapper = styled.div`
  background-color: ${(props) => (props.theme === 'white' ? '#f2f2f2' : props.theme)};
  min-height: calc(100vh - 66px);
`

const Search = ({ history }) => {
  const URLparams = new URLSearchParams(window.location.search)
  const characterURL = URLparams.get('character')
  const comicURL = URLparams.get('comic')

  const [characterName, setCharacterName] = useState('')
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if (characterURL) {
      setCharacterName(characterURL)
    }
  }, [setCharacterName, characterURL])

  return (
    <>
      <header>
        <Header setCharacterName={setCharacterName} characterName={characterName} />
      </header>
      {!comicURL ? (
        <MainWrapper theme={theme}>
          <Characters characterSearch={characterName} />
        </MainWrapper>
      ) : (
        <MainWrapper theme={theme}>
          <ComicDetail comicTitle={comicURL} />
        </MainWrapper>
      )}
    </>
  )
}

export default Search
