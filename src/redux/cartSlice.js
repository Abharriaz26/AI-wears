import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    carts:[]
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            const findindex = state.carts.findIndex((item)=>item.id ===
            action.payload.id
            )
            if(findindex >=0){
                state.carts[findindex].qty +=1;
            }else{
                const newItem= {...action.payload , qty :1};
                state.carts =[...state.carts,newItem];
            }
        },
        remove:(state, action)=>{
            const removeindex = state.carts.findIndex((item)=>item.id===
            action.payload.id)
            if(state.carts[removeindex].qty>1){
                state.carts[removeindex].qty -=1;
        }
    },
    removeall:(state, action)=>{
        const data = state.carts.filter((x)=>x.id !== action.payload)
        state.carts =data
    }
    }
})

export const {add,remove, removeall}= cartSlice.actions;

export default cartSlice.reducer;