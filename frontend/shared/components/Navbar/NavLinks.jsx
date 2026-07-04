import { NavLink } from "react-router-dom";
import { Bell } from "lucide-react";

const links = [
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Orders",
    path: "/orders",
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: Bell,
  },
];

export default function NavLinks() {
  return (
    <nav className="flex gap-6">
      {links.map((link) => {
        const Icon = link.icon;

        return (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `
                flex items-center gap-2
                font-medium
                transition-colors
                duration-200
                ${
                  isActive
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--foreground)] hover:text-[var(--color-primary)]"
                }
              `
            }
          >
            {Icon && <Icon size={18} />}
            <span>{link.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}