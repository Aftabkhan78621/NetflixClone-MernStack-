import { useEffect, useState } from "react";
import axios from "axios";
import { options, Banner_url } from "../../../utils/constant";

const SearchResultCard = ({ movie }) => {

  const [isHovered, setIsHovered] = useState(false);
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    if (!isHovered || trailerKey) return;

    const fetchTrailer = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos`,
          options
        );

        const trailer = res.data.results.find(
          (video) => video.type === "Trailer"
        );

        if (trailer) {
          setTrailerKey(trailer.key);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrailer();
  }, [isHovered, movie.id, trailerKey]);

  return (
    <div
      className="relative w-full h-72 rounded-xl overflow-hidden cursor-pointer 
                 transform transition duration-300 hover:scale-105 hover:z-20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >

      {/* Poster Image */}
      {!isHovered && (
        <img
          src={`${Banner_url}${movie.poster_path}`}
          alt="poster"
          className="w-full h-full object-cover"
        />
      )}

      {/* Trailer Video */}
      {isHovered && trailerKey && (
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      )}

      {/* Dark Overlay + Title */}
      <div className="absolute bottom-0 left-0 right-0 
                      bg-gradient-to-t from-black to-transparent 
                      p-3 text-white">
        <h3 className="text-sm font-semibold">{movie.title}</h3>
      </div>

    </div>
  );
};

export default SearchResultCard;
