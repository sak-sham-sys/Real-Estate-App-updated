import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        /*     setCurrentUser: (state, action) => {
                state.currentUser = action.payload;
            },
            setError: (state, action) => {
                state.error = action.payload;
                },
                setLoading: (state, action) =>{
                    state.loading = action.payload;
                } */
        signInStart: (state) => {
            state.loading = true;
        }
        ,
        signInSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    },
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;