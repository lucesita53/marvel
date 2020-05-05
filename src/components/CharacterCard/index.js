import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 10px;
  box-shadow: 0px 2px 13px #000000;
  display: flex;
  width: 256px;
  height: 380px;
`

function CharacterCard({ name }) {
  return (
    <Wrapper>
      <span>{name}</span>
    </Wrapper>
  )
}

export default CharacterCard
