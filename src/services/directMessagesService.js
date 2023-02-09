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

export {
  index,
  show,
  create,
}