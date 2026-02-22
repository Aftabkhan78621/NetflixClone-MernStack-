import { useEffect, useState } from "react";
import axios from "axios";
import { options, Banner_url } from "../../../utils/constant";

const PreviewModal = ({ movie, onClose }) => {
    const [trailerKey, setTrailerKey] = useState(null);
    const [showTrailer, setShowTrailer] = useState(false); // Toggle state

    useEffect(() => {
        const fetchTrailer = async () => {
            try {
                const res = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
                    options
                );
                const trailer = res.data.results.find(
                    (video) => video.type === "Trailer"
                );
                if (trailer) setTrailerKey(trailer.key);
            } catch (error) {
                console.log("Error fetching trailer:", error);
            }
        };
        if (movie?.id) fetchTrailer();
    }, [movie.id]);

    if (!movie) return null;

    return (
        <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={onClose}
        >
            <div
                className="bg-[#181818] w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[450px]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Left Side: Image or Video */}
                <div className="w-full md:w-1/2 bg-black relative group cursor-pointer">
                    {!showTrailer ? (
                        <div className="relative h-full w-full" onClick={() => setShowTrailer(true)}>
                            <img
                                className="w-full h-full object-cover"
                                src={`${Banner_url}${movie.poster_path}`}
                                alt={movie.title}
                            />
                            {/* Play Button Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                                <div className="bg-white/20 p-4 rounded-full backdrop-blur-md">
                                    <span className="text-white text-4xl">▶</span>
                                </div>
                                <p className="absolute bottom-4 text-white font-semibold">Click to Watch Trailer</p>
                            </div>
                        </div>
                    ) : (
                        <div className="h-full w-full bg-black">
                            {trailerKey ? (
                                <iframe
                                    className="w-full h-full aspect-video"
                                    src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                                    title="Trailer"
                                    allow="autoplay; encrypted-media"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-white">
                                    Trailer not available
                                </div>
                            )}
                            <button 
                                onClick={() => setShowTrailer(false)}
                                className="absolute top-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-xs"
                            >
                                ← Back to Poster
                            </button>
                        </div>
                    )}
                </div>

                {/* Right Side: Movie Details */}
                <div className="w-full md:w-1/2 p-8 flex flex-col relative text-white">
                    <button 
                        onClick={onClose}
                        className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl"
                    >
                        ✕
                    </button>

                    <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
                    
                    <div className="flex items-center gap-4 mb-4 text-sm">
                        <span className="text-green-500 font-bold border border-green-500 px-2 rounded">
                            {movie.vote_average.toFixed(1)} Rating
                        </span>
                        <span className="text-gray-400">
                            {movie.release_date?.split("-")[0]}
                        </span>
                    </div>

                    <p className="text-gray-300 leading-relaxed overflow-y-auto max-h-60 mb-6 italic">
                        "{movie.overview}"
                    </p>

                    <div className="mt-auto">
                        <button 
                            className="w-full bg-red-600 text-white py-3 rounded-md font-bold hover:bg-red-700 transition"
                            onClick={() => setShowTrailer(!showTrailer)}
                        >
                            {showTrailer ? "View Details" : "Watch Trailer Now"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviewModal;