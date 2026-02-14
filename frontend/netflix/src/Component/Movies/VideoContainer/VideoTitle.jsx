import { FaPlay } from 'react-icons/fa';
import { GrCircleInformation } from "react-icons/gr";

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="absolute inset-0 z-10 
                        flex flex-col justify-center 
                        px-16 text-white 
                        bg-gradient-to-r from-black/80 via-black/40 to-transparent">

            <h1 className="text-5xl font-bold max-w-xl">{title}</h1>

            <p className="mt-4 max-w-lg text-gray-200 line-clamp-3">
                {overview}
            </p>

            <div className="mt-6 flex gap-4">
                <button className="px-6 py-2 bg-white text-black rounded-md font-semibold hover:bg-opacity-80">
                    ▶ Play
                </button>

                <button className="px-6 py-2 bg-gray-400 bg-opacity-40 text-white rounded-md hover:bg-opacity-60">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle