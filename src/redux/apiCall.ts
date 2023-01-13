import axios from "axios";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from "./userRedux";

export const login = async (dispatch: any, user: any) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      "https://notes-api.dicoding.dev/v1/login",
      user
    );
    dispatch(loginSuccess(res.data));
    sessionStorage.setItem("token", res.data.data.accessToken);
    window.location.href = "/";
  } catch (error: any) {
    dispatch(loginFailure(error.response?.data.message));
  }
};

export const register = async (dispatch: any, user: any) => {
  dispatch(registerStart());
  try {
    const res = await axios.post(
      "https://notes-api.dicoding.dev/v1/register",
      user
    );
    dispatch(registerSuccess(res.data));
    console.log(res.data);
  } catch (error: any) {
    dispatch(registerFailure(error.response.data.message));
  }
};
