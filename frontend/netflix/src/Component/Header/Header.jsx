import axios from "axios";
import toast from "react-hot-toast";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { API_END_POINT } from '../../utils/constant';
import { setUser } from '../redux/Userslice';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
    const user = useSelector((store) => store.user.user)
    const toggle = useSelector(store => store.movie.toggle)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const LogoutHandler = async () => {
        try {
            const res = await axios.post(`${API_END_POINT}/logout`)
            // console.log(res)
            if (res.data.success) {
                toast.success(res.data.message)
                dispatch(setUser(null))
                navigate('/')
            }
        } catch (error) {
            console.log(error)
            toast.error(error?.response?.data?.message || error.message || 'Logout failed')
        }
    }

    const SearchHandler = () => {
        dispatch(setToggle())
    }
   return (
    <div className="fixed top-0 z-50 w-full bg-gradient-to-b from-black to-transparent">

        <div className="flex items-center justify-between h-[68px] px-4 sm:px-6 md:px-8">

            {/* Logo */}
            <img
                className="w-28 sm:w-32 md:w-40 cursor-pointer"
                src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo-500x281.png"
                alt="netflix-logo"
                onClick={() => navigate("/browser")}
            />

            {user && (
                <>
                    {/* Desktop View */}
                    <div className="hidden md:flex items-center text-white">
                        <IoIosArrowDropdown size={20} />
                        <h1 className="text-base font-medium ml-1">
                            {user.fullName}
                        </h1>

                        <div className="ml-6 flex gap-3">
                            <button
                                onClick={LogoutHandler}
                                className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm"
                            >
                                Logout
                            </button>

                            <button
                                onClick={SearchHandler}
                                className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm"
                            >
                                {toggle ? "Home" : "Search"}
                            </button>
                        </div>
                    </div>

                    {/* Mobile View */}
                    <div className="flex md:hidden items-center text-white gap-2">

                        <button
                            onClick={SearchHandler}
                            className="bg-red-600 px-3 py-1 rounded text-xs"
                        >
                            {toggle ? "Home" : "Search"}
                        </button>

                        <button
                            onClick={LogoutHandler}
                            className="bg-red-600 px-3 py-1 rounded text-xs"
                        >
                            Logout
                        </button>

                    </div>
                </>
            )}

        </div>
    </div>
);

}


export default Header;
