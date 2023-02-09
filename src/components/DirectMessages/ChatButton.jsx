import * as directMessagesService from '../../services/directMessagesService'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Chat from '../../pages/DirectMessages/Chat';


const ChatButton = ({profile, user, neededConvo}) => {
  const [conversationId, setConversationId] = useState(null)
  
  
  useEffect(() => {
    setConversationId(neededConvo._id)
  }, [neededConvo])
  


  return ( 
    <>
      <Link to={`/chat/${conversationId}`}><button>Chat</button></Link>
    </>
  );
}

export default ChatButton;