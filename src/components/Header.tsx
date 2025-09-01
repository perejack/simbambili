import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import simbaCementLogo from "@/assets/simba-cement-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4 md:gap-8">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={simbaCementLogo} alt="Simba Cement Logo" className="h-8" />
              <span className="text-xl font-bold hidden sm:inline">Simba Cement</span>
            </Link>

            {/* Phone Number - Visible on small screens */}
            <a href="tel:+254738276457" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors md:hidden">
              <Phone className="w-4 h-4" />
              <span>+254 738 276 457</span>
            </a>
          </div>

          {/* Desktop Nav & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              <a href="/#products" className="text-muted-foreground hover:text-primary transition-colors">Products</a>
              <a href="/#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              {/* Phone number - for desktop */}
              <a href="tel:+254738276457" className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+254 738 276 457</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <a href="/#products" className="block py-2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Products</a>
            <a href="/#features" className="block py-2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="/#testimonials" className="block py-2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
            <a href="/#contact" className="block py-2 text-muted-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
