import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    newMoviePlaylist: null,
    popular: null,
    topRated: null,
    upComing: null,
    toggle: false,
    trailerMovie: null,
  },
  reducers: {
    getNewPlayingMovies: (state, action) => {
      state.newMoviePlaylist = action.payload;
    },
    popularMovies: (state, action) => {
      state.popular = action.payload;
    },
    topRatedMovies: (state, action) => {
      state.topRated = action.payload;
    },
    upComingMovies: (state, action) => {
      state.upComing = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
    },
    TrailerMovie:(state,action)=>{
      state.trailerMovie = action.payload
    }
  },
});
export const {
  getNewPlayingMovies,
  popularMovies,
  topRatedMovies,
  upComingMovies,
  setToggle,
  TrailerMovie
} = movieSlice.actions;
export default movieSlice.reducer;
