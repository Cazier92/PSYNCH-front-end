import FriendList from "../../components/FriendList/FriendList";
import MainFeedBars from "../../components/MainFeedBars/MainFeedBars";


const FriendsPage = ({user, allPosts, userProfile}) => {
  return ( 
    <>
    <MainFeedBars user={user} userProfile={userProfile} allPosts={allPosts}/>
    <FriendList user={user} />
    </>
  );
}

export default FriendsPage;