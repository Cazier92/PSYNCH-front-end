import * as profileService from '../../../services/profileService'


const AcceptRequest = ({id, requests, setRequests}) => {

  const handleAcceptRequest = () => {
    profileService.acceptRequest(id)
    setRequests(requests.filter((request) => 
      request._id !== id
    ))
  }

  return ( 
    <>
    <i class="fa-solid fa-check" onClick={() => {
      return (
        handleAcceptRequest()
      )
    }}></i>
    </>
  );
}

export default AcceptRequest;

