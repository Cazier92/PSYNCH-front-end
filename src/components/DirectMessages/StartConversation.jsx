
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StartConversation = ({profile, user, handleCreateConversation, allConversations, newConversationId}) => {
  const [conversationData, setConversationData] = useState({})


  useEffect(() => {

    setConversationData({profile: profile})
  }, [profile, user, allConversations])

  handleCreateConversation(conversationData)

  return ( 
    <>
      <Link to={`/chat/${newConversationId}`}>
        <button>Start Chat</button>

      </Link>
    </>
  );
}

export default StartConversation;