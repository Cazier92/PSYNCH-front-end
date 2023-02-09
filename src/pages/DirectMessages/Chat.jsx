import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as directMessagesService from '../../services/directMessagesService'

import SendMessage from "../../components/DirectMessages/SendMessage";


const Chat = ({}) => {
  const {conversationId} = useParams()
  const [conversation, setConversation] = useState([])
  const [messages, setMessages] = useState([])

    
  useEffect(() => {
    const fetchConversation = async () => {
      const conversationData = await directMessagesService.show(conversationId)
      setConversation(conversationData)
      // console.log(conversationData)
    }
    fetchConversation()
  }, [conversationId])

  useEffect(() => {
    setMessages(conversation.messages)
  }, [conversation, conversationId])

  // console.log(messages)

  const handleSendMessage = async (id, messageData) => {
    const newMessage = await directMessagesService.sendMessage(conversationId, messageData)
    setConversation({...conversation, messages: [...conversation.messages, newMessage]})
  }

  return ( 
    <>
    <h3>Chat Members:</h3>
    {conversation.members?.map(member => {
      return (
        <h5>{member.name}</h5>
      )
    })}
    <h3>Messages:</h3>
    {messages?.map(message => {
      return (
        <>
        <p>{message.content}</p>
        <h6>{message.author.name}</h6>
        </>
      )
    })}
    <div>
      <SendMessage conversationId={conversationId} handleSendMessage={handleSendMessage}/>

    </div>
    </>
  );
}

export default Chat;