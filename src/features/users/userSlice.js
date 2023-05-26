import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        editUser: (state, action) => {
            const { id, name, email } = action.payload;
            const existingUser = state.find(user => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.email = email;
            }
        },
        deleteUser: (state, action)=>{

            let index = state.findIndex(({ id }) => id === action.payload.id);
            state.splice(index, 1);


            // const { id } = action.payload;
            // const existingUser = state.find(user => user.id === id)
            // console.log(existingUser);
            // if (existingUser) {
            //     return state.filter(user => user.id !== id);
            // }
        },

        addData:(state, action)=>{
            state.push(action.payload)
        }
    },
});
export const { addUser, editUser,deleteUser, addData } = userSlice.actions;

export default userSlice.reducer;
