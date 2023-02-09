import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/directMessages`;

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

const create = async (conversationData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(conversationData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const sendMessage = async (id, messageData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/sendMessage`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const deleteMessage = async (conversationId, messageId) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${conversationId}/deleteMessage/${messageId}`,
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
  create,
  sendMessage,
  deleteMessage,
}