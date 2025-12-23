import Link from "next/link";

export default function ReferenzenPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Referenzen & Kundenstimmen</h1>
          <p className="text-xl">Was unsere Kunden über uns sagen</p>
        </div>
      </section>

      {/* Kundenstimmen */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Kundenstimmen</h2>
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg border-l-4 border-accent shadow-md"
              >
                <p className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="text-gray-600">
                  <strong className="text-gray-900">{testimonial.author}</strong>
                  <br />
                  {testimonial.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geschäftskunden */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-4">Unsere Geschäftskunden</h2>
          <p className="text-lg text-center text-gray-600 mb-12">
            Seit Jahren vertrauen uns renommierte Unternehmen und Organisationen:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-lg p-6 flex items-center justify-center h-32"
              >
                <span className="text-sm font-semibold text-gray-600 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Auszeichnungen */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Auszeichnungen & Zertifikate</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center bg-gray-50 p-8 rounded-lg">
                <div className="text-5xl mb-4">{award.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projektbeispiele */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Ausgewählte Projekte</h2>
          <div className="space-y-6">
            {projectExamples.map((project, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border-l-4 border-primary shadow-md"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">{project.title}</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Kunde:</strong> {project.client}
                  </p>
                  <p>
                    <strong>Umfang:</strong> {project.scope}
                  </p>
                  <p>
                    <strong>Dauer:</strong> {project.duration}
                  </p>
                  <p>
                    <strong>Besonderheit:</strong> {project.special}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Werden Sie unser nächster zufriedener Kunde</h2>
          <p className="text-xl mb-8">Fordern Sie jetzt Ihr kostenloses Angebot an!</p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}

const testimonials = [
  {
    text: "Nach dem Tod meiner Mutter musste die Wohnung aufgelöst werden. Das Team von 'Der Ruppi macht's' hat diese schwere Aufgabe mit großem Respekt und Einfühlungsvermögen erledigt. Alles wurde sorgfältig sortiert und die Wohnung besenrein übergeben. Vielen Dank für die professionelle Hilfe in dieser schwierigen Zeit.",
    author: "Familie Schmidt",
    location: "Haushaltsauflösung in München",
  },
  {
    text: "Unser Keller war über Jahre hinweg zur Rumpelkammer geworden. In nur einem Tag hat das Team den gesamten Keller entrümpelt und sogar noch gereinigt. Die Arbeit war professionell, schnell und zu einem fairen Preis. Absolut empfehlenswert!",
    author: "Markus Weber",
    location: "Kellerentrümpelung in Augsburg",
  },
  {
    text: "Als Hausverwaltung arbeiten wir regelmäßig mit 'Der Ruppi macht's' zusammen. Die Termine werden zuverlässig eingehalten, die Arbeit ist erstklassig und die Preise sind fair kalkuliert. Ein Partner, auf den man sich verlassen kann.",
    author: "Immobilienverwaltung Maier GmbH",
    location: "Gewerblicher Kunde seit 2015",
  },
  {
    text: "Die Auflösung unserer alten Büroräume wurde perfekt organisiert. Auch die datenschutzkonforme Vernichtung von Dokumenten wurde professionell durchgeführt. Pünktlich, sauber und zu einem transparenten Festpreis.",
    author: "Steuerberatung Dr. Huber & Partner",
    location: "Büroauflösung in München",
  },
  {
    text: "Wir mussten kurzfristig eine Wohnung räumen lassen. Trotz des knappen Zeitplans konnte das Team innerhalb von zwei Tagen alles erledigen. Super Service und sehr freundliche Mitarbeiter. Gerne wieder!",
    author: "Andrea Zimmermann",
    location: "Wohnungsauflösung in Landshut",
  },
  {
    text: "Die Entrümpelung wurde schnell, sauber und zu einem sehr fairen Preis durchgeführt. Besonders beeindruckt hat uns die freundliche und respektvolle Art des Teams. Absolute Empfehlung!",
    author: "Thomas Becker",
    location: "Dachbodenentrümpelung in Ingolstadt",
  },
];

const clients = [
  "Hausverwaltung Müller",
  "Stadtwerke Regional",
  "Pflegeheim Sonnenschein",
  "Sparkasse Oberbayern",
  "Wohnbau AG",
  "Hotel Bavaria",
];

const awards = [
  {
    icon: "🏆",
    title: "Geprüfter Entsorgungsfachbetrieb",
    description: "Zertifiziert nach § 56 KrWG",
  },
  {
    icon: "⭐",
    title: "Top-Bewertungen",
    description: "4,9 von 5 Sternen bei über 200 Bewertungen",
  },
  {
    icon: "✓",
    title: "IHK-Mitglied",
    description: "Mitglied der Industrie- und Handelskammer",
  },
  {
    icon: "♻️",
    title: "Umwelt-Partner",
    description: "Zertifiziert für umweltgerechte Entsorgung",
  },
];

const projectExamples = [
  {
    title: "Großprojekt: Komplette Betriebsauflösung",
    client: "Produktionsbetrieb, 800 qm",
    scope: "Entrümpelung einer kompletten Produktionshalle inkl. Maschinen, Büroausstattung und Lagerbeständen",
    duration: "2 Wochen",
    special: "Koordination mit mehreren Entsorgungsfirmen, fachgerechte Demontage von Industrieanlagen",
  },
  {
    title: "Mehrfamilienhaus - 6 Wohneinheiten",
    client: "Immobilienverwaltung",
    scope: "Komplette Räumung eines sanierungsbedürftigen Mehrfamilienhauses",
    duration: "1 Woche",
    special: "Enge Zeitvorgaben wegen anstehender Sanierung, koordinierte Abwicklung aller 6 Einheiten",
  },
  {
    title: "Messie-Wohnung mit Geruchsbeseitigung",
    client: "Privatperson über Sozialamt",
    scope: "Entrümpelung einer stark vermüllten Wohnung inkl. Spezialreinigung und Geruchsneutralisation",
    duration: "3 Tage",
    special: "Sensible Zusammenarbeit mit Sozialarbeitern, diskrete Durchführung",
  },
];
