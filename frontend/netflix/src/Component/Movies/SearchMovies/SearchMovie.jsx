import axios from 'axios';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { options, SEARCH_MOVIE_URL } from "../../../utils/constant";
import { setSerchedMovieDetails } from '../../redux/SearchSlice';
import { setisLoading } from '../../redux/Userslice';
import { Banner_url } from "../../../utils/constant";
import SearchResultCard from './SearchResultCard';

const SearchMovie = () => {

    const [searchMovie, setsearchMovie] = useState('')
    const dispatch = useDispatch()
    const isloading = useSelector(store => store.user.isLoading)

    const { movieName, searchedMovie } = useSelector(store => store.searchMovie)

    const submitHandler = async (e) => {
        e.preventDefault()
        if (!searchMovie) return;

        dispatch(setisLoading(true))
        try {
            const res = await axios.get(
                `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
                options
            )

            const movies = res?.data?.results
            dispatch(setSerchedMovieDetails({ searchMovie, movies }))
        } catch (error) {
            console.log(error)
        } finally {
            dispatch(setisLoading(false))
        }
        setsearchMovie('')
    }

   return (
    <div className="min-h-screen bg-black text-white 
                    pt-[90px] 
                    px-4 sm:px-6 md:px-10 lg:px-16">

        {/* Search Bar */}
        <div className="flex justify-center mb-8 sm:mb-10">
            <form onSubmit={submitHandler} className="w-full max-w-2xl">
                <div className="flex rounded-lg overflow-hidden shadow-lg bg-white">

                    <input
                        value={searchMovie}
                        onChange={(e) => setsearchMovie(e.target.value)}
                        className="w-full px-4 py-3 
                                   text-sm sm:text-base 
                                   text-black outline-none"
                        type="text"
                        placeholder="Search Movies..."
                    />

                    <button
                        className="bg-red-600 hover:bg-red-700 
                                   px-4 sm:px-6 
                                   py-3 
                                   text-sm sm:text-base 
                                   text-white"
                    >
                        {isloading ? "Loading..." : "Search"}
                    </button>

                </div>
            </form>
        </div>

        {/* Results Section */}
        {searchedMovie && (
            <>
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-center sm:text-left">
                    Search Results for "{movieName}"
                </h2>

                <div className="grid 
                                grid-cols-2 
                                sm:grid-cols-3 
                                md:grid-cols-4 
                                lg:grid-cols-5 
                                xl:grid-cols-6
                                gap-4 sm:gap-6">

                    {searchedMovie.map((movie) => (
                        movie.poster_path && (
                            <SearchResultCard key={movie.id} movie={movie} />
                        )
                    ))}

                </div>
            </>
        )}
    </div>
)

}

export default SearchMovie;
