import * as profileService from '../../services/profileService'

import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SendFriendRequest from '../../components/FriendRequests/SendFriendRequest/SendFriendRequest';
import PostList from '../../components/PostList/PostList';
import StartConversation from '../../components/DirectMessages/StartConversation';
import ChatButton from '../../components/DirectMessages/ChatButton';
import MainFeedBars from '../../components/MainFeedBars/MainFeedBars';
import Notification from '../../components/NotificationComponents/Notification';
import NotificationList from '../../components/NotificationComponents/NotificationList';

import './Profile.css'

const Profile = ({user, allPosts, handleCreateConversation, allConversations, setAllConversations, newConversationId, allNotifications, setAllNotifications, userProfile, setUserProfile, handleDecideAction}) => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])
  
  const profileConversations = allConversations.filter(conversation => conversation.members.includes(profile?._id))

  const neededConvo = profileConversations.find(conversation => conversation.members.includes(user.profile))

  useEffect(() => {

  }, [profile, user, id, allConversations, neededConvo, profileConversations])


  const privatePosts = () => {
    if (user.profile === profile._id) {
      return allPosts.filter(post => post.author._id === profile._id)
    }
    else if (profile.friends.some(friend => friend._id === user.profile)) {
      return allPosts.filter(post => post.author._id === profile._id)
    }
    else {
      return allPosts.filter(post => post.author._id === profile._id && post.public === true)
    }
  }

  console.log('User Notifications:', userProfile.notifications)

  const conversationButton = () => {
    if (user.profile === profile._id) {
      // return (
      //   <>
      //     {/* {userProfile.notifications.map(notification => {
      //       return (
      //         <>
      //           <Notification key={notification._id} notification={notification} allNotifications={allNotifications} setAllNotifications={setAllNotifications} setUserProfile={setUserProfile} userProfile={userProfile}/>
                
      //         </>
      //       )
      //     })} */}
      //     <NotificationList allNotifications={allNotifications} setAllNotifications={setAllNotifications} userProfile={userProfile} setUserProfile={setUserProfile}/>
      //   </>
      // )
    }
    else if (profile.friends.some(friend => friend._id === user.profile)) {
        if (neededConvo) {
        
        return (
          <ChatButton profile={profile} user={user} neededConvo={neededConvo} />
        )
      } else {
        return (
          <StartConversation profile={profile} user={user} handleCreateConversation={handleCreateConversation} allConversations={allConversations} setAllConversations={setAllConversations} neededConvo={neededConvo} newConversationId={newConversationId}/>
        )
      }
    }
    else {
      return 
    }
  }




  if (!profile) return <h1>Loading</h1>
  return ( 
    <>
      <MainFeedBars user={user} userProfile={userProfile} allPosts={allPosts}/>
      <div className='profile-head'>
        <h1 className='profile-name'>{profile.name}</h1>
        <img src={profile.photo} alt="" className='profile-img'/>
        <br />
        <SendFriendRequest profile={profile} user={user}/>
        {conversationButton()}
        <br />

      </div>
      
      <PostList posts={privatePosts()} user={user} handleDecideAction={handleDecideAction}/>
    </>
  );
}

export default Profile;