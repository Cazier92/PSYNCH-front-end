import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/emotionPosts`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const feed = async () => {
  try {
    const res = await fetch(`${BASE_URL}/feed`, {
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const allPosts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/all`, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`}
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const create = async (emotionPostData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emotionPostData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (id, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const addReaction = async (id, reactionData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/reactions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reactionData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (emotionPostData) => {
  try {
    const res = await fetch(`${BASE_URL}/${emotionPostData._id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emotionPostData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateComment = async (postId, commentId, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${postId}/comments/${commentId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const updateReaction = async (id, reactionData, reactionId) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/reactions/${reactionId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reactionData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteEmotionPost = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${tokenService.getToken()}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (emotionPostId, commentId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${emotionPostId}/comments/${commentId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${tokenService.getToken()}` },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteReaction = async (emotionPostId, reactionId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${emotionPostId}/reactions/${reactionId}`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${tokenService.getToken()}` },
      }
    );
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export {
  index,
  show,
  feed,
  allPosts,
  create,
  createComment,
  addReaction,
  update,
  updateComment,
  updateReaction,
  deleteEmotionPost,
  deleteComment,
  deleteReaction,
};
