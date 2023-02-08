
import { useState, useEffect } from 'react';

import * as emotionPostService from '../../services/emotionPostService'
import * as profileService from '../../services/profileService'

import Friend from './Friend';
import PendingRequests from '../FriendRequests/PendingRequests/PendingRequests';

import './FriendList.css'




const FriendList = ({user}) => {
  const [userProfile, setUserProfile] = useState([])


  useEffect(() => {
    const fetchProfile = async () => {
      const profileData = await profileService.show(user.profile)
      setUserProfile(profileData)
    }
    fetchProfile()
  }, [user.profile])

  const [friends, setFriends] = useState([])

  useEffect(() => {
    const fetchFriends = async () => {
      const friendsData = await profileService.friendsIdx();
      setFriends(friendsData);
    };
    fetchFriends();
  }, []);

  console.log(friends)

  const [feed, setFeed] = useState([])

  useEffect(() => {
    const fetchFeed = async () => {
      const feedData = await emotionPostService.feed()
      setFeed(feedData)
    }
    fetchFeed()
  }, [friends])

  // console.log('Feed:', feed)
  // console.log('Friends:', friends)
  // console.log(feed.find((post) => post.author._id = '63dff7e2ae6630b0ec58ba71').emotion)
  // const recentEmotion = async (friend) => {
  //   try {
  //     return (
  //       feed.find((post) => post.author._id === friend._id)

  //     )
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // console.log('recentEmotion0:', recentEmotion(friends[0]))
  // async function findPost(friend) {
  //   feed.find((post) => post.author._id === friend._id)
  //   .then(post => {
  //     return post.emotion
  //   })
  // }

  return ( 
    <>
      <p className='page-title'>Friends</p>
      <div className='requests-section'>
        <p className='subtitle'>Requests</p>
        <PendingRequests/>
      </div>
      {friends.length !== 0 ?
      friends.map((friend) => {
        return (
          <>
            <main className='friends-list-main'>
             
              <Friend friend={friend} key={friend._id}/>
            </main>
          </>
        )
      })
      :
      <p>Loading...</p>
      }
    </>
  );
}

export default FriendList;