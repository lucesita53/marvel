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
  const { status, data } = useQuery('characters', () => getCharacters('spider'))
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (status && status === 'success') {
      setCharacters(data.data.data.results)
    }
  }, [status])

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
