import { Banner_url } from '../../../utils/constant'

const MovieCard = ({ posterPath, movie, setSelectedMovie }) => {

    if (!posterPath) return null

    return (
        <div
            className="w-40 flex-shrink-0 relative 
                       transform transition duration-300 
                       hover:scale-110 hover:z-20 cursor-pointer"
            onClick={() => setSelectedMovie(movie)}   // ✅ CLICK
        >
            <img
                className="w-full h-60 object-cover 
                           rounded-xl shadow-lg"
                src={`${Banner_url}${posterPath}`}
                alt="movie-banner"
            />

            <div className="absolute inset-0 bg-black/40 
                            opacity-0 hover:opacity-100 
                            transition rounded-xl"></div>
        </div>
    )
}

export default MovieCard
