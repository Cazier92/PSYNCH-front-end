import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


import * as profileService from '../../../services/profileService'

const SendFriendRequest = (props) => {
  // const {id} = useParams()

  if (props.profile.friendRequests.includes(props.user._id)) {
    return (
      <>
        <p>Friend Request Pending</p>
      </>
    )
  } else if (props.profile.friends.includes(props.user._id)) {
    <>
      <p>You and {props.profile.name} are friends!</p>
    </>
  } else if (props.user.friendRequests.includes(props.profile._id)){
    return (
      <>
      <p>{props.profile.name} sent you a friend request!</p>
      </>
    )
  } else {
    return ( 
      <>
      
      <button onClick={() => {
          return profileService.sendFriendRequest(props.profile._id);
        }}>Add Friend</button>
      </>
    );
  }

}

export default SendFriendRequest;