
import { useEffect, useState } from 'react';


import * as profileService from '../../../services/profileService'

const SendFriendRequest = ({profile, user}) => {

  const [userProfile, setUserProfile] = useState([])
  const [friendState, setFriendState] = useState('user')

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(user.profile)
      setUserProfile(profileData)
    }
    fetchProfile()
  }, [user.profile])


  useEffect(() => {
    if (profile.friendRequests.some(element => element._id === userProfile._id)) {
      setFriendState('pending')
    } else if (profile.friends.some(element => element._id === userProfile._id)) {
      setFriendState('friends')
    } else if (userProfile.friendRequests?.some(element => element._id === profile._id)) {
      setFriendState('recievedRequest')
    } else if (profile._id === userProfile._id) {
      setFriendState('user')
    } else {
      setFriendState('notFriends')
    }
  }, [profile._id, profile.friendRequests, profile.friends, userProfile, userProfile.friendRequests])
  




  if (friendState === 'pending') {
    return (
      <>
        <p>Friend Request Pending</p>
      </>
    )
  } else if (friendState === 'friends') {
    return (
    <>
      <p>You and {profile.name} are friends!</p>
    </>

    )
  } else if (friendState === 'recievedRequest') {
    return (
      <>
      <p>{profile.name} sent you a friend request!</p>
      </>
    )
  } else if (friendState === 'user') {
    return (
      <>
      </>
    )
  } else {
    return ( 
      <>
      
      <button onClick={() => {
          return (
            setFriendState('pending'),
            profileService.sendFriendRequest(profile._id))
        }}>Add Friend</button>
      </>
    );
  }

}

export default SendFriendRequest;