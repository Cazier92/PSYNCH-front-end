import * as profileService from '../../../services/profileService'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
          <Link className="profile-link" to={`/profile/${request._id}`}>
            <div className='request-name'>
              <p>{request.name}</p>
            </div>
            </Link>
            <div className='action-btns'>
              <div>
                <AcceptRequest id={request._id} setRequests={setRequests} requests={requests}/>
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