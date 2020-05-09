import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import getCharacters from '../../utils/APICall'
import CharacterCard from '../CharacterCard'

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    margin: 20px 40px;
  }
`

function Characters({ characterSearch }) {
  const { status, data, error, isFetching } = useQuery('characters', getCharacters)
  const characters = (data && data.data && data.data.results) || []

  console.log(data && data.data && data.data.results)
  return (
    <Wrapper>
      {characters.length > 0 &&
        characters.map(
          (character) =>
            character.name.toLowerCase().includes(characterSearch.toLowerCase()) && (
              <div key={character.id}>
                <CharacterCard character={character} />
              </div>
            )
        )}
    </Wrapper>
  )
}

export default Characters
