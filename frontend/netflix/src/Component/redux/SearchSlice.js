import { createSlice } from "@reduxjs/toolkit";
const searchslice = createSlice({
  name: "search",
  initialState: {
    movieName: null,
    searchedMovie: null,
  },
  reducers: {
    // actions
    setSerchedMovieDetails:(state,action)=>{
      const {searchMovie , movies} = action.payload
      state.movieName = searchMovie
      state.searchedMovie  = movies
    },
    // setMovieName: (state, action) => {
    //   state.movieName = action.payload;
    // },
    // setSerchedMovie: (state, action) => {
    //   state.searhedMovie = action.payload;
    // },
  },
});
export const {  setSerchedMovieDetails } = searchslice.actions;
export default searchslice.reducer;
