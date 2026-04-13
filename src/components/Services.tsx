import React from 'react';
import { Home, Key, ClipboardCheck, Bell, BedDouble, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Ménage régulier",
    description: "Un entretien quotidien ou hebdomadaire pour une maison toujours superbe.",
    icon: <Home className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  },
  {
    title: "Ménage fin de séjour",
    description: "Nettoyage complet entre deux locations pour une hygiène irréprochable.",
    icon: <Sparkles className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  },
  {
    title: "Gestion des clés",
    description: "Accueil physique des voyageurs, remise des clés et présentation du logement.",
    icon: <Key className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  },
  {
    title: "Blanchisserie professionnelle",
    description: "Gestion complète du linge de maison : lavage, séchage et mise en place.",
    icon: <BedDouble className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  },
  {
    title: "États des lieux",
    description: "Contrôle minutieux à l'arrivée et au départ pour protéger votre bien.",
    icon: <ClipboardCheck className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  },
  {
    title: "Assistance voyageurs",
    description: "Intervention rapide en cas de petit souci technique durant le séjour.",
    icon: <Bell className="h-8 w-8 text-primary" />,
    link: "https://wa.me/NUMERO"
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">Nos Services d'Excellence</h2>
          <p className="mt-4 text-lg text-foreground/60">
            Une gestion complète pour votre tranquillité et le confort de vos invités.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <span>Demander un devis</span>
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
