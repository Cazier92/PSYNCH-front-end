import * as profileService from '../../services/profileService'
import { useState, useEffect } from 'react';

import PostList from '../../components/PostList/PostList';


const ProfileBar = ({user, allPosts}) => {
  const [profile, setProfile] = useState(null)

  const id = user.profile


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
    }
    fetchProfile()
  }, [id])

  const userPosts = allPosts.filter(post => post.author._id === profile._id)


  if (!profile) return <h1>Loading</h1>
  return ( 
    <>
      <h1>{profile.name}</h1>
      <PostList posts={userPosts} user={user}/>
    </>
  );
}

export default ProfileBar;