import axios from "axios"


const URL = "http://localhost:3001"

const [responseArtists, responseSongs] = await Promise.all([
  axios.get(`${URL}/artists`, { timeout: 15000 }),
  axios.get(`${URL}/songs`, { timeout: 15000 }),
])

export const artistArray = responseArtists.data
export const songsArray = responseSongs.data

//console.log(responseArtists.data)
