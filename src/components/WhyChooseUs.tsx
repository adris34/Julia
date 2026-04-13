import React from 'react';
import { ShieldCheck, Calendar, UserCheck, Sparkles } from 'lucide-react';

const argumentsList = [
  {
    title: "Expertise Airbnb",
    desc: "Nous maîtrisons les codes de l'hospitalité pour maximiser vos notes voyageurs.",
    icon: <ShieldCheck className="h-6 w-6" />
  },
  {
    title: "Disponibilité 7j/7",
    desc: "Un service réactif pour gérer les imprévus et les arrivées tardives sans stress.",
    icon: <Calendar className="h-6 w-6" />
  },
  {
    title: "Propreté Hôtelière",
    desc: "Un niveau de finition digne des plus grands hôtels pour vos invités.",
    icon: <Sparkles className="h-6 w-6" />
  },
  {
    title: "Gestion de proximité",
    desc: "Une équipe sur place à Aigues-Mortes pour une intervention en moins de 30min.",
    icon: <UserCheck className="h-6 w-6" />
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl mb-6">
              Pourquoi choisir <span className="text-primary italic">Julia Conciergerie</span> ?
            </h2>
            <p className="text-lg text-foreground/60 mb-10 leading-relaxed">
              Nous ne nous contentons pas de nettoyer. Nous prenons soin de votre espace de vie 
              avec la même exigence que s'il s'agissait du nôtre. Notre mission est de vous 
              offrir une tranquillité d'esprit totale.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {argumentsList.map((arg, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-card text-primary shadow-sm border border-border">
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
          
          <div className="lg:w-1/2 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl bg-card">
             {/* Placeholder for an image of a clean room/professional equipment */}
             <div className="absolute inset-0 bg-gradient-to-tr from-background to-card flex items-center justify-center p-8 text-center">
                <div>
                   <p className="text-slate-400 font-medium uppercase tracking-widest text-sm mb-2">Julia Conciergerie</p>
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
