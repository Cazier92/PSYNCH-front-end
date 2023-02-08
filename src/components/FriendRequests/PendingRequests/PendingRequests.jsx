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
      // console.log('requests data:', requestsData)
      // console.log('requests:', requests)
    }
    fetchRequests()
  }, [])

console.log(requests)

  return ( 
    <>
    {requests.length !== 0 ?
      requests.map(request => {
        return(
          <>
          <div className='request-card'>
            <p>{request.name}</p>
            <div>
              <AcceptRequest id={request._id} setRequests={setRequests} requests={requests}/>
            </div>
            <div>
              <DenyRequest id={request._id} setRequests={setRequests} requests={requests}/>
            </div>
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