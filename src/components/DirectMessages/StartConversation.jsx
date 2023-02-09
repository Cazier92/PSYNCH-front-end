import * as directMessagesService from '../../services/directMessagesService'
import { useState, useEffect } from 'react';

const StartConversation = ({profile, user, handleCreateConversation, allConversations, setAllConversations}) => {
  const [conversationData, setConversationData] = useState({})

  useEffect(() => {
    setConversationData({profile: profile})
  }, [profile, user, allConversations])

  return ( 
    <>
      <button onClick={() => handleCreateConversation(conversationData)}>Start Chat</button>
    </>
  );
}

export default StartConversation;