const {createSlice} =require("@reduxjs/toolkit")

const initialState=[];
const cartSlice=createSlice({
    name :'cart',
    initialState,
    reducers :{
        add(state, action){
            state.push(action.payload)
            console.log("sak Add",action.payload);
        },
        remove(state, action) {
            console.log("saad", state);
            console.log("sak remove", action.payload);
          
            // Find the index of the first occurrence of the item with the specified id
            const indexToRemove = state.findIndex((item) => item.id === action.payload);
          
            // If the item is found, remove it
            if (indexToRemove !== -1) {
              state.splice(indexToRemove, 1);
            }
          
            return state;
          },

    }

});

export const {add,remove}= cartSlice.actions;
export default cartSlice.reducer;