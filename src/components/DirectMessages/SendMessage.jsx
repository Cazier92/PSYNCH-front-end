import * as directMessagesService from '../../services/directMessagesService'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './SendMessage.css'

const SendMessage = ({conversationId, handleSendMessage, handleCreateNotification, profile, user, setProfile, messages, conversation}) => {
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
        <textarea name="content" id="content-input" cols="35" rows="2" placeholder='Write Message Here' onChange={handleChange}></textarea>
        <button type='submit'>Send Message</button>
      </form>

    </div>

      
    </>
  );
}

export default SendMessage;