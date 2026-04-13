import React from 'react';
import { MapPin } from 'lucide-react';

const cities = ["Aigues-Mortes", "Le Grau-du-Roi", "La Grande-Motte"];

const ServiceArea = () => {
  return (
    <section id="zone" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-16 sm:px-16 md:py-24 text-center relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Nous intervenons chez vous
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
              Julia Cleaning se déplace sur tout le secteur d'Aigues-Mortes 
              et les stations balnéaires voisines pour vous offrir le meilleur service.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-6 md:gap-12">
              {cities.map((city, index) => (
                <div key={index} className="flex items-center gap-3 text-white">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/20">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-xl font-semibold tracking-wide">{city}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-16">
              <a
                href="https://wa.me/NUMERO"
                className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 active:scale-95"
              >
                Vérifier ma disponibilité
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
