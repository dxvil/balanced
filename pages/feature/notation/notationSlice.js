import { createSlice } from '@reduxjs/toolkit'

export const notationSlice = createSlice({
name: 'notation',
    initialState: [
        {
            user: 'admin',
            postId: 1,
            text: 'Hello dear diary',
        },
    ],
    reducers: {
    addPost: (state, payload) => {
        return state.push(payload)
    },
        deletePost: (state, payload) => {
        const itemToDelete = state.find(i => i.id === payload)
            return state.filter(i => i !== itemToDelete)
        },

    }
})

export const {addPost, deletePost} = notationSlice.actions

export default notationSlice.reducer