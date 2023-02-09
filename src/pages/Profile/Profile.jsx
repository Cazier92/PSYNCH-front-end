import * as profileService from '../../services/profileService'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SendFriendRequest from '../../components/FriendRequests/SendFriendRequest/SendFriendRequest';
import PostList from '../../components/PostList/PostList';
import StartConversation from '../../components/DirectMessages/StartConversation';
import Chat from '../../components/DirectMessages/Chat';

const Profile = ({user, allPosts}) => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
      // console.log(profileData)
    }
    fetchProfile()
  }, [id])

  
  console.log(profile?.friends.some(friend => friend._id === user?.profile))

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

  const conversationButton = () => {
    if (user.profile === profile._id) {
      return 
    }
    else if (profile.friends.some(friend => friend._id === user.profile)) {
      console.log('FRIENDS')
      if (profile.messages.some(conversation => conversation.members.includes(user.profile))) {
        <Chat profile={profile} user={user}/>
      } else {
        return (
          <StartConversation profile={profile} user={user}/>
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
      <h1>{profile.name}</h1>
      <SendFriendRequest profile={profile} user={user}/>
      {conversationButton()}
      <PostList posts={privatePosts()} user={user}/>
    </>
  );
}

export default Profile;