import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        plus: (state, action) => ({
            ...state,
            value:  state.value + action.payload
        }),
        minus: (state, action) => ({
            ...state,
            value: state.value - action.payload
        })
    }
})

export const {plus, minus} = slice.actions

export const selectCount = state => state.counter.value

export default slice.reducer