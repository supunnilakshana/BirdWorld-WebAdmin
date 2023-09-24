import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "http://birdworldtest1-001-site1.itempurl.com/api/auth/signin",
      user
    );
    dispatch(loginSuccess(res.data));
    console.log(res.data);
    return res.data;
  } catch (err) {
    console.log(err);
    dispatch(loginFailure());
  }
};
