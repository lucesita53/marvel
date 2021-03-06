import axios from 'axios'
import getTimestamp, { getApiKey, getHash } from './APIsetting'

const getCharacters = async (nameStart) => {
  const start = nameStart === '' ? '' : `nameStartsWith=${nameStart}`
  const data = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?${start}&apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export const getCharacterRandom = async () => {
  const random = Math.floor(Math.random() * (1493 - 0)) + 0
  const data = await axios.get(
    `https://gateway.marvel.com/v1/public/characters?limit=1&offset=${random}&apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export const getCharacterComics = async (id) => {
  const data = await axios.get(
    `https://gateway.marvel.com/v1/public/characters/${id}/comics?orderBy=-modified&apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export const getComicByName = async (comicTitle) => {
  const title = comicTitle.trim().replace(' ', '%20')

  const data = await axios.get(
    `https://gateway.marvel.com/v1/public/comics?title=${title}&orderBy=-modified&apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export const getComicById = async (comicId) => {
  const data = await axios.get(
    `https://gateway.marvel.com/v1/public/comics/${comicId}?apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export default getCharacters
