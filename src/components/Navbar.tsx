import React from 'react';
import { MessageCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
            <span className="text-xl font-bold">J</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">Julia Conciergerie</span>
        </div>
        
        <div className="hidden items-center gap-8 md:flex">
          <a href="#services" className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary">Services</a>
          <a href="#why-us" className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary">Pourquoi nous ?</a>
          <a href="#zone" className="text-sm font-medium text-foreground/60 transition-colors hover:text-primary">Zone d'intervention</a>
        </div>

        <a
          href="https://wa.me/NUMERO"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Discuter</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
