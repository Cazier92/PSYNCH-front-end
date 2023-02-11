import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/notifications`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};


const create = async (notificationData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${tokenService.getToken()}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notificationData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};


const deleteNotification = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/${id}`,
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
  // show,
  create,
  // sendMessage,
  deleteNotification,
}