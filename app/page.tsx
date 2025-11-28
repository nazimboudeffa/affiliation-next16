import Image from "next/image";

const affiliates = [
  {
    name: "Nickel",
    image: "/nickel.jpg",
    url: "https://nickel.eu",
    code: "12996443B09",
    hasAffiliation: false,
    description: "Compte sans banque",
    advantages: [
      "L'affiliation est actuellement indisponible",
      "Ouverture en 5 minutes",
      "Sans conditions de revenus"
    ]
  },
  {
    name: "Spliiit",
    image: "/spliiit.jpg",
    url: "https://splii.it/1668232760",
    code: "1668232760",
    hasAffiliation: true,
    description: "Partagez vos abonnements",
    advantages: [
      "1€ offert à chacun",
      "Partagez vos abonnements facilement",
      "Paiements automatiques"
    ]
  },
  {
    name: "pCloud",
    image: "/pcloud.jpg",
    url: "https://partner.pcloud.com/r/151986",
    code: "N/A",
    hasAffiliation: true,
    description: "Stockage Cloud Sécurisé",
    advantages: [
      "Je sais pas encore",
      "Chiffrement de bout en bout",
      "Accès à vie disponible"
    ]
  },
  {
    name: "XTB",
    image: "/xtb.jpg",
    url: "https://www.xtb.com",
    code: "N/A",
    hasAffiliation: false,
    description: "Courtier en ligne",
    advantages: [
      "Je sais pas encore",
      "Prochainement en 2026",
      "Plateforme primée"
    ]
  },
  {
    name: "FDJ",
    image: "/fdj.jpg",
    url: "https://www.enligne.parionssport.fdj.fr/inscription/?campaign=290725&parrain=D6304A28662A5244",
    code: "N/A",
    hasAffiliation: true,
    description: "Française des Jeux",
    advantages: [
      "30€ pour moi et jusqu'à 30€ pour le filleul",
      "Paris sportifs en ligne",
      "Plateforme sécurisée"
    ]
  },
  {
    name: "Omada",
    image: "/omada.jpg",
    url: "https://join.omada.game/fr/friend/Z2FP9Z",
    code: "Z2FP9Z",
    hasAffiliation: true,
    description: "Paris sportifs sans argent réel",
    advantages: [
      "Je sais pas encore",
      "Jeux de pronostics gratuits",
      "Communauté active"
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
            Nos Partenaires
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Des partenaires de confiance qui nous aident à offrir une valeur exceptionnelle
          </p>
        </div>

        {/* Affiliates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {affiliates.map((affiliate, index) => (
            <a
              key={affiliate.name}
              href={affiliate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="aspect-video relative mb-4 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <Image
                    src={affiliate.image}
                    alt={affiliate.name}
                    fill
                    className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">
                  {affiliate.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                  {affiliate.description}
                </p>
                
                {/* Advantages List */}
                <ul className="space-y-2 mb-4">
                  {affiliate.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                      <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{advantage}</span>
                    </li>
                  ))}
                </ul>
                
{!affiliate.hasAffiliation && (
                  <div className="inline-flex items-center gap-2 bg-slate-50 dark:bg-slate-900/30 text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span>Site web</span>
                  </div>
                )}
                {affiliate.hasAffiliation && affiliate.code === "N/A" && (
                  <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span>Lien d&apos;affiliation</span>
                  </div>
                )}
                {affiliate.hasAffiliation && affiliate.code !== "N/A" && (
                  <div className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1.5 rounded-full text-sm font-medium">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-mono">{affiliate.code}</span>
                  </div>
                )}
              </div>              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-block bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Intéressé par un partenariat ?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-lg">
              Rejoignez notre réseau croissant de partenaires de confiance et créons de la valeur ensemble
            </p>
            <a
              href="https://codewithadu.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Aller sur codewithadu.de
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
