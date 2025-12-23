"use client";

import { useState } from "react";

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    anrede: "",
    firma: "",
    vorname: "",
    nachname: "",
    email: "",
    telefon: "",
    strasse: "",
    plz: "",
    ort: "",
    leistung: "",
    flaeche: "",
    termin: "",
    nachricht: "",
    datenschutz: false,
  });

  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.datenschutz) {
      setFormStatus({
        type: "error",
        message: "Bitte akzeptieren Sie die Datenschutzerklärung.",
      });
      return;
    }

    // Success message (in real app, would send to server)
    setFormStatus({
      type: "success",
      message:
        "Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.",
    });

    // Reset form
    setFormData({
      anrede: "",
      firma: "",
      vorname: "",
      nachname: "",
      email: "",
      telefon: "",
      strasse: "",
      plz: "",
      ort: "",
      leistung: "",
      flaeche: "",
      termin: "",
      nachricht: "",
      datenschutz: false,
    });

    setTimeout(() => {
      setFormStatus({ type: null, message: "" });
    }, 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-primary text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl">Wir freuen uns auf Ihre Anfrage</p>
        </div>
      </section>

      {/* Kontaktinfo */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-5xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{info.title}</h3>
                <p className="font-semibold text-lg mb-2">{info.main}</p>
                <p className="text-sm text-gray-600">{info.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontaktformular */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="heading-secondary">Anfrageformular</h2>
            <p className="text-lg text-gray-600">
              Füllen Sie das Formular aus und wir melden uns schnellstmöglich bei Ihnen zurück.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Anrede & Firma */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Anrede *
                </label>
                <select
                  name="anrede"
                  value={formData.anrede}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                >
                  <option value="">Bitte wählen</option>
                  <option value="herr">Herr</option>
                  <option value="frau">Frau</option>
                  <option value="divers">Divers</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Firma (optional)
                </label>
                <input
                  type="text"
                  name="firma"
                  value={formData.firma}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Vorname *
                </label>
                <input
                  type="text"
                  name="vorname"
                  value={formData.vorname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Nachname *
                </label>
                <input
                  type="text"
                  name="nachname"
                  value={formData.nachname}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Kontakt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  name="telefon"
                  value={formData.telefon}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Adresse */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Straße & Hausnummer *
              </label>
              <input
                type="text"
                name="strasse"
                value={formData.strasse}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">PLZ *</label>
                <input
                  type="text"
                  name="plz"
                  value={formData.plz}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">Ort *</label>
                <input
                  type="text"
                  name="ort"
                  value={formData.ort}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Leistung */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Gewünschte Leistung *
              </label>
              <select
                name="leistung"
                value={formData.leistung}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              >
                <option value="">Bitte wählen</option>
                <option value="haushaltsaufloesung">Haushaltsauflösung</option>
                <option value="kellerentruempelung">Kellerentrümpelung</option>
                <option value="dachbodenentruempelung">Dachbodenentrümpelung</option>
                <option value="gewerbeaufloesung">Gewerbeauflösung</option>
                <option value="messie">Messie-Wohnung</option>
                <option value="sonstiges">Sonstiges</option>
              </select>
            </div>

            {/* Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Ungefähre Fläche in qm
                </label>
                <input
                  type="number"
                  name="flaeche"
                  value={formData.flaeche}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700 mb-2">
                  Gewünschter Termin
                </label>
                <input
                  type="date"
                  name="termin"
                  value={formData.termin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Nachricht */}
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Ihre Nachricht *
              </label>
              <textarea
                name="nachricht"
                value={formData.nachricht}
                onChange={handleChange}
                required
                rows={6}
                placeholder="Bitte beschreiben Sie Ihr Anliegen so detailliert wie möglich..."
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* Datenschutz */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="datenschutz"
                checked={formData.datenschutz}
                onChange={handleChange}
                required
                className="mt-1 w-5 h-5"
              />
              <label className="text-gray-700">
                Ich habe die <a href="#" className="text-primary underline">Datenschutzerklärung</a> zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden. *
              </label>
            </div>

            {/* Submit */}
            <div className="text-center">
              <button type="submit" className="btn-primary">
                Anfrage senden
              </button>
              <p className="text-sm text-gray-600 mt-4">* Pflichtfelder</p>
            </div>

            {/* Status Message */}
            {formStatus.type && (
              <div
                className={`p-4 rounded-lg ${
                  formStatus.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Öffnungszeiten */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">
            Öffnungszeiten & Erreichbarkeit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6">Bürozeiten</h3>
              <table className="w-full">
                <tbody className="space-y-2">
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Montag - Freitag:</td>
                    <td className="py-3 text-right font-semibold">7:00 - 18:00 Uhr</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-3">Samstag:</td>
                    <td className="py-3 text-right font-semibold">8:00 - 14:00 Uhr</td>
                  </tr>
                  <tr>
                    <td className="py-3">Sonntag:</td>
                    <td className="py-3 text-right">Geschlossen</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Arbeitszeiten vor Ort
              </h3>
              <p className="mb-4">
                Unsere Entrümpelungen führen wir flexibel nach Ihren Wünschen durch:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Wochentags von 7:00 - 20:00 Uhr
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Samstags nach Vereinbarung
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Auch außerhalb der Geschäftszeiten möglich
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Notdienst für dringende Fälle
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Einzugsgebiet */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-secondary text-center mb-8">Unser Einzugsgebiet</h2>
          <p className="text-lg text-center text-gray-700 mb-8">
            Wir sind im gesamten Saarland und angrenzenden Regionen für Sie im Einsatz:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ul className="space-y-2">
              {areas1.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {areas2.map((area, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent font-bold mr-3">✓</span>
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent/10 p-6 rounded-lg text-center">
            <p className="text-lg">
              <strong>Ihr Ort ist nicht dabei?</strong> Kein Problem! Kontaktieren Sie uns – 
              für größere Projekte kommen wir auch gerne weiter.
            </p>
          </div>
        </div>
      </section>

      {/* Anfahrt */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-secondary text-center mb-12">So finden Sie uns</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">Anfahrt mit dem PKW</h3>
              <p className="text-gray-700 mb-6">
                Unser Büro befindet sich in der Oberstraße 41 in Saarbrücken. 
                Parkplätze sind in der Nähe vorhanden. Nutzen Sie gerne unser 
                Kontaktformular oder rufen Sie uns an, wenn Sie Fragen zur Anfahrt haben.
              </p>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Öffentliche Verkehrsmittel
              </h3>
              <p className="text-gray-700">
                <strong>Saarbahn:</strong> Verschiedene Linien mit Haltestellen in der Nähe
                <br />
                <strong>Bus:</strong> Mehrere Buslinien halten in unmittelbarer Umgebung
                <br />
                <strong>Hauptbahnhof:</strong> Ca. 10 Minuten mit öffentlichen Verkehrsmitteln
              </p>
            </div>
            <div className="h-96 rounded-lg overflow-hidden shadow-lg">
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
    </>
  );
}

const contactInfo = [
  {
    icon: "📞",
    title: "Telefon",
    main: "0160 3474685",
    sub: "Mo-Fr: 7:00 - 18:00 Uhr | Sa: 8:00 - 14:00 Uhr",
  },
  {
    icon: "📧",
    title: "E-Mail",
    main: "info@ruppi-machts.de",
    sub: "Wir antworten innerhalb von 24 Stunden",
  },
  {
    icon: "📍",
    title: "Adresse",
    main: "Oberstraße 41",
    sub: "66125 Saarbrücken, Deutschland",
  },
];

const areas1 = [
  "Saarbrücken Stadt und Regionalverband",
  "Saarlouis",
  "Völklingen",
  "Neunkirchen",
  "Homburg",
];

const areas2 = [
  "St. Wendel",
  "Merzig",
  "St. Ingbert",
  "Dillingen",
  "Und weitere Orte auf Anfrage",
];
