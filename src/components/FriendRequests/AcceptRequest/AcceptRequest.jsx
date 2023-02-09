import * as profileService from '../../../services/profileService'


const AcceptRequest = ({id, requests, setRequests, friends, setFriends}) => {

  const handleAcceptRequest = async () => {
    const newFriend = await profileService.acceptRequest(id)
    setRequests(requests.filter((request) => 
      request._id !== id
    ))
    setFriends([...friends, newFriend])
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

