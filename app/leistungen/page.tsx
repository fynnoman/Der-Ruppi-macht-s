import Link from "next/link";

export default function LeistungenPage() {
  return (
    <>
      {/* Page Header */}
      <section 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/859364A7-2623-4E59-A759-3C5C8FFF4DB6_1_201_a.jpeg')"
        }}
      >
        <div className="container-custom text-center relative z-10">
          <h1 className="text-5xl font-bold mb-4">Unsere Leistungen</h1>
          <p className="text-xl">Professionelle Entrümpelung für jeden Bedarf</p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={index}
          className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}>
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="heading-secondary">{service.title}</h2>
                <p className="text-lg text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent font-bold text-xl mr-3">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div 
                  className="h-80 rounded-lg flex items-center justify-center text-white text-xl font-semibold bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${service.image}')`
                  }}
                >
                  <span className="bg-black/50 px-6 py-3 rounded-lg">{service.imageText}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4">Benötigen Sie eine dieser Leistungen?</h2>
          <p className="text-xl mb-8">Kontaktieren Sie uns für ein unverbindliches Angebot!</p>
          <Link href="/kontakt" className="btn-primary bg-white text-primary hover:bg-gray-100">
            Jetzt anfragen
          </Link>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    title: "Haushaltsauflösung",
    description:
      "Eine Haushaltsauflösung ist oft mit emotionalen Situationen verbunden. Wir gehen sensibel und respektvoll mit Ihrem Eigentum um und sorgen für eine schnelle, ordentliche Abwicklung.",
    features: [
      "Komplette Wohnungs- und Hausauflösungen",
      "Sortierung von Wertgegenständen",
      "Fachgerechte Entsorgung",
      "Besenreine Übergabe",
      "Flexible Terminvereinbarung",
    ],
    imageText: "Haushaltsauflösung",
    image: "/7F09CAC5-72FE-47AF-8714-C367C6673AEE.jpeg",
  },
  {
    title: "Keller- und Dachbodenentrümpelung",
    description:
      "Im Laufe der Jahre sammelt sich oft viel Ungenutztes an. Wir entrümpeln Ihren Keller oder Dachboden schnell und gründlich – Sie gewinnen wertvollen Platz zurück.",
    features: [
      "Entrümpelung von Kellern und Dachböden",
      "Entsorgung von Sperrmüll",
      "Auch bei schwer zugänglichen Räumen",
      "Auf Wunsch mit Endreinigung",
      "Kurzfristige Termine möglich",
    ],
    imageText: "Kellerentrümpelung",
    image: "/B962E96A-B977-431A-828D-F61A4DFEB4EE.jpeg",
  },
  {
    title: "Gewerbe- und Büroauflösung",
    description:
      "Betriebsauflösungen, Umzüge oder Renovierungen – wir entrümpeln Ihre Gewerbeflächen professionell und termingerecht. Auch außerhalb der Geschäftszeiten.",
    features: [
      "Büro- und Gewerbeauflösungen",
      "Lager- und Hallenräumungen",
      "Entsorgung von Büromöbeln und Technik",
      "Datenschutzkonforme Vernichtung",
      "Flexible Arbeitszeiten nach Absprache",
    ],
    imageText: "Gewerbeentrümpelung",
    image: "/C8C2A5C7-D0B5-4AAF-A4B2-8CB2983160E0.jpeg",
  },
  {
    title: "Wohnungsräumung in besonderen Situationen",
    description:
      "Wir helfen diskret und ohne Vorurteile bei der Räumung stark vermüllter Wohnungen. Unser erfahrenes Team geht sensibel und professionell mit dieser besonderen Situation um.",
    features: [
      "Diskrete und respektvolle Arbeitsweise",
      "Erfahrung mit besonderen Situationen",
      "Gründliche Endreinigung",
      "Geruchsneutralisation",
      "Komplett vertraulich",
    ],
    imageText: "Besondere Wohnungsräumungen",
    image: "/PHOTO-2025-12-17-18-27-58.jpg",
  },
  {
    title: "Fachgerechte Entsorgung",
    description:
      "Nachhaltigkeit ist uns wichtig. Wir trennen Wertstoffe, recyceln wo möglich und entsorgen alles fachgerecht gemäß den gesetzlichen Vorschriften.",
    features: [
      "Umweltgerechte Entsorgung",
      "Recycling von Wertstoffen",
      "Sperrmüllentsorgung",
      "Elektroschrott-Entsorgung",
      "Alle Entsorgungsnachweise",
    ],
    imageText: "Fachgerechte Entsorgung",
    image: "/F182D420-A3F2-473D-8D42-D22D08657AD2.jpeg",
  },
];
