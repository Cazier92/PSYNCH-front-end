import { Link } from "react-router-dom";

import * as notificationService from '../../services/notificationService'



const Notification = ({notification, allNotifications, setAllNotifications}) => {
  
  const handleDeleteNotification = async (id) => {
    const deletedNotification = await notificationService.deleteNotification(id)
    setAllNotifications(allNotifications.filter((b) => b._id !== deletedNotification._id))
  }


  console.log(notification)
  return ( 
    <>
      <Link to={`/chat/${notification.link}`} onClick={() => handleDeleteNotification(notification._id)}>
        <h6>{notification.content}</h6>
      </Link>
    </>

  );
}

export default Notification;