import * as profileService from '../../services/profileService'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SendFriendRequest from '../../components/FriendRequests/SendFriendRequest/SendFriendRequest';
import PostList from '../../components/PostList/PostList';

const Profile = ({user, allPosts}) => {
  const {id} = useParams()
  const [profile, setProfile] = useState(null)
  const [profilePosts, setProfilePosts] = useState([])
  // const [viewPrivate, setViewPrivate] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(id)
      setProfile(profileData)
      // const postsData = await profileService.profilePosts(id)
      // setProfilePosts(postsData)
    }
    fetchProfile()
  }, [id])

  
  // useEffect(() => {
  //   const fetchProfilePosts = async () => {
  //     const postsData = await profileService.profilePosts(id)
  //     setProfilePosts(postsData)
  //     console.log(profilePosts)
  //   }
  //   fetchProfilePosts()
  // }, [id, profile])

  // console.log(profilePosts)

  // const profilePosts = allPosts?.filter(post => post._id === profile._id)

  // console.log(profilePosts)
  

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



  if (!profile) return <h1>Loading</h1>
  return ( 
    <>
      <h1>{profile.name}</h1>
      <SendFriendRequest profile={profile} user={user}/>
      <PostList posts={privatePosts()} user={user}/>
    </>
  );
}

export default Profile;