import * as profileService from '../../../services/profileService'
import { useState, useEffect } from 'react';
import AcceptRequest from '../AcceptRequest/AcceptRequest';
import DenyRequest from '../DenyRequest/DenyRequest';
import './PendingRequests.css'

const PendingRequests = (props) => {
  const [requests, setRequests] = useState([])

  useEffect(() => {
    const fetchRequests = async () => {
      const requestsData = await profileService.friendRequests()
      setRequests(requestsData)
    }
    fetchRequests()
  }, [])



  return ( 
    <>
    {requests.length !== 0 ?
      requests.map(request => {
        return(
          <>
          <div className='request-card'>
            <p>{request.name}</p>
            <AcceptRequest id={request._id} setRequests={setRequests} requests={requests}/>
            <DenyRequest id={request._id} setRequests={setRequests} requests={requests}/>
          </div>
          
          </>
        )
      })
    :
    <p>No requests.</p>
    }
    </>
  );
}

export default PendingRequests;