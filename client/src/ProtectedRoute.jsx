import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute =() => {
    const {user, isAuthenticathed} = useAuth();
    console.log(user, isAuthenticathed)
    if(!isAuthenticathed){
        return <Navigate to="/login" replace/>
    }
    return (
        <div>
            <Outlet/>
        </div>
    )
}

export default ProtectedRoute;