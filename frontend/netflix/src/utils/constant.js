export const API_END_POINT = "https://cinestream-da71.onrender.com/api/v1/user";
// http://localhost:8000/api/v1/user

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NGVmYjBhNGFmNmQ0YzkyNDBiMDRkOTVkYzZiNDRmZiIsIm5iZiI6MTczNTk2NDU3OC40MzgwMDAyLCJzdWIiOiI2Nzc4YjdhMjE1NTIxZjgzZDk2NmJiM2QiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.d_3MTYICun5PEpxHtOlfOT7quYDhkJObnflZdYxmwWY",
  },
};

export const NewPlaylistAPi = "https://api.themoviedb.org/3/movie/now_playing";
export const NewPopular = "https://api.themoviedb.org/3/movie/popular";
export const top_rated = "https://api.themoviedb.org/3/movie/top_rated";
export const upComing = "https://api.themoviedb.org/3/movie/upcoming";
export const Banner_url = "https://image.tmdb.org/t/p/w500";
export const SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
