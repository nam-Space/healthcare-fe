
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "utils/UserContext";

const useLogoutUser = () => {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("currentUser-healthcare");
        setUser({});
        navigate("/auth");
    }

    return { handleLogout }
}

export default useLogoutUser