import axios from "axios";
import { useDispatch } from "react-redux";
import { upComingMovies } from "../Component/redux/movieSlice";
import { NewPopular, options, upComing } from "../utils/constant";

const useUpComing = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(upComing, options);
    // console.log(res.data.results);
    dispatch(upComingMovies(res.data.results));
  } catch (error) {
    console.log(error);
  }
};
export default useUpComing;
