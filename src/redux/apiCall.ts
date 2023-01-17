import axios from "axios";
import {
  getArchivedNotesFail,
  getArchivedNotesStart,
  getArchivedNotesSuccess,
  getNotesFail,
  getNotesStart,
  getNotesSuccess,
  PostArchivedNotesFail,
  PostArchivedNotesStart,
  PostArchivedNotesSuccess,
  PostUnarchivedNotesFail,
  PostUnarchivedNotesStart,
  PostUnarchivedNotesSuccess,
} from "./notesRedux";
import {
  getUserError,
  getUserStart,
  getUserSuccess,
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
  } catch (error: any) {
    dispatch(registerFailure(error.response.data.message));
  }
};

export const getUser = async (dispatch: any, token: any) => {
  dispatch(getUserStart());
  try {
    const res = await axios.get("https://notes-api.dicoding.dev/v1/users/me", {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
    dispatch(getUserSuccess(res.data));
  } catch (error: any) {
    dispatch(getUserError(error.response.data.message));
  }
};

export const getNotes = async (dispatch: any, token: any) => {
  dispatch(getNotesStart());
  try {
    const res = await axios.get("https://notes-api.dicoding.dev/v1/notes", {
      headers: {
        Authorization: `Bearer ${token.token}`,
      },
    });
    dispatch(getNotesSuccess(res.data));
    // console.log(res.data);
  } catch (error: any) {
    dispatch(getNotesFail());
  }
};

export const getArchivedNotes = async (dispatch: any, token: any) => {
  dispatch(getArchivedNotesStart());
  try {
    const res = await axios.get(
      "https://notes-api.dicoding.dev/v1/notes/archived",
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    );
    dispatch(getArchivedNotesSuccess(res.data));
    // console.log(res.data);
  } catch (error: any) {
    dispatch(getArchivedNotesFail());
  }
};

export const postArchivedNotes = async (dispatch: any, token: any, id: any) => {
  dispatch(PostArchivedNotesStart());

  try {
    const res = await axios.post(
      `https://notes-api.dicoding.dev/v1/notes/${id.id}/archive`,
      JSON.stringify(id),
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    );
    dispatch(PostArchivedNotesSuccess(res.data));
    // console.log(res.data);
  } catch (error: any) {
    dispatch(PostArchivedNotesFail());
    console.log(error);
  }
};

export const postUnarchivedNotes = async (
  dispatch: any,
  token: any,
  id: any
) => {
  dispatch(PostUnarchivedNotesStart());

  try {
    const res = await axios.post(
      `https://notes-api.dicoding.dev/v1/notes/${id.id}/unarchive`,
      JSON.stringify(id),
      {
        headers: {
          Authorization: `Bearer ${token.token}`,
        },
      }
    );
    dispatch(PostUnarchivedNotesSuccess(res.data));
    // console.log(res.data);
  } catch (error: any) {
    dispatch(PostUnarchivedNotesFail());
    console.log(error);
  }
};
