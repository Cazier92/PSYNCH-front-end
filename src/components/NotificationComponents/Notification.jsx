import { Link } from "react-router-dom";

import * as notificationService from '../../services/notificationService'



const Notification = ({notification, allNotifications, setAllNotifications, profile, setProfile}) => {
  
  const handleDeleteNotification = async (id) => {
    const deletedNotification = await notificationService.deleteNotification(id)
    setAllNotifications(allNotifications.filter((b) => b._id !== deletedNotification._id))
    setProfile({...profile, notifications: profile.notifications.filter((n) => n._id !== notification._id)})
  }


  return ( 
    <>
      <Link to={`/chat/${notification.link}`} onClick={() => handleDeleteNotification(notification._id)}>
        <h6>{notification.content}</h6>
      </Link>
      <i class="fa-solid fa-xmark" onClick={() => {
      return (
        handleDeleteNotification(notification._id)
      )
    }}></i>
    </>

  );
}

export default Notification;