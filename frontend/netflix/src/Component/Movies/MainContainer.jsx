import { useState } from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoContainer/VideoBackground'
import VideoTitle from './VideoContainer/VideoTitle'
import PreviewModal from './MainMovieContainer/PreviewModal' // Jo aapne pehle banaya tha

const MainContainer = () => {
    const [showFullscreen, setShowFullscreen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    const movies = useSelector(store => store?.movie?.newMoviePlaylist)
    if (!movies) return null

    const mainMovie = movies[2]; // Background movie
    const { overview, title, id } = mainMovie;

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <VideoBackground movieId={id} />
            
            {/* Title & Buttons - Inko props pass karenge control ke liye */}
            <VideoTitle 
                title={title} 
                overview={overview} 
                onPlay={() => setShowFullscreen(true)} 
                onInfo={() => setShowModal(true)}
            />

            {/* 1. Full Screen Video Player (Jab Play click ho) */}
            {showFullscreen && (
                <div className="fixed inset-0 z-[100] bg-black">
                    <button 
                        onClick={() => setShowFullscreen(false)}
                        className="absolute top-10 right-10 z-[110] text-white text-4xl font-bold bg-black/50 px-4 py-2 rounded-full"
                    >
                        ✕
                    </button>
                    <VideoBackground movieId={id} isFullscreen={true} />
                </div>
            )}

            {/* 2. Detail Modal (Jab More Info click ho) */}
            {showModal && (
                <PreviewModal 
                    movie={mainMovie} 
                    onClose={() => setShowModal(false)} 
                />
            )}
        </div>
    )
}

export default MainContainer