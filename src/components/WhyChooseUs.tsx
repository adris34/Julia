import React from 'react';
import { ShieldCheck, Calendar, UserCheck, Leaf } from 'lucide-react';

const argumentsList = [
  {
    title: "Professionnalisme",
    desc: "Une rigueur exceptionnelle et une attention particulière aux détails pour chaque pièce.",
    icon: <ShieldCheck className="h-6 w-6" />
  },
  {
    title: "Flexibilité totale",
    desc: "Nous nous adaptons à votre emploi du temps et à vos besoins spécifiques, 7j/7.",
    icon: <Calendar className="h-6 w-6" />
  },
  {
    title: "Confiance & Proximité",
    desc: "Une équipe locale, fiable et discrète, basée directement à Aigues-Mortes.",
    icon: <UserCheck className="h-6 w-6" />
  },
  {
    title: "Eco-responsable",
    desc: "Utilisation de produits de nettoyage respectueux de l'environnement sur demande.",
    icon: <Leaf className="h-6 w-6" />
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-6">
              Pourquoi choisir <span className="text-primary italic">Julia Cleaning</span> ?
            </h2>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
              Nous ne nous contentons pas de nettoyer. Nous prenons soin de votre espace de vie 
              avec la même exigence que s'il s'agissait du nôtre. Notre mission est de vous 
              offrir une tranquillité d'esprit totale.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {argumentsList.map((arg, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm border border-border">
                    {arg.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">{arg.title}</h4>
                    <p className="text-sm text-foreground/60">{arg.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-slate-200">
             {/* Placeholder for an image of a clean room/professional equipment */}
             <div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center p-8 text-center">
                <div>
                   <p className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-2">Julia Cleaning</p>
                   <p className="text-slate-500 font-semibold italic text-xl">L'excellence au service de votre intérieur</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
