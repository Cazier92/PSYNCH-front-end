import * as profileService from '../../services/profileService'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SendFriendRequest from '../../components/FriendRequests/SendFriendRequest/SendFriendRequest';
import PostList from '../../components/PostList/PostList';

const Profile = ({user}) => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)
  const [viewPrivate, setViewPrivate] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  const privatePosts = () => {
    if (user.profile === profile._id) {
      return profile.emotionPosts
    }
    else if (profile.friends.some(friend => friend._id === user.profile)) {
      return profile.emotionPosts
    }
    else {
      return profile.emotionPosts.filter(post => post.public === true)
    }
  }



  if (!profile) return <h1>Loading</h1>
  return ( 
    <>
      <h1>{profile.name}</h1>
      <img src={profile.avatar} alt="" />
      <SendFriendRequest profile={profile} user={user}/>
      <PostList posts={privatePosts()} user={user}/>
    </>
  );
}

export default Profile;