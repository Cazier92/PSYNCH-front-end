import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MainFeedBars from "../../components/MainFeedBars/MainFeedBars";

import * as directMessagesService from '../../services/directMessagesService'

import SendMessage from "../../components/DirectMessages/SendMessage";

import './Chat.css'


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
    <MainFeedBars user={user}/>

      <div className="messages-div">
        <div className="header-div">
          <h3 className="messages-head">Chat Members:</h3>
          {conversation.members?.map(member => {
            return (
              <h5 className="messages-head">{member.name}</h5>
            )
          })}
          {/* <h3 className="messages-head">Messages:</h3> */}
        </div>
        {messages?.map(message => {
          if (message.author._id === user.profile) {
            return (
              <>
              <div className="user-message">
                <p className="user-message-content">{message.content}</p>
                <h6 className="user-name">{message.author.name}</h6>
              </div>
              </>
            )
          } else {
            return (
              <>
              <div className="friend-message">
                <p className="friend-message-content">{message.content}</p>
                <h6 className="friend-name">{message.author.name}</h6>
              </div>
              </>
            )

          }
        })}
        <div className="send-messages">
          <SendMessage conversationId={conversationId} handleSendMessage={handleSendMessage} handleCreateNotification={handleCreateNotification} newNotificationId={newNotificationId} profile={profile} user={user} setProfile={setProfile} conversation={conversation} messages={messages}/>

        </div>

      </div>


    </>
  );
}

export default Chat;