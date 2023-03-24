import { createSlice } from '@reduxjs/toolkit'

const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        themeData: "light",
    },
    reducers: {
        changeTheme: (state, action) => {
            state.themeData = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer