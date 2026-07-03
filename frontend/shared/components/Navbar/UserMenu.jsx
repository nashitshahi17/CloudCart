import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";

import Button from "../Button/Button";

import { useAuth } from "../../../context/AuthContext";

export default function UserMenu() {

    const navigate = useNavigate();

    const {

        user,

        isAuthenticated,

        logout

    } = useAuth();

    function handleLogout() {

        logout();

        navigate("/login", {

            replace: true

        });

    }

    if (!isAuthenticated) {

        return (

            <div className="flex items-center gap-3">

                <Link to="/login">

                    <Button
                        variant="ghost"
                    >
                        Login
                    </Button>

                </Link>

                <Link to="/register">

                    <Button>
                        Register
                    </Button>

                </Link>

            </div>

        );

    }

    return (

        <div className="flex items-center gap-4">

            <Link

                to="/profile"

                className="flex items-center gap-2 text-[var(--foreground)] hover:text-[var(--color-primary)] transition-colors duration-200"

            >

                <User size={20} />

                <span>

                    {user?.name}

                </span>

            </Link>

            <Button

                variant="ghost"

                onClick={handleLogout}

            >

                <LogOut size={18} />

            </Button>

        </div>

    );

}