import * as profileService from '../../../services/profileService'


const DenyRequest = ({id, requests, setRequests}) => {

  const handleDenyRequest = () => {
    profileService.denyRequest(id)
    setRequests(requests.filter((request) => 
      request._id !== id
    ))
  }

  return ( 
    <>
    <button onClick={() => {
      return (
        handleDenyRequest()
      )
    }}>Deny Request</button>
    </>
  );
}

export default DenyRequest;