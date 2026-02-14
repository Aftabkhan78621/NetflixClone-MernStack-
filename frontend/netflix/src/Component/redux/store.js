import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/Userslice";
import movieReducer from './movieSlice'
import searchMovieSlice from './SearchSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    movie:movieReducer,
    searchMovie:searchMovieSlice
  },
});
