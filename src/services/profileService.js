import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

async function addPhoto(photoData, profileId) {
  const res = await fetch(`${BASE_URL}/${profileId}/add-photo`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: photoData
  })
  return await res.json()
}

const friendsIdx = async () => {
  try {
    const res = await fetch(`${BASE_URL}/friends`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json
  } catch (error) {
    console.log(error)
  }
}

const friendRequests = async () => {
  try {
    const res = await fetch(`${BASE_URL}/friendRequests`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json
  } catch (error) {
    console.log(error)
  }
}

const sendFriendRequest = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/sendFriendRequest`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json
  } catch (error) {
    console.log(error)
  }
}

const acceptRequest = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/acceptRequest`, {
      method: 'PATCH',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json
  } catch (error) {
    console.log(error)
  }
}

export { 
  getAllProfiles, 
  addPhoto,
  friendsIdx,
  friendRequests,
  sendFriendRequest,
  acceptRequest,
}
