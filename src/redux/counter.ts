import {createSlice} from "@reduxjs/toolkit";

const xbet = createSlice({
    name: 'counter',
    initialState: {
        bet:0,
        balance:0
    },
    reducers: {
        addBalance: (state, payload:any) =>{
            state.balance += payload.balance
        }
    }
})

export const {addBalance} = xbet.actions
export const reducer = xbet.reducer