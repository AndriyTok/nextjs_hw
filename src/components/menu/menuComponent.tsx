"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigationItems = [
  { href: "/", label: "Home" },
  { href: "/users", label: "Users" },
  { href: "/posts", label: "Posts" },
  { href: "/comments", label: "Comments" },
];

const isActiveRoute = (pathname: string, href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

const MenuComponent = () => {
  const pathname = usePathname();

  return (
    <nav className="border-b border-zinc-200 bg-white/90 text-zinc-900 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-center px-4 py-4">
        <ul className="flex flex-wrap justify-center gap-3 text-lg font-medium">
          {navigationItems.map(({ href, label }) => {
            const isActive = isActiveRoute(pathname, href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`rounded-full px-4 py-2 transition-colors ${
                    isActive
                      ? "bg-zinc-900 text-white"
                      : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MenuComponent;