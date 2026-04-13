import React from 'react';
import { MessageCircle, Mail, MapPin, Globe, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white font-bold">J</div>
              <span className="text-xl font-bold tracking-tight text-foreground">Julia Conciergerie</span>
            </div>
            <p className="text-foreground/60 max-w-sm mb-6">
              Votre partenaire de confiance pour un intérieur serein et impeccable à Aigues-Mortes et ses environs. 
              Service professionnel, discret et flexible.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-border text-foreground/60 transition-colors hover:text-primary hover:border-primary/20 shadow-sm">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-white border border-border text-foreground/60 transition-colors hover:text-primary hover:border-primary/20 shadow-sm">
                <Share2 className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-foreground/60">
                <MapPin className="h-5 w-5 shrink-0 text-primary/60" />
                <span className="text-sm">30220 Aigues-Mortes, France</span>
              </li>
              <li className="flex items-center gap-3 text-foreground/60">
                <Mail className="h-5 w-5 shrink-0 text-primary/60" />
                <span className="text-sm">contact@julia-cleaning.fr</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/NUMERO" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Cliquer pour discuter</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-foreground mb-6">Informations</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-sm text-foreground/60 hover:text-primary transition-colors">Services</a></li>
              <li><a href="#why-us" className="text-sm text-foreground/60 hover:text-primary transition-colors">Pourquoi nous ?</a></li>
              <li><a href="#zone" className="text-sm text-foreground/60 hover:text-primary transition-colors">Zone d'intervention</a></li>
              <li><a href="#" className="text-sm text-foreground/60 hover:text-primary transition-colors">Mentions légales</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/40">
            © {new Date().getFullYear()} Julia Cleaning. Tous droits réservés.
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary border border-primary/10">
            Fait avec passion à Aigues-Mortes
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
