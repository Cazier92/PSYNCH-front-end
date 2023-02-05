import { useParams } from 'react-router-dom';
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



  if (props.profile.friendRequests.filter(element => element._id === userProfile._id)) {
    return (
      <>
        <p>Friend Request Pending</p>
      </>
    )
  } else if (props.profile.friends.filter(element => element._id === userProfile._id)) {
    return (
    <>
      <p>You and {props.profile.name} are friends!</p>
    </>

    )
  } else if (userProfile.friendRequests.filter(element => element._id === props.profile._id)){
    return (
      <>
      <p>{props.profile.name} sent you a friend request!</p>
      </>
    )
  } else if (props.profile._id === userProfile._id) {
    return (
      <>
      </>
    )
  } else {
    return ( 
      <>
      
      <button onClick={() => {
          return profileService.sendFriendRequest(props.profile._id);
        }}>Add Friend</button>
      <p>{userProfile._id}</p>
      </>
    );
  }

}

export default SendFriendRequest;