import { useSelector } from "react-redux";
import useMovieById from "../../../hooks/useMovieById";

const VideoBackground = ({ movieId, isFullscreen }) => {
    const trailerMovie = useSelector(store => store.movie.trailerMovie);
    useMovieById(movieId);

    if (!trailerMovie) return null;

    return (
        <div className={`relative w-full ${isFullscreen ? 'h-screen' : 'h-screen'} overflow-hidden`}>
            <iframe
                className={`absolute top-0 left-0 w-full h-full object-cover ${!isFullscreen ? 'scale-125' : 'scale-100'}`}
                src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=${isFullscreen ? '0' : '1'}&controls=${isFullscreen ? '1' : '0'}&rel=0&loop=1&playlist=${trailerMovie.key}`}
                title="YouTube video player"
                allow="autoplay; encrypted-media"
                allowFullScreen
            />
        </div>
    );
};

export default VideoBackground;
