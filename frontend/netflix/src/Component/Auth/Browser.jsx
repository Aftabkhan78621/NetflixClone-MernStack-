import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useNowPlayingMovies from '../../hooks/useNewPlayingMovie'
import useNewPopularMovie from '../../hooks/useNewPopularMovie'
import useTopRated from '../../hooks/usetopRated'
import useUpComing from '../../hooks/useupComing'
import Header from "../Header/Header"
import MainContainer from '../Movies/MainContainer'
import MainMovie from '../Movies/MainMovieContainer/MainMovie'
import SearchMovie from '../Movies/SearchMovies/SearchMovie'
import useMovieById from '../../hooks/useMovieById'
import Footer from '../Footer/Footer'
// import {} from 'react-redux'

const Browser = () => {
    const user = useSelector((state) => state.user.user)
    const toggle = useSelector((state) => state.movie.toggle)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // custom hooks
    useNowPlayingMovies()
    useNewPopularMovie()
    useUpComing()
    useTopRated()
    // useMovieById()




    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [])

    return (
        <>
            <div >
                <Header />
                {
                    toggle ? <SearchMovie /> : <div className=''>
                        <MainContainer />
                        <MainMovie />
                    </div>
                }

                  <Footer />   {/* 🔥 Add Here */}

            </div>
        </>)
}
export default Browser