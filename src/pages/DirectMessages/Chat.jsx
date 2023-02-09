import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as directMessagesService from '../../services/directMessagesService'

import SendMessage from "../../components/DirectMessages/SendMessage";


const Chat = ({handleCreateNotification, newNotificationId, user}) => {
  const {conversationId} = useParams()
  const [conversation, setConversation] = useState([])
  const [messages, setMessages] = useState([])
  // const [members, setMembers] = useState([])
  // const [profileArr, setProfileArr] = useState([])
  const [profile, setProfile] = useState({})

    
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

  // useEffect(() => {
  //   setMembers(conversation.members)
  // }, [conversation.members])

  // console.log('MEMBERS:', members)

  useEffect(() => {
    setProfile(conversation.members?.filter(member => member._id !== user.profile))
  }, [conversation, conversationId, messages, user])

  // console.log('CONVERSATION MEMBERS:', conversation.members.filter(member => member._id !== user.profile))

  // console.log(messages)
  // console.log('PROFILE:', profile)

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
      <SendMessage conversationId={conversationId} handleSendMessage={handleSendMessage} handleCreateNotification={handleCreateNotification} newNotificationId={newNotificationId} profile={profile} user={user} setProfile={setProfile} conversation={conversation} messages={messages}/>

    </div>
    </>
  );
}

export default Chat;