import { createSlice } from "@reduxjs/toolkit";

export const rewardPackSlice = createSlice({
    name: "rewardPack",
    initialState: {
        value: {
            test: 0,
            packList: []
        }
    },
    reducers: {
        setValue: (state)=>{
            state.value.test+=1;
        },
        setPackList: (state, action)=>{
            state.value.packList = action.payload;
        }
    }
});


export default rewardPackSlice.reducer;
export const {setValue,setPackList} = rewardPackSlice.actions;


