import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import getCharacters, { getCharacterRandom } from '../../utils/APICall'
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
  const { status: allStatus, data: allData, refetch: refetchSearch } = useQuery(
    'characters',
    () => getCharacters(characterSearch),
    { manual: true }
  )
  const { status: randomStatus, data: randomData, refetch: refetchRandom } = useQuery(
    'randomCharacter',
    getCharacterRandom,
    { manual: true }
  )

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (allStatus && allStatus === 'success' && allData && characterSearch.length > 0) {
      setCharacters(allData.data.data.results)
    }
  }, [allStatus, allData, characterSearch])

  useEffect(() => {
    if (randomStatus && randomStatus === 'success' && randomData) {
      setCharacters(randomData.data.data.results)
    }
  }, [randomStatus, randomData])

  useEffect(() => {
    if (characterSearch.length > 2) {
      refetchSearch()
    } else if (characterSearch.length === 0) {
      refetchRandom()
    }
  }, [characterSearch, refetchSearch, refetchRandom])

  return (
    <Wrapper>
      {characters.length > 0 ? (
        characters.map((character) => (
          <div key={character.id}>
            <CharacterCard character={character} />
          </div>
        ))
      ) : (
        <span>NOT FOUND</span>
      )}
    </Wrapper>
  )
}

export default Characters
