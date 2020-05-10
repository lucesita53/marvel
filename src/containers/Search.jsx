import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
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

  const { id } = useParams()

  const [characterName, setCharacterName] = useState('')
  const [comicName, setComicName] = useState('')

  const theme = useContext(ThemeContext)

  const renderDetail = window.document.URL.includes('/comic-detail')

  useEffect(() => {
    if (characterURL) {
      setCharacterName(characterURL)
    }
  }, [setCharacterName, characterURL])

  useEffect(() => {
    if (comicURL) {
      setComicName(comicURL)
    }
  }, [setComicName, comicURL])

  return (
    <>
      <header>
        <Header
          setCharacterName={setCharacterName}
          setComicName={setComicName}
          returnSearch={() => history.push('/')}
          characterName={characterName}
        />
      </header>
      {renderDetail ? (
        id && (
          <MainWrapper theme={theme}>
            <ComicDetail comicId={id} />
          </MainWrapper>
        )
      ) : comicName === '' ? (
        <MainWrapper theme={theme}>
          <Characters characterSearch={characterName} history={history} />
        </MainWrapper>
      ) : (
        <MainWrapper theme={theme}>
          <ComicDetail comicTitle={comicName} />
        </MainWrapper>
      )}
    </>
  )
}

export default Search
