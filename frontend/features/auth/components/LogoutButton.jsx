import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Button from "../../../shared/components/Button/Button";
import { useAuth } from "../../../context/AuthContext";
export default function LogoutButton() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        toast.success("Logged out successfully");
        navigate("/login", {
            replace: true,
        });
    };

    return (
        <Button
            variant="secondary"
            onClick={handleLogout}
        >
            Logout
        </Button>
    );

}