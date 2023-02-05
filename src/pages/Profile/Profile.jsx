import * as profileService from '../../services/profileService'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SendFriendRequest from '../../components/FriendRequests/SendFriendRequest/SendFriendRequest';
import PostList from '../PostList/PostList';

const Profile = ({user}) => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
      // console.log('profile data:', profileData)
      // console.log('profile:', profile)
    }
    fetchProfile()
  }, [id])
  

  if (!profile) return <h1>Loading</h1>
  return ( 
    <>
      <h1>{profile.name}</h1>
      <img src={profile.avatar} alt="" />
      <SendFriendRequest profile={profile} user={user}/>
      <PostList posts={profile.emotionPosts} />
    </>
  );
}

export default Profile;