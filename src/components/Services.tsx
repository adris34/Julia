import React from 'react';
import { Home, Key, ClipboardCheck, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Ménage régulier",
    description: "Un entretien quotidien ou hebdomadaire de votre domicile pour une maison toujours impeccable.",
    icon: <Home className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  },
  {
    title: "Nettoyage fin de séjour",
    description: "Idéal pour les locations saisonnières. Nous préparons votre logement pour les prochains arrivants.",
    icon: <Key className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  },
  {
    title: "État des lieux",
    description: "Nettoyage approfondi avant l'entrée ou la sortie des locataires pour garantir un constat serein.",
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Nos Services</h2>
          <p className="mt-4 text-lg text-foreground/60">
            Une gamme complète de services de nettoyage adaptés à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col items-start rounded-2xl border border-border bg-white p-8 transition-all hover:shadow-xl hover:-translate-y-1 hover:border-primary/20"
            >
              <div className="mb-6 rounded-xl bg-primary/5 p-3 transition-colors group-hover:bg-primary/10">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href={service.link}
                className="mt-auto inline-flex items-center gap-2 font-semibold text-primary group/link"
              >
                <span>En savoir plus</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
