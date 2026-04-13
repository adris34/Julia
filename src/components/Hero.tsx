import React from 'react';
import { MessageCircle, MapPin, Clock, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-background pt-20 pb-16 md:pt-32 md:pb-24">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 blur-3xl opacity-20 pointer-events-none">
        <div className="h-[400px] w-[600px] bg-primary rounded-full"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm border border-primary/10">
            <MapPin className="h-3 w-3" />
            Aigues-Mortes & alentours
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm border border-primary/10">
            <Clock className="h-3 w-3" />
            Disponible 7j/7
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-primary shadow-sm border border-primary/10">
            <Zap className="h-3 w-3" />
            Intervention rapide
          </span>
        </div>

        <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Conciergerie & Ménage <br className="hidden md:block" />
          <span className="text-primary italic">d'Excellence</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70 sm:text-xl">
          La solution complète pour vos locations courte durée et votre domicile à Aigues-Mortes. 
          Gestion locative, entretien et hospitalité pour une sérénité totale.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/NUMERO"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-bold text-white transition-all hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40 active:scale-95 w-full sm:w-auto"
          >
            <MessageCircle className="h-6 w-6 transition-transform group-hover:rotate-12" />
            <span>Discuter de mon projet</span>
          </a>
          
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-8 py-4 text-lg font-semibold text-foreground transition-all hover:bg-white/80 w-full sm:w-auto"
          >
            Voir nos services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
