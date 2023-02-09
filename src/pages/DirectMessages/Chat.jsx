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
  }, [conversationId])

  // console.log(conversationId)
  // console.log(conversation.members[0].name)


  return ( 
    <>
    <h3>Chat Members:</h3>
    {conversation.members?.map(member => {
      return (
        <h5>{member.name}</h5>
      )
    })}
    <h3>Messages:</h3>
    {conversation.messages?.map(message => {
      return (
        <>
        <p>{message.content}</p>
        <h6>{message.author}</h6>
        </>
      )
    })}
    </>
  );
}

export default Chat;