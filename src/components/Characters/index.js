import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useQuery } from 'react-query'
import getCharacters, { getCharacterRandom } from '../../utils/APICall'
import CharacterCard from '../CharacterCard'
import NotFound from '../NotFound'

const Wrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    margin: 20px 40px;
  }
`

function Characters({ characterSearch, history }) {
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
    if (
      randomStatus &&
      randomStatus === 'success' &&
      randomData &&
      (characterSearch.length < 2 || characterSearch.length === 0)
    ) {
      setCharacters(randomData.data.data.results)
    }
  }, [randomStatus, randomData, characterSearch])

  useEffect(() => {
    if (characterSearch.length > 2) {
      refetchSearch()
    } else if (characterSearch.length === 0) {
      refetchRandom()
    }
  }, [characterSearch, refetchSearch, refetchRandom])

  return (
    <>
      {characters.length > 0 ? (
        <Wrapper>
          {characters.map((character) => (
            <div key={character.id}>
              <CharacterCard character={character} history={history} />
            </div>
          ))}
        </Wrapper>
      ) : (
        characterSearch.length > 2 && <NotFound search={characterSearch} />
      )}
    </>
  )
}

export default Characters
