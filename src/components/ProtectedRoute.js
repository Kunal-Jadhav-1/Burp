import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));

    // If user is not logged in, redirect to login page
    if (!userInfo) {
        alert("You need to Log In to access the cart")
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
