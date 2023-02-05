import * as profileService from '../../services/profileService'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SendFriendRequest from '../../components/FriendRequests/SendFriendRequest/SendFriendRequest';

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
      <h1>Hello</h1>
      <h1>{profile.name}</h1>
      <SendFriendRequest profile={profile} user={user}/>
    </>
  );
}

export default Profile;