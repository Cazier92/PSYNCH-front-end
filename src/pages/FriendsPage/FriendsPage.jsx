import FriendList from "../../components/FriendList/FriendList";


const FriendsPage = ({user}) => {
  return ( 
    <>
    <FriendList user={user} />
    </>
  );
}

export default FriendsPage;