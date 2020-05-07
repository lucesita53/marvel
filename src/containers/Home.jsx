import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Characters from '../components/Characters'
import { ThemeContext } from '../components/ThemeContext'

const MainWrapper = styled.div`
  background-color: ${(props) => (props.theme === 'white' ? '#f2f2f2' : props.theme)};
  min-height: calc(100vh - 66px);
`

const Home = () => {
  const [characterName, setCharacterName] = useState('')
  const theme = useContext(ThemeContext)

  return (
    <>
      <header>
        <Header setCharacterName={setCharacterName} />
      </header>
      <MainWrapper theme={theme}>
        <Characters characterSearch={characterName} />
      </MainWrapper>
    </>
  )
}

export default Home
