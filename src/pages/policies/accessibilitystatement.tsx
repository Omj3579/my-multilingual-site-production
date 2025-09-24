import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';
import { Eye, Users, CheckCircle, AlertCircle, Mail, Phone } from 'lucide-react';

const AccessibilityStatement = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Eye className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">
            {language === 'en' ? 'Accessibility Statement' : 'Akadálymentességi Nyilatkozat'}
          </h1>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
          <div className="flex items-start">
            <Users className="h-5 w-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-blue-800 mb-1">
                {language === 'en' ? 'Our Commitment to Accessibility' : 'Elkötelezettségünk az akadálymentesség mellett'}
              </h3>
              <p className="text-sm text-blue-700">
                {language === 'en'
                  ? 'Flair-Plastic is committed to ensuring digital accessibility for people with disabilities.'
                  : 'A Flair-Plastic elkötelezett a digitális akadálymentesség biztosítása mellett a fogyatékossággal élő emberek számára.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Accessibility Standards' : 'Akadálymentességi szabványok'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'This website strives to conform to the Web Content Accessibility Guidelines (WCAG) 2.1, Level AA, developed by the World Wide Web Consortium (W3C). We are working to ensure our website is accessible to all users, including those using assistive technologies such as screen readers, voice recognition software, and alternative input devices.'
                : 'Ez a weboldal igyekszik megfelelni a World Wide Web Consortium (W3C) által kifejlesztett Web Content Accessibility Guidelines (WCAG) 2.1, AA szintű irányelveknek. Azon dolgozunk, hogy weboldalunk minden felhasználó számára elérhető legyen, beleértve azokat is, akik segítő technológiákat használnak, mint például képernyőolvasók, hangfelismerő szoftverek és alternatív beviteli eszközök.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'EU Accessibility Directive Compliance' : 'EU akadálymentességi irányelv megfelelőség'}
            </h2>
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h3 className="text-lg font-semibold text-green-800">
                  {language === 'en' ? 'Legal Compliance' : 'Jogi megfelelőség'}
                </h3>
              </div>
              <p className="text-green-700">
                {language === 'en'
                  ? 'This accessibility statement is provided in accordance with EU Directive 2016/2102 on the accessibility of websites and mobile applications of public sector bodies, and the European Accessibility Act (Directive EU 2019/882).'
                  : 'Ez az akadálymentességi nyilatkozat az EU 2016/2102 irányelve értelmében készült a közszféra szervei webhelyeinek és mobilalkalmazásainak akadálymentességéről, valamint az Európai Akadálymentességi Törvény (EU 2019/882 irányelv) szerint.'}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {language === 'en' ? 'WCAG 2.1 AA' : 'WCAG 2.1 AA'}
                </h3>
                <p className="text-sm text-blue-700">
                  {language === 'en'
                    ? 'We follow Web Content Accessibility Guidelines 2.1 at Level AA conformance.'
                    : 'Követjük a Web Content Accessibility Guidelines 2.1 AA szintű megfelelőségi irányelveket.'}
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-2">
                  {language === 'en' ? 'EN 301 549' : 'EN 301 549'}
                </h3>
                <p className="text-sm text-purple-700">
                  {language === 'en'
                    ? 'Compliance with European standard EN 301 549 for ICT accessibility requirements.'
                    : 'Megfelelés az EN 301 549 európai szabvánnyal az IKT akadálymentességi követelményekre.'}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Accessibility Features' : 'Akadálymentességi funkciók'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {language === 'en' ? 'Visual Accessibility' : 'Vizuális akadálymentesség'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {language === 'en' ? 'High contrast colors and readable fonts' : 'Magas kontrasztú színek és olvasható betűtípusok'}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {language === 'en' ? 'Scalable text up to 200% without loss of functionality' : 'Szöveg nagyítható 200%-ig funkcionalitás elvesztése nélkül'}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {language === 'en' ? 'Alternative text for all meaningful images' : 'Alternatív szöveg minden értelmes képhez'}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {language === 'en' ? 'Navigation & Interaction' : 'Navigáció és interakció'}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {language === 'en' ? 'Full keyboard navigation support' : 'Teljes billentyűzetes navigáció támogatás'}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {language === 'en' ? 'Skip links for efficient navigation' : 'Ugró linkek a hatékony navigációhoz'}
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                    {language === 'en' ? 'Consistent navigation structure' : 'Következetes navigációs struktúra'}
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Screen Reader Compatibility' : 'Képernyőolvasó kompatibilitás'}
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'Our website is designed to work with common screen readers and assistive technologies, including:'
                  : 'Weboldalunk úgy van tervezve, hogy működjön a közös képernyőolvasókkal és segítő technológiákkal, beleértve:'}
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-gray-700">
                  <strong>{language === 'en' ? 'Windows:' : 'Windows:'}</strong>
                  <br />• NVDA
                  <br />• JAWS
                  <br />• Windows Narrator
                </div>
                <div className="text-gray-700">
                  <strong>{language === 'en' ? 'macOS:' : 'macOS:'}</strong>
                  <br />• VoiceOver
                  <br />• Dragon NaturallySpeaking
                </div>
                <div className="text-gray-700">
                  <strong>{language === 'en' ? 'Mobile:' : 'Mobil:'}</strong>
                  <br />• TalkBack (Android)
                  <br />• VoiceOver (iOS)
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Known Limitations' : 'Ismert korlátozások'}
            </h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <div className="flex items-start gap-2 mb-3">
                <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                <h3 className="text-lg font-semibold text-yellow-800">
                  {language === 'en' ? 'Areas for Improvement' : 'Fejlesztendő területek'}
                </h3>
              </div>
              <p className="text-yellow-700 mb-4">
                {language === 'en'
                  ? 'While we strive for full accessibility, we acknowledge some areas that may need improvement:'
                  : 'Bár teljes akadálymentességre törekszünk, elismerünk néhány területet, amely fejlesztésre szorulhat:'}
              </p>
              <ul className="space-y-2 text-yellow-700">
                <li>• {language === 'en' ? 'Some PDF documents may not be fully accessible' : 'Egyes PDF dokumentumok nem teljesen akadálymentesek'}</li>
                <li>• {language === 'en' ? 'Complex interactive elements may require additional navigation instructions' : 'Összetett interaktív elemek további navigációs utasításokat igényelhetnek'}</li>
                <li>• {language === 'en' ? 'Some third-party embedded content may have limited accessibility features' : 'Néhány harmadik féltől származó beágyazott tartalom korlátozott akadálymentességi funkciókkal rendelkezhet'}</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Feedback & Support' : 'Visszajelzés és támogatás'}
            </h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-blue-800 mb-4">
                {language === 'en'
                  ? 'We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:'
                  : 'Örömmel fogadjuk visszajelzését weboldalunk akadálymentességével kapcsolatban. Ha akadálymentességi akadályokba ütközik, vagy javaslata van fejlesztésre, kérjük, vegye fel velünk a kapcsolatot:'}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">accessibility@flair-plastic.hu</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span className="text-sm font-medium">+36 (46) 584 06 00</span>
                  </div>
                </div>
                <div className="text-sm text-blue-700">
                  <p><strong>{language === 'en' ? 'Response Time:' : 'Válaszidő:'}</strong></p>
                  <p>{language === 'en' ? 'We aim to respond within 5 business days.' : 'Célunk, hogy 5 munkanapon belül válaszoljunk.'}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Enforcement Procedure' : 'Végrehajtási eljárás'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en'
                ? 'If you are not satisfied with our response to your accessibility concerns, you have the right to contact the relevant enforcement body:'
                : 'Ha nem elégedett az akadálymentességi aggályaira adott válaszunkkal, joga van kapcsolatba lépni az illetékes végrehajtási szervvel:'}
            </p>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-700">
              <p><strong>{language === 'en' ? 'Hungary - National Media and Infocommunications Authority (NMHH)' : 'Magyarország - Nemzeti Média- és Hírközlési Hatóság (NMHH)'}</strong></p>
              <p>{language === 'en' ? 'Website:' : 'Weboldal:'} https://nmhh.hu</p>
              <p>Email: info@nmhh.hu</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Technical Specifications' : 'Műszaki specifikációk'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {language === 'en' ? 'Technologies Used' : 'Használt technológiák'}
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• HTML5 semantic markup</li>
                  <li>• CSS3 with responsive design</li>
                  <li>• JavaScript (ES6+)</li>
                  <li>• React with Next.js</li>
                  <li>• ARIA attributes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {language === 'en' ? 'Browser Support' : 'Böngésző támogatás'}
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Chrome 90+</li>
                  <li>• Firefox 88+</li>
                  <li>• Safari 14+</li>
                  <li>• Edge 90+</li>
                  <li>• Mobile browsers (iOS Safari, Chrome Mobile)</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="text-center text-sm text-gray-500 pt-6 border-t">
            <p className="mb-2">
              {language === 'en' 
                ? `This statement was last updated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
                : `Ez a nyilatkozat utoljára frissítve: ${new Date().toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })}`
              }
            </p>
            <p>
              {language === 'en'
                ? 'We continuously monitor and improve the accessibility of our website.'
                : 'Folyamatosan figyelemmel kísérjük és javítjuk weboldalunk akadálymentességét.'}
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AccessibilityStatement;