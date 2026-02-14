import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browser from '../Auth/Browser'
import Login from '../Auth/Login'
import CompanyPage from '../pages/CompanyPage'

const create = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: '/browser',
        element: <Browser />
    },
     {
        path:"/company",
        element: <CompanyPage />
    },
])
const Body = () => {

    return (
        <>
            <RouterProvider router={create} />
        </>
    )
}
export default Body