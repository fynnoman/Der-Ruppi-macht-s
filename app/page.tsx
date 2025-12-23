"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [expandedFeatures, setExpandedFeatures] = useState<number[]>([]);

  const toggleFlip = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleFeature = (index: number) => {
    setExpandedFeatures(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative text-white py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/127919B5-C4B6-4576-8C61-4A74E9C60018.png')"
        }}
      >
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Professionelle Entrümpelung mit System
            </h1>
            <p className="text-2xl mb-8">
              Schnell • Zuverlässig • Fair
            </p>
            <Link href="/kontakt" className="btn-primary text-lg">
              Jetzt anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary">Willkommen bei Der Ruppi macht's</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              Seit über 15 Jahren sind wir Ihr zuverlässiger Partner für professionelle Entrümpelung 
              in der gesamten Region. Ob Haushaltsauflösung, Kellerentrümpelung oder Gewerberäume – 
              wir erledigen jeden Auftrag gewissenhaft, schnell und zu fairen Preisen.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-4">Unsere Leistungen im Überblick</h2>
          <p className="text-center text-gray-600 mb-8 text-lg">
            💡 Klicken Sie auf die Karten, um die Bilder zu sehen
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="flip-card h-80 cursor-pointer"
                onClick={() => toggleFlip(index)}
              >
                <div className={`flip-card-inner ${flippedCards.includes(index) ? 'flipped' : ''}`}>
                  {/* Vorderseite - Text */}
                  <div className="flip-card-front absolute inset-0 bg-primary p-8 rounded-lg flex flex-col justify-center items-center shadow-lg">
                    <h3 className="text-xl font-bold text-white mb-3 text-center">
                      {service.title}
                    </h3>
                    <p className="text-white text-center">{service.description}</p>
                  </div>
                  
                  {/* Rückseite - Bild */}
                  <div 
                    className="flip-card-back absolute inset-0 rounded-lg bg-cover bg-center shadow-lg"
                    style={{
                      backgroundImage: `url('${service.image}')`
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                      <p className="text-white text-sm drop-shadow-lg">Klicken zum Zurückdrehen</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/leistungen" className="btn-secondary">
              Alle Leistungen ansehen
            </Link>
          </div>
        </div>
        <style jsx>{`
          .flip-card {
            perspective: 1000px;
            position: relative;
          }
          
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .flip-card-inner.flipped {
            transform: rotateY(180deg);
          }
          
          .flip-card-front,
          .flip-card-back {
            backface-visibility: hidden;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}</style>
      </section>

      {/* Image Section - Vorher/Nachher */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Vorher-Nachher: Wir schaffen Ordnung
            </h3>
            <p className="text-xl text-gray-700">
              Sehen Sie selbst, wie wir aus vollgestellten Räumen wieder nutzbare Flächen machen
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/CE744080-E78B-4B0F-B770-98ABB7820BE2.png"
                alt="Vorher-Nachher Vergleich"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Warum Der Ruppi macht's?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 border-l-4 border-accent shadow-md rounded-lg"
              >
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                
                {/* Ausklappbarer Bereich */}
                {expandedFeatures.includes(index) && (
                  <div className="mt-4 pt-4 border-t border-gray-200 text-gray-600 text-sm">
                    {feature.details}
                  </div>
                )}
                
                {/* Mehr lesen Button */}
                <button
                  onClick={() => toggleFeature(index)}
                  className="mt-3 text-accent font-semibold hover:text-accent/80 transition-colors text-sm flex items-center gap-1"
                >
                  {expandedFeatures.includes(index) ? '▲ Weniger anzeigen' : '▼ Mehr lesen'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/61493F56-304C-4382-9AB7-E8FFC38A6BA3.jpeg"
                alt="Unser Entrümpelungsservice"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Standort & Anfahrt Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">Unser Standort</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                📍 Oberstraße 41, 66125 Saarbrücken
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                Besuchen Sie uns in unserem Büro oder kontaktieren Sie uns für eine 
                kostenlose Besichtigung vor Ort. Wir sind im gesamten Saarland für Sie da!
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-3">🚗</span>
                  <div>
                    <strong className="block text-gray-800">Mit dem Auto</strong>
                    <span className="text-gray-600">Parkplätze in der Nähe vorhanden</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-accent text-2xl mr-3">🚊</span>
                  <div>
                    <strong className="block text-gray-800">Öffentliche Verkehrsmittel</strong>
                    <span className="text-gray-600">Saarbahn und Bus in der Nähe</span>
                  </div>
                </div>
              </div>
              <Link href="/kontakt" className="btn-secondary inline-block">
                Zur Kontaktseite
              </Link>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622.5!2d6.9969!3d49.2344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4795b0f3e3e3e3e3%3A0x0!2sOberstra%C3%9Fe%2041%2C%2066125%20Saarbr%C3%BCcken!5e0!3m2!1sde!2sde!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort: Oberstraße 41, 66125 Saarbrücken"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-4 text-primary">Jetzt unverbindlich anfragen</h2>
          <p className="text-xl mb-8 text-gray-700">
            Rufen Sie uns an oder schreiben Sie uns – wir beraten Sie gerne kostenlos!
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <div className="text-center">
              <strong className="block text-lg text-gray-800">Telefon:</strong>
              <span className="text-xl text-gray-700">0160 3474685</span>
            </div>
            <div className="text-center">
              <strong className="block text-lg text-gray-800">E-Mail:</strong>
              <span className="text-xl text-gray-700">info@ruppi-machts.de</span>
            </div>
          </div>
          <Link href="/kontakt" className="btn-primary bg-accent text-white hover:bg-accent/90">
            Kontaktformular
          </Link>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    icon: "🏠",
    title: "Haushaltsauflösung",
    description: "Komplette Auflösung von Wohnungen und Häusern mit fachgerechter Entsorgung.",
    image: "/7F09CAC5-72FE-47AF-8714-C367C6673AEE.jpeg",
  },
  {
    icon: "📦",
    title: "Kellerentrümpelung",
    description: "Entrümpelung von Kellern, Dachböden und Speicherräumen jeder Größe.",
    image: "/B962E96A-B977-431A-828D-F61A4DFEB4EE.jpeg",
  },
  {
    icon: "🏢",
    title: "Gewerbeentrümpelung",
    description: "Professionelle Entrümpelung von Büros, Lagern und Gewerbeflächen.",
    image: "/C8C2A5C7-D0B5-4AAF-A4B2-8CB2983160E0.jpeg",
  },
  {
    icon: "♻️",
    title: "Fachgerechte Entsorgung",
    description: "Umweltgerechte Entsorgung und Recycling aller Materialien.",
    image: "/F182D420-A3F2-473D-8D42-D22D08657AD2.jpeg",
  },
];

const features = [
  {
    title: "✓ Über 15 Jahre Erfahrung",
    description: "Wir wissen, worauf es bei einer professionellen Entrümpelung ankommt.",
    details: "Mit über 3.500 erfolgreich abgeschlossenen Projekten verfügen wir über umfassendes Know-how in allen Bereichen der Entrümpelung. Von kleinen Wohnungen bis zu großen Gewerbeobjekten – wir haben für jede Herausforderung die passende Lösung und arbeiten stets nach neuesten Standards.",
  },
  {
    title: "✓ Faire Preise",
    description: "Transparente Kostenvoranschläge ohne versteckte Gebühren.",
    details: "Bei uns erhalten Sie nach der kostenlosen Besichtigung ein verbindliches Festpreisangebot. Keine Überraschungen, keine Zusatzkosten. Sie wissen von Anfang an genau, was auf Sie zukommt. Wir beraten Sie ehrlich und finden gemeinsam die wirtschaftlichste Lösung für Ihr Projekt.",
  },
  {
    title: "✓ Schnelle Abwicklung",
    description: "Wir sind flexibel und können auch kurzfristige Termine realisieren.",
    details: "Oft können wir bereits innerhalb weniger Tage mit Ihrem Projekt starten. Unser eingespieltes Team arbeitet effizient und zügig, ohne dabei Qualität einzubüßen. Bei Bedarf organisieren wir auch Wochenend- oder Feiertagseinsätze, um Ihre Termine einzuhalten.",
  },
  {
    title: "✓ Umweltbewusst",
    description: "Fachgerechte Entsorgung und Recycling haben bei uns oberste Priorität.",
    details: "Wir trennen konsequent nach Wertstoffen und führen verwertbare Materialien dem Recycling zu. Mit zertifizierten Entsorgungspartnern stellen wir sicher, dass alles fachgerecht entsorgt wird. Sie erhalten selbstverständlich alle erforderlichen Nachweise für die ordnungsgemäße Entsorgung.",
  },
];
