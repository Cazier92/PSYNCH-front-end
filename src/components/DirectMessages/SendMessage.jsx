
import { useState, useEffect } from 'react';


import './SendMessage.css'

const SendMessage = ({conversationId, handleSendMessage, handleCreateNotification, profile}) => {
  const [form, setForm] = useState({ content: "" }); // If something doesn't work, look at this first!
  const [notificationData, setNotificationData] = useState({})

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(conversationId, form);
    handleCreateNotification(notificationData)
    setForm({ content: "" });
  };



  useEffect(() => {
    setNotificationData({profile: profile, link: conversationId})
  }, [conversationId, profile])




  return ( 
    <>
    <div className='send-messages-div'>
      <form onSubmit={handleSubmit}>
        <textarea name="content" id="content-input" cols="35" rows="2" placeholder='Send a Feel' onChange={handleChange} className='send-message-content'></textarea>
        <button type='submit' className='send-message-btn'>Send</button>
      </form>

    </div>

      
    </>
  );
}

export default SendMessage;