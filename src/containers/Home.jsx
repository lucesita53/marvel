import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Characters from '../components/Characters'

const MainWrapper = styled.div`
  background-color: #f2f2f2;
  min-height: calc(100vh - 66px);
`

const Home = () => {
  const [characterName, setCharacterName] = useState('')

  return (
    <>
      <header>
        <Header setCharacterName={setCharacterName} />
      </header>
      <MainWrapper>
        <Characters characterSearch={characterName} />
      </MainWrapper>
    </>
  )
}

export default Home
