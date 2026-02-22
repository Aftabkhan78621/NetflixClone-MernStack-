import { useState } from "react"; // Added useState
import axios from "axios";
import toast from "react-hot-toast";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { API_END_POINT } from '../../utils/constant';
import { setUser } from '../redux/Userslice';
import { setToggle } from '../redux/movieSlice';

const Header = () => {
    const user = useSelector((store) => store.user.user);
    const toggle = useSelector(store => store.movie.toggle);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false); // Modal control
    const [newName, setNewName] = useState(user?.fullName || ""); // Input control
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const LogoutHandler = async () => {
        try {
            const res = await axios.post(`${API_END_POINT}/logout`);
            if (res.data.success) {
                toast.success(res.data.message);
                dispatch(setUser(null));
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.data?.message || 'Logout failed');
        }
    }

    const UpdateNameHandler = async () => {
        try {
            // Note: Make sure your backend has an '/update' route
            const res = await axios.put(`${API_END_POINT}/update`, { fullName: newName });
            if (res.data.success) {
                toast.success("Name updated successfully!");
                // Redux store update taaki header mein naya naam dikhe
                dispatch(setUser({ ...user, fullName: newName }));
                setIsUpdateOpen(false);
            }
        } catch (error) {
            toast.error("Failed to update name");
            console.log(error);
        }
    }

    const SearchHandler = () => {
        dispatch(setToggle());
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
                    <div className="flex items-center text-white gap-4">
                        {/* Name & Icon Section - Clickable */}
                        <div 
                            className="flex items-center cursor-pointer hover:opacity-80 transition"
                            onClick={() => setIsUpdateOpen(!isUpdateOpen)}
                        >
                            <IoIosArrowDropdown size={20} />
                            <h1 className="text-base font-medium ml-1">
                                {user.fullName}
                            </h1>
                        </div>

                        <div className="flex gap-3">
                            <button onClick={SearchHandler} className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm">
                                {toggle ? "Home" : "Search"}
                            </button>
                            <button onClick={LogoutHandler} className="bg-red-600 hover:bg-red-700 px-4 py-1 rounded text-sm">
                                Logout
                            </button>
                        </div>
                    </div>
                )}
            </div>

            {/* Update Profile Box (Modal) */}
            {isUpdateOpen && (
                <div className="absolute right-4 top-16 bg-black/90 border border-gray-700 p-4 rounded-md shadow-lg w-64 z-50">
                    <h2 className="text-white text-sm font-semibold mb-3">Update Profile</h2>
                    <input 
                        type="text"
                        value={newName}
                        onChange={(e) => setNewName(e.target.value)}
                        className="w-full bg-gray-800 text-white text-sm p-2 rounded outline-none border border-gray-600 focus:border-red-600"
                        placeholder="Enter new name"
                    />
                    <div className="flex gap-2 mt-4">
                        <button 
                            onClick={UpdateNameHandler}
                            className="flex-1 bg-red-600 text-white text-xs py-2 rounded hover:bg-red-700"
                        >
                            Update
                        </button>
                        <button 
                            onClick={() => setIsUpdateOpen(false)}
                            className="flex-1 bg-gray-600 text-white text-xs py-2 rounded hover:bg-gray-700"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;