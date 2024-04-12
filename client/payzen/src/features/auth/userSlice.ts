import { createSlice } from "@reduxjs/toolkit";

type state = {
  name: string;
  surname: string;
  email: string;
};

const initialState: state = {
  name: "",
  surname: "",
  email: "",
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
  },
});

export default userSlice.reducer;

export const { defineName, defineSurname, defineEmail } = userSlice.actions;
