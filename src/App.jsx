// npm modules
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

// page components
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import NewPost from "./pages/NewPost/NewPost";
import Profile from "./pages/Profile/Profile";
import MainFeed from "./pages/MainFeed/MainFeed";
import PostDetails from "./pages/PostDetails/PostDetails";
import FriendsPage from "./pages/FriendsPage/FriendsPage";
import EditComment from "./pages/EditComment/EditComment";
import Chat from "./pages/DirectMessages/Chat";
import EditPost from "./pages/EditPost/EditPost";

// components
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import StatsPage from "./pages/Stats/StatsPage";
import ProfileBar from "./components/ProfileBar/ProfileBar";
import PendingRequests from "./components/FriendRequests/PendingRequests/PendingRequests";

// services
import * as authService from "./services/authService";
import * as emotionPostService from "./services/emotionPostService";
import * as directMessagesService from './services/directMessagesService'
import * as notificationService from './services/notificationService'
import * as profileService from './services/profileService'

// styles
import "./App.css";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [privatePosts, setPrivatePosts] = useState([]);
  const [feed, setFeed] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [allConversations, setAllConversations] = useState([])
  const [newConversationId, setNewConversationId] = useState(null)
  const [allNotifications, setAllNotifications] = useState([])
  const [newNotificationId, setNewNotificationId] = useState(null)
  const [userProfile, setUserProfile] = useState({})



  function handleLogout() {
    authService.logout();
    setUser(null);
    navigate("/");
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser());
  };

  const handleAddPost = async (postData) => {
    const newPost = await emotionPostService.create(postData);
    if (newPost.public) {
      setPosts([newPost, ...posts]);
    } else {
      setPrivatePosts([newPost, ...privatePosts]);
    }
    navigate("/main-feed");
  };

  const handleDeletePost = async (id) => {
    const deletedPost = await emotionPostService.deleteEmotionPost(id);
    setPosts(posts.filter((b) => b._id !== deletedPost._id));
    navigate("/main-feed");
  };

  const handleUpdatePost = async (postData) => {
    const updatedPost = await emotionPostService.update(postData);
    setPosts(posts.map((b) => (postData._id === b._id ? updatedPost : b)));
    navigate("/main-feed");
  };

  const handleCreateConversation = async (conversationData) => {
    const newConversation = await directMessagesService.create(conversationData)
    setAllConversations([newConversation, ...allConversations])
    setNewConversationId(newConversation._id)
  }

  const handleCreateNotification = async (notificationData) => {
    const newNotification = await notificationService.create(notificationData)
    setAllNotifications([newNotification, ...allNotifications])
    setNewNotificationId(newNotification._id)
  }

  const handleDeleteNotification = async (id) => {
    const deletedNotification = await notificationService.deleteNotification(id)
    setAllNotifications(allNotifications.filter((b) => b._id !== deletedNotification._id))
  }


  useEffect(() => {
    const fetchPosts = async () => {
      const postData = await emotionPostService.index();
      setPosts(postData);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchFeed = async () => {
      const feedData = await emotionPostService.feed();
      setFeed(feedData);
    };
    fetchFeed();
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      const allPostsData = await emotionPostService.allPosts();
      setAllPosts(allPostsData);
    };
    fetchAll();
  }, []);

  useEffect(() => {
    const fetchAllConversations = async () => {
      const allConversationsData = await directMessagesService.index()
      setAllConversations(allConversationsData)
    }
    fetchAllConversations()
  }, [])

  useEffect(() => {
    const fetchAll = async () => {
      const allNotificationsData = await notificationService.index()
      setAllNotifications(allNotificationsData)
    }
    fetchAll()
  }, [])

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await profileService.getAllProfiles();
      setUserProfile(data.filter((profile) => profile._id === user.profile)[0]);
    };
    fetchProfile();
  }, [user]);


  const handleDecideAction = async (
    post,
    postId,
    reactionChoice,
    reactionId
  ) => {

    if (post.reactions.some((reaction) => reaction.author === user.profile)) {
      // deleteReaction
      let currentReaction = post.reactions.find(
        (reaction) => reaction.author === user.profile
      );
      if (reactionChoice === currentReaction.reaction) {

        const updatedPost = await emotionPostService.deleteReaction(
          postId,
          reactionId
        );
        setPosts(
          posts.map((b) => (updatedPost._id === b._id ? updatedPost : b))
        );
        setFeed(feed.map((b) => (updatedPost._id === b._id ? updatedPost : b)));

      } else {
        // updateReaction
        const reactionData = { reaction: reactionChoice };
        const updatedPost = await emotionPostService.updateReaction(
          postId,
          reactionData,
          reactionId
        );
        setPosts(
          posts.map((b) => (updatedPost._id === b._id ? updatedPost : b))
        );
        setFeed(feed.map((b) => (updatedPost._id === b._id ? updatedPost : b)));
      }
    } else {
      // addReaction
      console.log("add");
      const reactionData = { reaction: reactionChoice };
      const updatedPost = await emotionPostService.addReaction(
        postId,
        reactionData
      );
      setPosts(posts.map((b) => (updatedPost._id === b._id ? updatedPost : b)));
      setFeed(feed.map((b) => (updatedPost._id === b._id ? updatedPost : b)));
    }
  };

  return (
    <>
      <NavBar user={user}  handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} userProfile={userProfile} allPosts={allPosts}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/new"
          element={
            <ProtectedRoute user={user}>
              <NewPost posts={posts} handleAddPost={handleAddPost} user={user} userProfile={userProfile} allPosts={allPosts}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} allPosts={allPosts} handleCreateConversation={handleCreateConversation} allConversations={allConversations} setAllConversations={setAllConversations} newConversationId={newConversationId}
              allNotifications={allNotifications} newNotificationId={newNotificationId} handleCreateNotification={handleCreateNotification} handleDeleteNotification={handleDeleteNotification} setAllNotifications={setAllNotifications} userProfile={userProfile}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:conversationId"
          element={
            <ProtectedRoute user={user}>
              <Chat handleCreateNotification={handleCreateNotification} newNotificationId={newNotificationId} user={user} userProfile={userProfile} allPosts={allPosts}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/user"
          element={
            <ProtectedRoute user={user}>
              <ProfileBar user={user} allPosts={allPosts} userProfile={userProfile}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/stats"
          element={
            <ProtectedRoute user={user}>
              <StatsPage user={user} allPosts={allPosts} userProfile={userProfile}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/requests"
          element={
            <ProtectedRoute user={user}>
              <PendingRequests user={user} userProfile={userProfile} allPosts={allPosts}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/friends"
          element={
            <ProtectedRoute user={user}>
              <FriendsPage user={user} userProfile={userProfile}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/main-feed"
          element={
            <MainFeed
              posts={posts}
              user={user}
              feed={feed}
              allPosts={allPosts}
              handleDecideAction={handleDecideAction}
              userProfile={userProfile}
            />
          }
        />
        <Route
          path="/emotionPosts/:id"
          element={
            <PostDetails
              posts={posts}
              user={user}
              handleDeletePost={handleDeletePost}
              userProfile={userProfile}
              allPosts={allPosts}
            />
          }
        />
        <Route
          path="/emotionPosts/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditPost handleUpdatePost={handleUpdatePost} userProfile={userProfile} allPosts={allPosts} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emotionPosts/:postId/comments/:commentId"
          element={
            // <ProtectedRoute>
            <EditComment userProfile={userProfile} user={user} allPosts={allPosts}/>
            // </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
