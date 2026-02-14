import { useSelector } from 'react-redux'
import VideoBackground from './VideoContainer/VideoBackground'
import VideoTitle from './VideoContainer/VideoTitle'

const MainContainer = () => {
    const movie = useSelector(store => store?.movie?.newMoviePlaylist)
    if (!movie) return null

    const { overview, title, id } = movie[2]

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <VideoBackground movieId={id} />
            <VideoTitle title={title} overview={overview} />
        </div>
    )
}

export default MainContainer
