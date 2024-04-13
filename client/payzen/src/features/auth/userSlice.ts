import { createSlice } from "@reduxjs/toolkit";

type state = {
  name: string;
  surname: string;
  email: string;
  isLoggedIn: boolean;
};

const initialState: state = {
  name: "",
  surname: "",
  email: "",
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    defineName(state, action) {
      state.name = action.payload;
    },
    defineSurname(state, action) {
      state.surname = action.payload;
    },
    defineEmail(state, action) {
      state.email = action.payload;
    },
    defineLoggedIn(state) {
      state.isLoggedIn = true;
    },
  },
});

export default userSlice.reducer;

export const { defineName, defineSurname, defineEmail, defineLoggedIn } =
  userSlice.actions;
