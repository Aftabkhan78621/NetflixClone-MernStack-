import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading : false
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setisLoading:(state,action)=>{
      state.isLoading = action.payload
    }
  },
});
export const { setUser,setisLoading } = userSlice.actions;
export default userSlice.reducer;
