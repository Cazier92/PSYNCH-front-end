import Notification from "./Notification";


const NotificationList = ({userProfile, setUserProfile, allNotifications, setAllNotifications}) => {
  return ( 
    <>
      {userProfile.notifications?.map(notification => {
            return (
              <>
                <Notification key={notification._id} notification={notification} allNotifications={allNotifications} setAllNotifications={setAllNotifications} setUserProfile={setUserProfile} userProfile={userProfile}/>
                
              </>
            )
          })}
    </>
   );
}
 
export default NotificationList;