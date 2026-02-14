import { useEffect, useState } from "react";
import axios from "axios";
import { options } from "../../../utils/constant";

const PreviewModal = ({ movie, onClose }) => {

    const [trailerKey, setTrailerKey] = useState(null);

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
                console.log(error);
            }
        };

        fetchTrailer();

    }, [movie.id]);

    return (
        <div
            className="fixed inset-0 z-50 
                       bg-black/70 backdrop-blur-sm 
                       flex items-center justify-center"
            onClick={onClose}
        >
            <div
                className="w-[800px] h-[450px] bg-black rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {trailerKey && (
                    <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </div>
        </div>
    );
};

export default PreviewModal;
