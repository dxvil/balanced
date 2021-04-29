import { configureStore } from "@reduxjs/toolkit";
import notationReducer from "./feature/notation/notationSlice.js";

export default configureStore({
	reducer: {
		notation: notationReducer
	}
});