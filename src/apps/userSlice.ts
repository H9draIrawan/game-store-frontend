import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
	},
	reducers: {
		userLoaded: (state, action) => {
			state.user = action.payload;
		},
		userLoggedOut: (state) => {
			state.user = null;
		},
	},
});
export const { userLoaded } = userSlice.actions;
export default userSlice.reducer;
