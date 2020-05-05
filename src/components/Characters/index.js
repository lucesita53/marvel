import React from 'react'
import styled from 'styled-components'
import CharacterCard from '../CharacterCard'

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
`

const characters = [
  {
    name: 'spiderman',
  },
  {
    name: 'spiderwoman',
  },
  {
    name: 'batman',
  },
  {
    name: 'batwoman',
  },
]

function Characters({ characterSearch }) {
  return (
    <Wrapper>
      {characters.map(
        (character) => character.name.includes(characterSearch) && <CharacterCard name={character.name} />
      )}
    </Wrapper>
  )
}

export default Characters
