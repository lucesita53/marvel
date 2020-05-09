import axios from 'axios'
import getTimestamp, { getApiKey, getHash } from './helper'

const getCharacters = async (nameStart) => {
  const start = nameStart === '' ? '' : `nameStartsWith=${nameStart}`
  const data = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?${start}&apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export const getCharacterComics = async (id) => {
  const { data } = await axios.get(
    `http://gateway.marvel.com/v1/public/characters/${id}/comics?apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export const getComicDetail = async (id) => {
  const { data } = await axios.get(
    `http://gateway.marvel.com/v1/public/comics/${id}?apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export default getCharacters