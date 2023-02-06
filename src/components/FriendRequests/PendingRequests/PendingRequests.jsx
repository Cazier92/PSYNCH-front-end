import * as profileService from '../../../services/profileService'
import { useState, useEffect } from 'react';


const PendingRequests = (props) => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const fetchRequests = async () => {
      const requestsData = await profileService.friendRequests()
      setRequests(requestsData)
      console.log('requests data:', requestsData)
      console.log('requests:', requests)
    }
    fetchRequests()
  }, [])

console.log(requests)

  return ( 
    <>
    {requests.length !== 0 ?
      requests.map(request => {
        return(
          <p>{request.name}</p>
        )
      })
    :
    <p>Loading...</p>
    }
    </>
  );
}

export default PendingRequests;