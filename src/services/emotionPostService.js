import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/emotionPosts`

const index = async () => {
  try {
    const res = await fetch(BASE_URL)
    return res.json
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const feed = async (userId) => {
  try {
    const res = await fetch(`${BASE_URL}/${userId}`)
    return res.json
  } catch (error) {
    console.log(error)
  }
}

export { 
  index,
  show,
  feed,
}