import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  User,
  Package,
  Bell,
  LogOut,
  ChevronDown,
} from "lucide-react";

import Button from "../Button/Button";
import { useAuth } from "../../../context/AuthContext";

export default function UserMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  const initials =
    user?.name
      ?.split(" ")
      .map((name) => name[0])
      .join("")
      .toUpperCase() || "U";

  if (!isAuthenticated) {
    return (
      <div className="flex items-center gap-3">
        <Link to="/login">
          <Button variant="ghost">Login</Button>
        </Link>

        <Link to="/register">
          <Button>Register</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-[var(--surface-hover)] transition"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)] font-semibold text-white">
          {initials}
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-72 rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-xl overflow-hidden z-50">
          {/* User Info */}
          <div className="border-b border-[var(--border)] p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] font-semibold text-white">
                {initials}
              </div>

              <div>
                <h3 className="font-semibold text-[var(--foreground)]">
                  {user?.name}
                </h3>

                <p className="text-sm text-[var(--muted-foreground)]">
                  {user?.email}
                </p>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="py-2">
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 hover:bg-[var(--surface-hover)]"
            >
              <User size={18} />
              <span>Profile</span>
            </Link>

            <Link
              to="/orders"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 hover:bg-[var(--surface-hover)]"
            >
              <Package size={18} />
              <span>Orders</span>
            </Link>

            <Link
              to="/notifications"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-5 py-3 hover:bg-[var(--surface-hover)]"
            >
              <Bell size={18} />
              <span>Notifications</span>
            </Link>

            <div className="my-2 border-t border-[var(--border)]" />

            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-5 py-3 text-left text-red-600 hover:bg-red-50"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}