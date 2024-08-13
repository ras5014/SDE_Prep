import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  picture: null,
  email: null,
  uid: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { name, picture, email, uid } = action.payload;
      state.name = name;
      state.picture = picture;
      state.email = email;
      state.uid = uid;
    },
    logoutUser: (state) => {
      state.name = null;
      state.picture = null;
      state.email = null;
      state.uid = null;
    },
  },
});

export const { setUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
