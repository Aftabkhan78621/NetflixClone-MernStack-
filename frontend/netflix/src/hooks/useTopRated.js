import axios from "axios"
import { NewPopular, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import {  topRatedMovies } from "../Component/redux/movieSlice"

const useTopRated = async()=>{
    const dispatch = useDispatch()
    try{
        const res = await axios.get(NewPopular,options)
        // console.log(res.data.results)
        dispatch(topRatedMovies(res.data.results))
    }
    catch(error){
        console.log(error)
    }

}
export default useTopRated