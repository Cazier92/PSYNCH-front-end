import * as profileService from '../../../services/profileService'
import { useEffect } from 'react';

const AcceptRequest = ({id, requests, setRequests}) => {

  const handleAcceptRequest = () => {
    profileService.acceptRequest(id)
    setRequests(requests.filter((request) => 
      request._id !== id
    ))
  }

  return ( 
    <>
    <button onClick={() => {
      return (
        handleAcceptRequest()
      )
    }}>Accept Request</button>
    </>
  );
}

export default AcceptRequest;