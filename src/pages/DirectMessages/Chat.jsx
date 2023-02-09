import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as directMessagesService from '../../services/directMessagesService'


const Chat = (props) => {
  const {conversationId} = useParams()
  const [conversation, setConversation] = useState([])

    
  useEffect(() => {
    const fetchConversation = async () => {
      const conversationData = await directMessagesService.show(conversationId)
      setConversation(conversationData)
      // console.log(conversationData)
    }
    fetchConversation()
  }, [])

  console.log(conversationId)
  console.log(conversation.members)


  return ( 
    <>

    </>
   );
}
 
export default Chat;