import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/about", label: "About" },
  { to: "/ai-safety", label: "AI Safety" },
  { to: "/events", label: "Events" },
  { to: "/achievements", label: "Achievements" },
  { to: "/our-board", label: "Our Board" },
  { to: "/contact", label: "Contact us" },
] as const;

function linkClassName(isActive: boolean) {
  return [
    "text-sm font-medium transition-colors",
    isActive ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-950",
  ].join(" ");
}

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/about" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="SIRAIS logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold tracking-tight text-zinc-950">SIRAIS</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => linkClassName(isActive)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-zinc-700 hover:text-zinc-950"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-zinc-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "block w-full text-left py-2",
                    isActive
                      ? "text-zinc-950 font-semibold"
                      : "text-zinc-700 hover:text-zinc-950",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
