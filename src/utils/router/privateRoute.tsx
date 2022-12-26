import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../hook";

const PrivateRoute = () => {
    // const auth = useAuth()
    const auth = true
    return (
        auth ? <Outlet /> : <Navigate to="login" />
    );
};

export default PrivateRoute;