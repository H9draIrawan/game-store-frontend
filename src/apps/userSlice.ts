import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: [],
	},
	reducers: {
		userLoaded: (state, action) => {
			state.user = action.payload;
		},
	},
});
export const { userLoaded } = userSlice.actions;
export default userSlice.reducer;
