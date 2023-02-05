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
    const res = await fetch(`${BASE_URL}/${userId}`, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json
  } catch (error) {
    console.log(error)
  }
}

const create = async (emotionPostData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emotionPostData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createComment = async (id, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const addReaction = async () => {
  try {

  } catch (error) {
    console.log(error)
  }
}



const update = async (emotionPostData) => {
  try {
    const res = await fetch(`${BASE_URL}/${emotionPostData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emotionPostData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateComment= async () => {
  try {

  } catch (error) {
    console.log(error)
  }
}

const updateReaction= async () => {
  try {

  } catch (error) {
    console.log(error)
  }
}

const deleteEmotionPost= async () => {
  try {

  } catch (error) {
    console.log(error)
  }
}

const deleteComment= async () => {
  try {

  } catch (error) {
    console.log(error)
  }
}

const deleteReaction= async () => {
  try {

  } catch (error) {
    console.log(error)
  }
}



export { 
  index,
  show,
  feed,
  create,
  createComment,
  addReaction,
  update,
  updateComment,
  updateReaction,
  deleteEmotionPost,
  deleteComment,
  deleteReaction,
}