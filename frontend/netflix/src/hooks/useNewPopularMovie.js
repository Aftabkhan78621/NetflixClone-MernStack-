import axios from "axios"
import { NewPopular, options } from "../utils/constant"
import { useDispatch } from "react-redux"
import {  popularMovies } from "../Component/redux/movieSlice"

const useNewPopularMovie = async()=>{
    const dispatch = useDispatch()
    try{
        const res = await axios.get(NewPopular,options)
        // console.log(res.data.results)
        dispatch(popularMovies(res.data.results))
    }
    catch(error){
        console.log(error)
    }

}
export default useNewPopularMovie