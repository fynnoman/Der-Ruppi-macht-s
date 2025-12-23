import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Logo & Description */}
          <div>
            <h4 className="text-2xl font-bold mb-4">Der Ruppi macht&apos;s</h4>
            <p className="text-gray-300 leading-relaxed">
              Ihr Partner für professionelle Entrümpelung im Saarland.
            </p>
          </div>

          {/* Column 2 - Produkt/Leistungen */}
          <div>
            <h4 className="text-xl font-bold mb-4">Leistungen</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen" className="text-gray-300 hover:text-white transition-colors">
                  Alle Leistungen
                </Link>
              </li>
              <li>
                <Link href="/leistungen#haushaltsaufloesung" className="text-gray-300 hover:text-white transition-colors">
                  Haushaltsauflösung
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-gray-300 hover:text-white transition-colors">
                  Galerie
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Unternehmen */}
          <div>
            <h4 className="text-xl font-bold mb-4">Unternehmen</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ueber-uns" className="text-gray-300 hover:text-white transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Kontakt */}
          <div>
            <h4 className="text-xl font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-300">
              <li>+49 (123) 456 789</li>
              <li>info@ruppi-machts.de</li>
              <li className="pt-2">
                Musterstraße 123<br />
                12345 Musterstadt, Deutschland
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom - Copyright & Legal */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-300">
            <p>© 2025 Der Ruppi macht&apos;s. Alle Rechte vorbehalten.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-white transition-colors">
                Impressum
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Datenschutz
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                AGB
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Cookie-Einstellungen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
