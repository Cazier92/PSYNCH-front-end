
import { useEffect, useState } from 'react';


import * as profileService from '../../../services/profileService'

const SendFriendRequest = (props) => {

  const [userProfile, setUserProfile] = useState([])

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(props.user.profile)
      setUserProfile(profileData)
    }
    fetchProfile()
  }, [props.user.profile])

  const [friendState, setFriendState] = useState('user')

  useEffect(() => {
    if (props.profile.friendRequests.some(element => element._id === userProfile._id)) {
      setFriendState('pending')
    } else if (props.profile.friends.some(element => element._id === userProfile._id)) {
      setFriendState('friends')
    } else if (userProfile.friendRequests?.some(element => element._id === props.profile._id)) {
      setFriendState('recievedRequest')
    } else if (props.profile._id === userProfile._id) {
      setFriendState('user')
    } else {
      setFriendState('notFriends')
    }
  }, [props.profile._id, props.profile.friendRequests, props.profile.friends, userProfile, userProfile.friendRequests])
  
  // console.log(friendState)



  if (friendState === 'pending') {
    return (
      <>
        <p>Friend Request Pending</p>
      </>
    )
  } else if (friendState === 'friends') {
    return (
    <>
      <p>You and {props.profile.name} are friends!</p>
    </>

    )
  } else if (friendState === 'recievedRequest') {
    return (
      <>
      <p>{props.profile.name} sent you a friend request!</p>
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
            profileService.sendFriendRequest(props.profile._id))
        }}>Add Friend</button>
      </>
    );
  }

}

export default SendFriendRequest;