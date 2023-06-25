import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:"",
    users:[],
    resumeData:[],
    draftData:[],
}

const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
        addUser : (state,action)=>{
            state.user=action.payload;
            const foundItem = state.users.find((user) => user.number === action.payload);
            if(!foundItem) {state.users.push({id:Date.now(),number:action.payload})}
        },

        addResume : (state,action)=>{
            let data = action.payload;
            if(!data.userId && !data.id) {
                data["userId"] = state.user;
                data["id"] = Date.now();
            }
            

            state.resumeData.push(data);
        },

        deleteResume : (state,action)=>{
            state.resumeData = state.resumeData.filter((item) => item.id !== action.payload);
        },

        addDraft : (state,action)=>{
            let data = action.payload;
            data["userId"] = state.user;
            data["id"] = Date.now();
            console.log("data",data);

            state.draftData.push(data);
        },

        saveChange: (state, action) => {
            state.draftData = state.draftData.map((item) => {
              if (item.id === action.payload.id) {
                console.log("found", action.payload);
                return action.payload;
              }
              return item;
            });
          },
          

        deleteDraft : (state,action)=>{
            state.draftData = state.draftData.filter((item) => item.id !== action.payload);
        },

        logOut : (state)=>{
            state.user = "";
        }
    }
});

export const {addUser,logOut,addResume,deleteResume,addDraft,deleteDraft,saveChange} = usersSlice.actions;

export default usersSlice.reducer;