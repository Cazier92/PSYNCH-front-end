import FriendList from "../../components/FriendList/FriendList";
import MainFeedBars from "../../components/MainFeedBars/MainFeedBars";
import NotificationList from "../../components/NotificationComponents/NotificationList";

import './FriendsPage.css'


const FriendsPage = ({user, allPosts, userProfile, setUserProfile, allNotifications, setAllNotifications}) => {
  return ( 
    <>
    <MainFeedBars user={user} userProfile={userProfile} allPosts={allPosts}/>
    <FriendList user={user} />
    <div className="notifications-div">
      <NotificationList 
        allNotifications={allNotifications} 
        setAllNotifications={setAllNotifications} 
        userProfile={userProfile} 
        setUserProfile={setUserProfile}
        allPosts={allPosts}/>
    </div>
    </>
  );
}

export default FriendsPage;