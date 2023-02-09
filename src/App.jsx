// npm modules
import { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { useEffect } from "react";

// page components
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import NewPost from "./pages/NewPost/NewPost";
import Profile from "./pages/Profile/Profile";
import MainFeed from "./pages/MainFeed/MainFeed";
import PendingRequests from "./components/FriendRequests/PendingRequests/PendingRequests";
import PostDetails from "./pages/PostDetails/PostDetails";
import FriendList from "./components/FriendList/FriendList";
import EditComment from "./pages/EditComment/EditComment";
import Chat from "./pages/DirectMessages/Chat";

// components
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Stats from "./components/Stats/Stats";
import ProfileBar from "./components/ProfileBar/ProfileBar";

// services
import * as authService from "./services/authService";
import * as emotionPostService from "./services/emotionPostService";
import * as directMessagesService from './services/directMessagesService'

// styles
import "./App.css";
import EditPost from "./pages/EditPost/EditPost";

const App = () => {
  const [user, setUser] = useState(authService.getUser());
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [privatePosts, setPrivatePosts] = useState([]);
  const [feed, setFeed] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [allConversations, setAllConversations] = useState([])
  const [newConversationId, setNewConversationId] = useState(null)



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
      // console.log('ALLMESSAGES', allConversationsData)
    }
    fetchAllConversations()
  }, [])



  



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
      <NavBar user={user} handleLogout={handleLogout} />
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
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posts/new"
          element={
            <ProtectedRoute user={user}>
              <NewPost posts={posts} handleAddPost={handleAddPost} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/:id"
          element={
            <ProtectedRoute user={user}>
              <Profile user={user} allPosts={allPosts} handleCreateConversation={handleCreateConversation} allConversations={allConversations} setAllConversations={setAllConversations} newConversationId={newConversationId}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/chat/:conversationId"
          element={
            <ProtectedRoute user={user}>
              <Chat />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/user"
          element={
            <ProtectedRoute user={user}>
              <ProfileBar user={user} allPosts={allPosts} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/stats"
          element={
            <ProtectedRoute user={user}>
              <Stats user={user} allPosts={allPosts} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/requests"
          element={
            <ProtectedRoute user={user}>
              <PendingRequests user={user} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile/friends"
          element={
            <ProtectedRoute user={user}>
              <FriendList user={user} />
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
              handleDecideAction={handleDecideAction}
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
            />
          }
        />
        <Route
          path="/emotionPosts/:id/edit"
          element={
            <ProtectedRoute user={user}>
              <EditPost handleUpdatePost={handleUpdatePost} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/emotionPosts/:postId/comments/:commentId"
          element={
            // <ProtectedRoute>
            <EditComment />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
