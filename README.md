# Der Ruppi macht's - Entrümplungsunternehmen Website

Eine moderne, professionelle Website für das Entrümplungsunternehmen "Der Ruppi macht's", gebaut mit Next.js und React.

## Projektbeschreibung

Diese Website präsentiert die Dienstleistungen eines deutschen Entrümplungsunternehmens in einem modernen, professionellen Design. Die Website ist vollständig auf Deutsch und bietet:

- **Mehrere Seiten** mit umfangreichen Informationen
- **Große Bildbereiche** für visuelle Präsentation
- **Modernes, responsives Design** mit Tailwind CSS
- **React Components** für Wiederverwendbarkeit
- **Next.js App Router** für schnelle Navigation
- **TypeScript** für Type-Safety

## Seitenstruktur

Die Website besteht aus folgenden Seiten:

1. **/** - Startseite mit Überblick über das Unternehmen
2. **/leistungen** - Detaillierte Beschreibung aller Dienstleistungen
3. **/ueber-uns** - Informationen über das Unternehmen, Werte und Geschichte
4. **/galerie** - Vorher-Nachher-Bilder von Projekten
5. **/referenzen** - Kundenstimmen und Referenzprojekte
6. **/kontakt** - Kontaktformular und Kontaktinformationen

## Technologien

- **Next.js 16** - React Framework mit App Router
- **React 19** - UI Library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS Framework
- **Node.js** - JavaScript Runtime

## Installation & Start

### Voraussetzungen
- Node.js 18+ installiert

### Projekt starten

1. Dependencies installieren:
```bash
npm install
```

2. Development Server starten:
```bash
npm run dev
```

3. Öffnen Sie [http://localhost:3000](http://localhost:3000) in Ihrem Browser

## Projektstruktur

```
ruppimachts/
├── index.html              # Startseite
├── leistungen.html        # Leistungsübersicht
├── ueber-uns.html         # Über uns
├── galerie.html           # Bildergalerie
├── referenzen.html        # Referenzen & Kundenstimmen
├── kontakt.html           # Kontaktseite
├── css/
│   └── styles.css         # Haupt-Stylesheet
├── js/
│   └── script.js          # JavaScript-Funktionen
└── README.md              # Diese Datei
```

## Features

### Design
- Klassisches, professionelles deutsches Business-Design
- Grüne Farbpalette (passend zu Entrümpelung/Nachhaltigkeit)
- Große Bildbereiche für visuelle Präsentation
- Klare Typografie und Struktur
- Responsive Design für Mobile, Tablet und Desktop

### Funktionalität
- Sticky Navigation für einfache Orientierung
- Kontaktformular mit Validierung
- Smooth Scrolling
- Responsive Menü
- Aktive Seitenmarkierung in Navigation

### Inhalte
- Detaillierte Leistungsbeschreibungen
- Firmengeschichte und Werte
- Kundenstimmen und Referenzen
- Vorher-Nachher-Galerie
- Umfassendes Kontaktformular

## Anpassungen

### Farben ändern
Die Hauptfarben sind in CSS-Variablen definiert (`css/styles.css`):

```css
:root {
    --primary-color: #1a4d2e;      /* Hauptfarbe (Dunkelgrün) */
    --secondary-color: #2d6a3f;    /* Sekundärfarbe */
    --accent-color: #c49a3c;       /* Akzentfarbe (Gold) */
    --text-dark: #2c2c2c;          /* Dunkler Text */
    --text-light: #666666;         /* Heller Text */
}
```

### Bilder hinzufügen
Aktuell nutzt die Website Platzhalter für Bilder. Um eigene Bilder zu verwenden:

1. Erstellen Sie einen `images/` Ordner
2. Fügen Sie Ihre Bilder hinzu
3. Ersetzen Sie die `.image-placeholder` Divs in den HTML-Dateien durch `<img>`-Tags

Beispiel:
```html
<!-- Vorher -->
<div class="image-placeholder-small">
    <p>Placeholder</p>
</div>

<!-- Nachher -->
<img src="images/mein-bild.jpg" alt="Beschreibung">
```

### Kontaktinformationen
Aktualisieren Sie die Kontaktdaten in allen Dateien:
- Telefonnummer: 0123 / 456 789 0
- E-Mail: info@ruppi-machts.de
- Adresse: Musterstraße 123, 80333 München

### Formular-Backend
Das Kontaktformular benötigt ein Backend zur Verarbeitung. Optionen:

1. **PHP-Backend** (contact.php)
2. **Node.js/Express** Server
3. **Formular-Dienste** wie Formspree, Basin, etc.
4. **E-Mail-JavaScript-Bibliotheken** wie EmailJS

## Browser-Kompatibilität

- Chrome (neueste Version)
- Firefox (neueste Version)
- Safari (neueste Version)
- Edge (neueste Version)
- Mobile Browser (iOS Safari, Chrome Mobile)

## SEO-Optimierung

Für bessere Suchmaschinen-Rankings sollten Sie hinzufügen:
- Meta-Beschreibungen in jeder Seite
- Open Graph Tags für Social Media
- Strukturierte Daten (Schema.org)
- Sitemap.xml
- robots.txt

## Lizenz

Dieses Projekt wurde für "Der Ruppi macht's" erstellt.

## Support

Bei Fragen oder Problemen öffnen Sie ein Issue oder kontaktieren Sie den Entwickler.

---

Erstellt mit ❤️ für Der Ruppi macht's
