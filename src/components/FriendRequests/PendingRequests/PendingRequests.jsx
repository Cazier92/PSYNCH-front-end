import * as profileService from '../../../services/profileService'
import { useState, useEffect } from 'react';


const PendingRequests = (props) => {
  const [requests, setRequests] = useState(null)

  useEffect(() => {
    const fetchRequests = async () => {
      const requestsData = await profileService.friendRequests()
      setRequests(requestsData)
      console.log('requests data:', requestsData)
      console.log('requests:', requests)
    }
    fetchRequests()
  }, [])



  return ( 
    <>
    {requests.map((request) => {
      return (
        <p>{request.name}</p>

      )
    })}
    </>
  );
}

export default PendingRequests;