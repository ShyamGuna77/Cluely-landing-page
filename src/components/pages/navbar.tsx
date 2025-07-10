/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function ScrollAwareNavbar() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && currentScrollY > 80) {
        // Scrolling down
        setScrollDirection("down");
        setIsVisible(false);
      } else {
        // Scrolling up
        setScrollDirection("up");
        setIsVisible(true);
      }

      setScrollY(currentScrollY);
      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "How it works", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Download", href: "#download" },
    { name: "About", href: "#support" },
    { name: "Contact", href: "#support" },
    { name: "Careers", href: "#support" },
  ];

  const navbarClasses = cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
    "font-inter",
    scrollY > 50
      ? "backdrop-blur-md bg-white/90 shadow-lg border-b border-gray-200/50 mx-4 mt-2 rounded-full"
      : "bg-gradient-navbar",
    isVisible ? "translate-y-0" : "-translate-y-full"
  );

  const containerClasses = cn(
    "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
    "flex items-center justify-between transition-all duration-300",
    scrollY > 50 ? "h-12 lg:h-14 px-6 sm:px-8 lg:px-10" : "h-16 lg:h-20"
  );

  const logoClasses = cn(
    "text-xl lg:text-2xl font-bold transition-colors duration-200",
    scrollY > 20 ? "text-gray-900" : "text-black"
  );

  const linkClasses = cn(
    "text-sm lg:text-base font-medium transition-colors duration-200 hover:text-blue-600",
    scrollY > 20
      ? "text-gray-700 hover:text-blue-600"
      : "text-black/90 hover:text-black"
  );

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} className={linkClasses}>
      {children}
    </a>
  );

  const MobileNavLink = ({
    href,
    children,
    onClick,
  }: {
    href: string;
    children: React.ReactNode;
    onClick?: () => void;
  }) => (
    <a
      href={href}
      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
      onClick={onClick}
    >
      {children}
    </a>
  );

  return (
    <nav className={navbarClasses}>
      <div className={containerClasses}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className={logoClasses}>
            Cluely
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Button
            className={cn(
              "bg-black hover:bg-black text-white px-6 py-2 rounded-lg",
              "font-medium transition-all duration-200 transform hover:scale-105",
              "shadow-md hover:shadow-lg"
            )}
          >
            SignUp
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className={cn(
                  "p-2 rounded-md transition-colors",
                  scrollY > 20
                    ? "text-gray-700 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open main menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <span className="text-xl font-bold text-gray-900">
                    Cluely
                  </span>
                </div>

                <div className="flex-1 py-6">
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <MobileNavLink
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </MobileNavLink>
                    ))}
                  </div>
                </div>

                <div className="border-t py-4">
                  <Button
                    className="w-full bg-black hover:bg-black text-white py-3 rounded-lg font-medium transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    SignUp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
