import config from '../config'
import MD5 from 'blueimp-md5'

export const getHash = () => {
  const param = config.TIMESTAMP.concat(config.PRIVATE_API_KEY).concat(config.PUBLIC_API_KEY)
  return MD5(`${param}`)
}

export const getApiKey = () => {
  return config.PUBLIC_API_KEY
}

const getTimestamp = () => {
  return config.TIMESTAMP
}

export default getTimestamp
