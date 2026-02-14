import axios from "axios"
import { useState } from "react"
import toast from "react-hot-toast"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { API_END_POINT } from '../../utils/constant'
import Header from "../Header/Header"
import { setisLoading, setUser } from "../redux/Userslice"

const Login = () => {
  const navigate = useNavigate()
  const [islogin, setisLogin] = useState(false)
  const [fullName, setfullName] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const dispatch = useDispatch()

  const isLoading = useSelector((store) => store.user.isLoading)

  const LoginHandler = () => {
    setisLogin(!islogin)
  }
  const getData = async (e) => {
    e.preventDefault()
    // console.log(fullname, email, password)
    dispatch(setisLoading(true))

    if (islogin) {
      const user = { email, password }
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        // console.log(res)
        if (res.data.success) {
          toast.success(res.data.message)
          dispatch(setUser(res.data.user))
          navigate('/browser')
          // console.log("Redux data:", res.data)

        }
      }

      catch (error) {
        toast.error(error.response.data.message)
        console.log("islogin error from frontend: ", error.message)
      } finally {
        dispatch(setisLoading(false))
      }
    }
    else {
      // register
      dispatch(setisLoading(true))
      const user = { fullName, email, password }
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        })
        // console.log(res)
        if (res.data.success) {
          toast.success(res.data.message)
          setisLogin(true)

        }
      } catch (error) {
        console.log(error)
        toast.error(error.response?.data?.message || "Something went wrong")
      } finally {
        dispatch(setisLoading(false))
      }
    }

    setfullName('')
    setemail('')
    setpassword('')


  }
  return (
    <>
      <div>
        <Header />

        {/* bg img type  */}
        <div className="absolute">
          <img className="w-[100vw] h-screen bg-cover" src="https://www.techhive.com/wp-content/uploads/2023/10/Netflix-Hintergrund.jpg?quality=50&strip=all" alt="netflix-home" />
        </div>

        {/* form for login and signup */}
      <form
  onSubmit={getData}
  className="flex flex-col 
             w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[28%]
             p-6 sm:p-8 md:p-10
             my-32 sm:my-36
             left-0 right-0 mx-auto
             absolute
             bg-black/80
             rounded-md
             shadow-lg"
>
          <h1 className="text-3xl text-white mb-5 font-bold">
            {islogin ? "Login" : "SignUp"}

          </h1>
          <div className="flex flex-col">
            {
              !islogin && <input value={fullName} onChange={(e) => setfullName(e.target.value)} type="text" placeholder="Enter Your FullName" className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />

            }
            <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Enter Your Email" className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            <input type="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="Enter Your Password" className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
            {/* button */}
            <button className="bg-red-600 mt-6 p-3 text-white rounded-md hover:bg-red-300 font-medium  ">
              {`${isLoading ? 'loading...' : (islogin ? "login" : "signUp")}`}
            </button>
            <p className="text-white mt-2">{islogin ? "New to Netflix?" : "Already have an account?"}<span onClick={LoginHandler} className="ml-1 text-blue-300 cursor-pointer">{islogin ? "SignUp" : "Login"}</span></p>
          </div>
        </form>


      </div>
    </>
  )
}
export default Login