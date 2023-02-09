import * as directMessagesService from '../../services/directMessagesService'
import { useState, useEffect } from 'react';

const SendMessage = ({conversationId, handleSendMessage}) => {
  const [form, setForm] = useState({ content: "" }); // If something doesn't work, look at this first!

  const handleChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(conversationId, form);
    setForm({ content: "" });
  };



  return ( 
    <>
    <form onSubmit={handleSubmit}>
      <textarea name="content" id="content-input" cols="35" rows="2" placeholder='Write Message Here' onChange={handleChange}></textarea>
      <button type='submit'>Send Message</button>
    </form>

      
    </>
  );
}

export default SendMessage;