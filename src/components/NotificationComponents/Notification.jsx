import { Link } from "react-router-dom";


const Notification = ({notification}) => {

  console.log(notification)
  return ( 
    <>

    <h6>{notification.content}</h6>
    </>

  );
}

export default Notification;