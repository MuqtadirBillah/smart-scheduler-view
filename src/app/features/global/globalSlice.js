const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    value: {
        // baseUrl: 'http://localhost:5000'
        baseUrl: 'https://smart-scheduler-deploy.vercel.app'
    }
}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        
    }
})

export const { } = globalSlice.actions

export default globalSlice.reducer;