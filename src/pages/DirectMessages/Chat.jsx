import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MainFeedBars from "../../components/MainFeedBars/MainFeedBars";

import * as directMessagesService from '../../services/directMessagesService'

import SendMessage from "../../components/DirectMessages/SendMessage";

import './Chat.css'


const Chat = ({handleCreateNotification, newNotificationId, user, userProfile, allPosts}) => {
  const {conversationId} = useParams()
  const [conversation, setConversation] = useState([])
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState()
  const [newMessagesArr, setNewMessagesArr] = useState([])
  const [profile, setProfile] = useState({})

    
  useEffect(() => {
    const fetchConversation = async () => {
      const conversationData = await directMessagesService.show(conversationId)
      setConversation(conversationData)

    }
    fetchConversation()
  }, [conversationId])

  useEffect(() => {
    setMessages(conversation.messages)
  }, [conversation, conversationId])

  useEffect(() => {
    setProfile(conversation.members?.filter(member => member._id !== user.profile))
  }, [conversation, conversationId, messages, user])



  const handleSendMessage = async (id, messageData) => {
    const newMessage = await directMessagesService.sendMessage(conversationId, messageData)
    setNewMessage(newMessage)
  }

  useEffect(() => {
    const messageToInclude = {
      content: newMessage?.content,
      author: user.name,
      _id: newMessage?._id
    }
    if (newMessagesArr.some(message => message._id === messageToInclude._id)) {

    } 
    else if (newMessage?.content !== undefined) {
      setNewMessagesArr([...newMessagesArr, messageToInclude])
    }
  }, [newMessage, user.name])


  const endEl = document.getElementById('end')

  endEl?.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'})


  return ( 
    <>
    <MainFeedBars user={user} userProfile={userProfile} allPosts={allPosts}/>

      <div className="messages-div">
        <div className="header-div">
          <h3 className="messages-head">Chat Members:</h3>
          {conversation.members?.map(member => {
            return (
              <h5 className="messages-head" key={member.name}>{member.name}</h5>
            )
          })}
          {/* <h3 className="messages-head">Messages:</h3> */}
        </div>
        {messages?.map(message => {
          if (message.author._id !== user.profile) {
            return (
              <>
              <div className="friend-message">
                <p className="friend-message-content">{message.content}</p>
                <h6 className="friend-name">{message.author.name}</h6>
              </div>
              </>
            )
          } else if (message.author._id === user.profile) {
            return (
              <>
              <div className="user-message">
                <p className="user-message-content">{message.content}</p>
                <h6 className="user-name">{message.author.name}</h6>
              </div>
              </>
            )

          } else {
            <>
            <div className="user-message">
              <p className="user-message-content">{message.content}</p>
              <h6 className="user-name">{message.author.name}</h6>
            </div>
            </>
          }
        })}
        {newMessagesArr.map(message => {
          return (
            <div className="user-message">
            <p className="user-message-content">{message.content}</p>
            <h6 className="user-name">{message.author}</h6>
          </div>
          )
        })}
          {/* {newMessageRender()} */}
          <div className="empty-div">

          </div>
        <div className="send-messages">
          <SendMessage conversationId={conversationId} handleSendMessage={handleSendMessage} handleCreateNotification={handleCreateNotification} newNotificationId={newNotificationId} profile={profile} user={user} setProfile={setProfile} conversation={conversation} messages={messages}/>

        </div>

      </div>
      <div id='end'></div>


    </>
  );
}

export default Chat;