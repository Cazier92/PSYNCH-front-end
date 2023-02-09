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
            <div className='request-name'>
              <p>{request.name}</p>
            </div>
            <div className='action-btns'>
              <div>
                <AcceptRequest id={request._id} setRequests={setRequests} requests={requests} friends={props.friends} setFriends={props.setFriends}/>
              </div>
              <div>
                <DenyRequest id={request._id} setRequests={setRequests} requests={requests}/>
              </div>
            </div>
          </div>
          
          </>
        )
      })
    :
    <p className='placeholder-text'>No Requests</p>
    }
    </>
  );
}

export default PendingRequests;