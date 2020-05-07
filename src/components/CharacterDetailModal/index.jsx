import React from 'react'
import styled from 'styled-components'

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`

const ModalContent = styled.div`
  position: fixed;
  background: white;
  width: 437px;
  height: 448px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  z-index: 2;
`

const ModalBackground = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

const CloseButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const CloseButton = styled.button`
  color: #00000076;
  font-size: 30px;
  font-family: Roboto;
  border: none;
  background-color: #ffffff;

  padding: 0;
  padding-right: 20px;
  padding-top: 5px;
  cursor: pointer;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`

function enableScroll() {
  document.body.style.overflow = 'scroll'
}

function CharacterDetailModal({ character, setIsModalOpen }) {
  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButtonContainer>
          <CloseButton
            type="button"
            onClick={() => {
              setIsModalOpen(false)
              enableScroll()
            }}>
            x
          </CloseButton>
        </CloseButtonContainer>
      </ModalContent>
      <ModalBackground
        onClick={() => {
          setIsModalOpen(false)
          enableScroll()
        }}
      />
    </ModalWrapper>
  )
}

export default CharacterDetailModal
