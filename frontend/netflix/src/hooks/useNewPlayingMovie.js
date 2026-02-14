import axios from "axios";
import { useDispatch } from "react-redux";
import { getNewPlayingMovies } from "../Component/redux/movieSlice";
import { NewPlaylistAPi, options } from "../utils/constant";

const useNewPlayingMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(NewPlaylistAPi, options);
    // console.log(res.data.results);
    dispatch(getNewPlayingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};

export default useNewPlayingMovies;
