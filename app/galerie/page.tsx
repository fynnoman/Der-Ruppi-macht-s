import Link from "next/link";

export default function GaleriePage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Unsere Arbeiten</h1>
          <p className="text-xl">Vorher-Nachher-Beispiele unserer Entrümpelungsprojekte</p>
        </div>
      </section>

      {/* Vorher-Nachher Projekte */}
      {projects.map((project, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container-custom">
            <h2 className="heading-tertiary text-center mb-12">{project.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-center mb-4">Vorher</h3>
                <div className="bg-gradient-to-br from-gray-400 to-gray-500 h-96 rounded-lg flex items-center justify-center text-white text-xl font-semibold">
                  {project.before}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-center mb-4">Nachher</h3>
                <div className="bg-gradient-to-br from-gray-600 to-gray-700 h-96 rounded-lg flex items-center justify-center text-white text-xl font-semibold">
                  {project.after}
                </div>
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-700">
                <div>
                  <strong>Projektdauer:</strong> {project.duration}
                </div>
                <div>
                  <strong>Umfang:</strong> {project.scope}
                </div>
                <div>
                  <strong>Besonderheit:</strong> {project.special}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Ihr Projekt wartet auf uns</h2>
          <p className="text-xl mb-8">Lassen Sie uns gemeinsam Ordnung schaffen!</p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Jetzt Angebot anfordern
          </Link>
        </div>
      </section>
    </>
  );
}

const projects = [
  {
    title: "Haushaltsauflösung - Mehrfamilienhaus",
    before: "Vollgestellte Wohnung\n3-Zimmer, 85 qm",
    after: "Besenrein übergeben\nKomplett geräumt",
    duration: "2 Tage",
    scope: "Komplette Wohnungsauflösung mit Entsorgung aller Möbel und Haushaltsgegenstände",
    special: "Enge Treppenhäuser und 3. Etage ohne Aufzug",
  },
  {
    title: "Kellerentrümpelung - Einfamilienhaus",
    before: "Vollgeräumter Keller\nÜber 20 Jahre Ansammlung",
    after: "Sauberer Kellerraum\nWieder voll nutzbar",
    duration: "1 Tag",
    scope: "Entrümpelung von Keller und Gartenhaus, ca. 60 qm",
    special: "Sortierung und Entsorgung von Sondermüll und Elektroschrott",
  },
  {
    title: "Gewerbeauflösung - Büroräume",
    before: "Büroauflösung\n150 qm Gewerbefläche",
    after: "Leere Räume\nBezugsfertig",
    duration: "3 Tage",
    scope: "Komplette Büroauflösung inkl. Möbel, IT-Equipment und Archivmaterial",
    special: "Datenschutzkonforme Vernichtung von Dokumenten",
  },
  {
    title: "Dachbodenentrümpelung",
    before: "Vollgestellter Dachboden\nKaum begehbar",
    after: "Freier Dachboden\nViel Stauraum gewonnen",
    duration: "1 Tag",
    scope: "Komplette Dachbodenentrümpelung mit Endreinigung",
    special: "Schwer zugänglicher Dachboden mit niedrigen Decken",
  },
];
