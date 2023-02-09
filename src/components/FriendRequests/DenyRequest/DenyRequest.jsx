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
    <i class="fa-solid fa-xmark" onClick={() => {
      return (
        handleDenyRequest()
      )
    }}></i>
    </>
  );
}

export default DenyRequest;
