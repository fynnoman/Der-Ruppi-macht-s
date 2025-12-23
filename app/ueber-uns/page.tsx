import Link from "next/link";

export default function UeberUnsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: "url('/79D3E07A-EEA6-4008-BB59-A3623353F806_4_5005_c.jpeg')",
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Scrollable Content */}
      <div className="relative z-10">
        {/* Page Header */}
        <section className="text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Über uns</h1>
            <p className="text-xl drop-shadow-lg">Ihr zuverlässiger Partner seit über 15 Jahren</p>
          </div>
        </section>

        {/* Geschichte */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
              <h2 className="heading-secondary text-center">Unsere Geschichte</h2>
              <p className="text-xl leading-relaxed text-gray-700 mb-6 text-center">
                Seit der Gründung im Jahr 2008 steht &quot;Der Ruppi macht&apos;s&quot; für professionelle 
                Entrümpelung mit Herz und Verstand. Was als kleines Familienunternehmen begann, 
                hat sich zu einem der führenden Entrümplungsunternehmen der Region entwickelt.
              </p>
              <p className="text-lg text-gray-600 text-center">
                Unser Firmengründer Ruprecht &quot;Ruppi&quot; Müller erkannte früh, dass Entrümpelung mehr 
                ist als nur das Wegräumen von Gegenständen. Es geht um Vertrauen, Respekt und 
                professionelle Abwicklung in oft schwierigen Lebenssituationen. Diese Philosophie 
                prägt unser Unternehmen bis heute.
              </p>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
              <h2 className="heading-secondary text-center mb-8">Unser Team</h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                Erfahrene Profis mit Herz für Ihre Anliegen
              </p>
              <div className="bg-gradient-to-br from-gray-300 to-gray-400 h-96 md:h-[500px] rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-semibold">Team-Bild hier einfügen</span>
              </div>
            </div>
          </div>
        </section>

        {/* Werte */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
              <h2 className="heading-secondary text-center mb-12">Unsere Werte</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="bg-white/60 p-8 rounded-lg border-t-4 border-accent shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zahlen & Fakten */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
              <h2 className="heading-secondary text-center mb-12">Zahlen & Fakten</h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {facts.map((fact, index) => (
                  <div key={index} className="text-center">
                    <div className="text-6xl font-bold text-accent mb-2">{fact.number}</div>
                    <div className="text-lg text-gray-600">{fact.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Versprechen */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl">
              <h2 className="heading-secondary text-center mb-8">Unser Versprechen an Sie</h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                Wenn Sie &quot;Der Ruppi macht&apos;s&quot; beauftragen, erhalten Sie einen zuverlässigen Partner, 
                der Ihr Anliegen ernst nimmt und professionell umsetzt.
              </p>
              <ul className="space-y-4">
                {promises.map((promise, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-accent font-bold text-2xl mr-4">✓</span>
                    <span className="text-lg text-gray-700 pt-1">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <div className="bg-primary/80 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl text-white">
              <h2 className="text-4xl font-bold mb-4">Lernen Sie uns kennen</h2>
              <p className="text-xl mb-8">Vereinbaren Sie einen unverbindlichen Besichtigungstermin!</p>
              <Link href="/kontakt" className="btn-primary bg-white text-primary hover:bg-gray-100">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const values = [
  {
    title: "Zuverlässigkeit",
    description:
      "Termine werden pünktlich eingehalten, Zusagen verbindlich erfüllt. Darauf können Sie sich verlassen.",
  },
  {
    title: "Professionalität",
    description:
      "Geschulte Mitarbeiter, moderne Ausrüstung und bewährte Arbeitsmethoden garantieren erstklassige Ergebnisse.",
  },
  {
    title: "Diskretion",
    description:
      "Wir behandeln jeden Auftrag vertraulich und gehen respektvoll mit persönlichen Situationen um.",
  },
  {
    title: "Fairness",
    description:
      "Transparente Preise ohne versteckte Kosten. Sie wissen vorher genau, was auf Sie zukommt.",
  },
  {
    title: "Umweltbewusstsein",
    description:
      "Fachgerechte Entsorgung und Recycling sind für uns selbstverständlich. Wir denken an morgen.",
  },
  {
    title: "Flexibilität",
    description:
      "Auch bei kurzfristigen oder ungewöhnlichen Anfragen finden wir eine Lösung. Wir sind für Sie da.",
  },
];

const facts = [
  { number: "15+", label: "Jahre Erfahrung" },
  { number: "3.500+", label: "Erfolgreiche Projekte" },
  { number: "12", label: "Festangestellte Mitarbeiter" },
  { number: "100%", label: "Kundenzufriedenheit" },
];

const promises = [
  "Kostenlose und unverbindliche Besichtigung vor Ort",
  "Transparentes Festpreisangebot ohne versteckte Kosten",
  "Pünktliche und zügige Durchführung",
  "Respektvoller Umgang mit Ihrem Eigentum",
  "Besenreine Übergabe der Räumlichkeiten",
  "Alle erforderlichen Entsorgungsnachweise",
  "Flexible Zahlungsmöglichkeiten",
];
