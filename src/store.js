
import { configureStore, createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    firstName: "",
    lastName: "",
  },
  reducers: {
    setProfile(state, action) {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
  },
});

export const { setProfile } = profileSlice.actions;

const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});

export default store;
