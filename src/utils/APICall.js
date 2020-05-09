import axios from 'axios'
import getTimestamp, { getApiKey, getHash } from './helper'

const getCharacters = async () => {
  const { data } = await axios.get(
    `http://gateway.marvel.com/v1/public/characters?apikey=${getApiKey()}&hash=${getHash()}&ts=${getTimestamp()}`
  )
  return data
}

export default getCharacters
