import { useSelector } from "react-redux"
import { useState } from "react"
import MovieList from "./MovieList"
import PreviewModal from "./PreviewModal"

const MainMovie = () => {

    const movie = useSelector(store => store.movie)
    const [selectedMovie, setSelectedMovie] = useState(null)

    return (
        <>
            <div className="bg-black">
                <div className="-mt-52 relative z-10">

                    <MovieList
                        title="Popular Movies"
                        movies={movie.popular}
                        setSelectedMovie={setSelectedMovie}
                    />

                    <MovieList
                        title="Top Rated Movies"
                        movies={movie.topRated}
                        setSelectedMovie={setSelectedMovie}
                    />

                    <MovieList
                        title="UpComing Movies"
                        movies={movie.upComing}
                        setSelectedMovie={setSelectedMovie}
                    />

                </div>
            </div>

            {selectedMovie && (
                <PreviewModal
                    movie={selectedMovie}
                    onClose={() => setSelectedMovie(null)}
                />
            )}
        </>
    )
}

export default MainMovie
