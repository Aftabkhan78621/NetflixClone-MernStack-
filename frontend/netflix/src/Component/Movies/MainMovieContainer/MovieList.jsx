import MovieCard from "./MovieCard"

const MovieList = ({ title, movies, setSelectedMovie }) => {

    if (!movies) return null;

    return (
        <div className="px-8 mb-8">
            <h1 className="text-2xl py-4 text-white font-semibold">
                {title}
            </h1>

            <div className="overflow-x-auto no-scrollbar">
                <div className="flex gap-4">
                    {movies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            posterPath={movie.poster_path}
                            movie={movie}
                            setSelectedMovie={setSelectedMovie}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList
