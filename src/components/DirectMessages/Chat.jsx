import * as directMessagesService from '../../services/directMessagesService'
import { useState, useEffect } from 'react';


const Chat = ({profile, user, neededConvo}) => {
  const [conversationId, setConversationId] = useState(null)
  const [conversation, setConversation] = useState([])
  
  useEffect(() => {
    setConversationId(neededConvo._id)
  }, [neededConvo])
  
  console.log('CONVERSATION ID:', conversationId)

    useEffect(() => {
    const fetchConversation = async () => {
      const conversationData = await directMessagesService.show(conversationId)
      setConversation(conversationData)
      // console.log(conversationData)
    }
    fetchConversation()
  }, [profile, user, neededConvo, conversationId])

  console.log('CONVERSATION:', conversation)

  return ( 
    <>
      <button>Chat</button>
    </>
   );
}
 
export default Chat;