import { Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

export default function PrivateRoute(props) {
    const profile = useSelector(state => state.profile)
    const userId = profile.user?._id;
    
    return userId ? <Route {...props} /> : <Navigate to="/login" state={{ from: props.path }} />
}