import { createSlice } from "@reduxjs/toolkit";

export const notationSlice = createSlice({
	name: "notation",
	initialState: [],
	reducers: {
		addPost: (state, action) =>  {
			state.push(action.payload);
		},
		deletePost: (state, action) => {
			return state.filter((i) => i.id !== action.payload);
		},

	}
});

export const {addPost, deletePost} = notationSlice.actions;

export default notationSlice.reducer;