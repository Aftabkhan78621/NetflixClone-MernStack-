import { useSelector } from "react-redux";
import useMovieById from "../../../hooks/useMovieById";

const VideoBackground = ({ movieId }) => {
    const trailerMovie = useSelector(store => store.movie.trailerMovie);

    useMovieById(movieId);

    if (!trailerMovie) return null;

  return (
    <div className="relative w-full h-screen overflow-hidden">

        {/* Video */}
        <iframe
            className="absolute top-0 left-0 w-full h-full 
                       pointer-events-none scale-125"
            src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&loop=1&playlist=${trailerMovie.key}`}
            title="YouTube video player"
            allow="autoplay; encrypted-media"
            allowFullScreen
        />

        {/* Dark Overlay (for text visibility) */}
        <div className="absolute inset-0 bg-gradient-to-r 
                        from-black/80 via-black/40 to-transparent" />

    </div>
);
};

export default VideoBackground;
