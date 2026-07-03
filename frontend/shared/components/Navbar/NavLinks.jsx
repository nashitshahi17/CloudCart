import { NavLink } from "react-router-dom";

const links = [
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Orders",
    path: "/orders",
  },
];

export default function NavLinks() {
  return (
    <nav className="flex gap-6">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          className={({ isActive }) =>
            `
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
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}