import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import LoadingSpinner from "../Pages/Spinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user, loading} = useContext(AuthContext)

    if(user){
        return children
    }

    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;