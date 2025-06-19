"use client";

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import logo from "/logo-kinetix-lobo.png";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const isDark =
    theme === "dark" ||
    (theme === "system" &&
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    setTheme(next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-tr from-white/10 via-purple-400/10 to-red-500/10 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500/40"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-white transition duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-black transition duration-300" />
      )}
    </button>
  );
}

export default function KinetixNavbar() {
  const navItems = [
    { name: "Inicio", link: "#inicio" },
    { name: "Servicios", link: "#servicios" },
    { name: "Precios", link: "#precios" },
    { name: "Ubicación", link: "#ubicacion" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo>
            <a href="#inicio" className="flex items-center gap-2">
              <img src={logo} alt="Kinetix Logo" className="h-8 w-auto" />
              <span className="text-xl font-bold text-blue-500 dark:text-red-500">
                KINETIX
              </span>
            </a>
          </NavbarLogo>

          <NavItems items={navItems} />

          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo>
              <a href="#inicio" className="flex items-center gap-2">
                <img src={logo} alt="Kinetix Logo" className="h-8 w-auto" />
                <span className="text-xl font-bold text-black dark:text-white">
                  KINETIX
                </span>
              </a>
            </NavbarLogo>

            <div className="flex items-center gap-2">
              <ModeToggle />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>

          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block text-lg font-semibold">
                  {item.name}
                </span>
              </a>
            ))}

          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
