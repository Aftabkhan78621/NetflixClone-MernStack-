import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TrailerMovie } from "../Component/redux/movieSlice";
import { options } from "../utils/constant";

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const fetchTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );

        const trailer = res?.data?.results?.find(
          (video) => video.type === "Trailer"
        );

        dispatch(TrailerMovie(trailer));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrailer();
  }, [movieId, dispatch]);
};

export default useMovieById;
