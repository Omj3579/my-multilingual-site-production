import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';
import { AlertTriangle, Scale, Building, Shield } from 'lucide-react';

const LegalDisclaimer = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Scale className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">
            {language === 'en' ? 'Legal Disclaimer' : 'Jogi Nyilatkozat'}
          </h1>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-8">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium text-amber-800 mb-1">
                {language === 'en' ? 'Important Legal Notice' : 'Fontos jogi tájékoztatás'}
              </h3>
              <p className="text-sm text-amber-700">
                {language === 'en'
                  ? 'Please read this disclaimer carefully. It contains important information about the use of this website and our services.'
                  : 'Kérjük, figyelmesen olvassa el ezt a jogi nyilatkozatot. Fontos információkat tartalmaz a weboldal és szolgáltatásaink használatáról.'}
              </p>
            </div>
          </div>
        </div>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Building className="h-6 w-6 text-blue-600" />
              {language === 'en' ? 'Company Information & Website Liability' : 'Vállalati információk és weboldal felelősség'}
            </h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold mb-3 text-gray-800">
                {language === 'en' ? 'Flair-Plastic Kft.' : 'Flair-Plastic Kft.'}
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <p><strong>{language === 'en' ? 'Registered Address:' : 'Székhely:'}</strong><br />
                  Sajószigeti utca 2, 3527 Miskolc, Hungary</p>
                  <p><strong>{language === 'en' ? 'Company Registration:' : 'Cégjegyzékszám:'}</strong><br />
                  05-09-004973</p>
                </div>
                <div>
                  <p><strong>{language === 'en' ? 'Tax Number:' : 'Adószám:'}</strong><br />
                  12345678-2-05</p>
                  <p><strong>{language === 'en' ? 'EU VAT Number:' : 'EU ÁFA szám:'}</strong><br />
                  HU12345678</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700">
              {language === 'en'
                ? 'Flair-Plastic Kft. ("Company", "we", "us", or "our") provides this website and its content for informational purposes only. While we strive to provide accurate and up-to-date information about our company and capabilities, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website information, content, or related graphics.'
                : 'A Flair-Plastic Kft. ("Társaság", "mi", "minket", vagy "miénk") ezt a weboldalt és annak tartalmát kizárólag tájékoztatási célokra biztosítja. Bár törekszünk vállalatunkról és képességeinkről pontos és naprakész információk nyújtására, semmilyen kifejezett vagy hallgatólagos képviseletet vagy garanciát nem vállalunk a weboldal információinak, tartalmának vagy kapcsolódó grafikáinak teljességére, pontosságára, megbízhatóságára, alkalmasságára vagy elérhetőségére vonatkozóan.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              {language === 'en' ? 'Website Content Disclaimers' : 'Weboldal tartalom felelősségkizárás'}
            </h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {language === 'en' ? 'Content Accuracy & Information' : 'Tartalom pontosság és információ'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'All content on this website, including company information, product descriptions, images, and technical details, is provided for general informational purposes. While we make every effort to ensure accuracy, website content may become outdated or contain inaccuracies. For the most current and precise information about our services and capabilities, please contact us directly.'
                  : 'Az ezen a weboldalon található összes tartalom, beleértve a vállalati információkat, termékleírásokat, képeket és műszaki részleteket, általános tájékoztatási célokat szolgál. Bár minden erőfeszítést megteszünk a pontosság érdekében, a weboldal tartalma elavulttá válhat vagy pontatlanságokat tartalmazhat. Szolgáltatásainkról és képességeinkről a legfrissebb és legpontosabb információért kérjük, vegye fel velünk közvetlenül a kapcsolatot.'}
                </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6">
                {language === 'en' ? 'Website Functionality & Availability' : 'Weboldal funkciók és elérhetőség'}
              </h3>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'We strive to maintain our website and keep it accessible, but we cannot guarantee continuous availability or error-free operation. The website may experience temporary downtime, technical issues, or require maintenance. Users should not rely solely on website availability for time-sensitive business needs.'
                  : 'Törekszünk weboldalunk karbantartására és hozzáférhetőségének biztosítására, de nem tudjuk garantálni a folyamatos elérhetőséget vagy hibamentes működést. A weboldal átmeneti leállást, technikai problémákat tapasztalhat, vagy karbantartásra szorulhat. A felhasználók nem támaszkodhatnak kizárólag a weboldal elérhetőségére időkritikus üzleti szükségletek esetén.'}
                </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Limitation of Liability' : 'Felelősségkorlátozás'}
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                {language === 'en'
                  ? 'To the fullest extent permitted by applicable law, Flair-Plastic Kft. and its directors, employees, partners, agents, suppliers, or affiliates shall not be liable for any indirect, incidental, punitive, special, or consequential damages arising out of or related to your use of this website.'
                  : 'Az alkalmazandó jog által megengedett legteljesebb mértékben a Flair-Plastic Kft. és annak igazgatói, alkalmazottai, partnerei, ügynökei, szállítói vagy kapcsolt vállalkozásai nem felelnek semmilyen közvetett, járulékos, büntető, különleges vagy következményes kárért, amely a jelen weboldal használatából fakad vagy azzal kapcsolatos.'}
              </p>
              <p className="text-gray-700">
                {language === 'en'
                  ? 'Our website is provided for informational purposes only. Any reliance on the information provided is at your own risk. We do not guarantee the accuracy, completeness, or timeliness of any information on the website.'
                  : 'Weboldalunk kizárólag tájékoztatási célokat szolgál. A megadott információkra való támaszkodás saját felelősségére történik. Nem garantáljuk a weboldalon található információk pontosságát, teljességét vagy időszerűségét.'}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'EU Regulatory Compliance' : 'EU szabályozási megfelelőség'}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  {language === 'en' ? 'GDPR Compliance' : 'GDPR megfelelőség'}
                </h3>
                <p className="text-sm text-blue-700">
                  {language === 'en'
                    ? 'We are committed to complying with the General Data Protection Regulation (EU) 2016/679 and protecting your personal data rights.'
                    : 'Elkötelezettek vagyunk az általános adatvédelmi rendelet (EU) 2016/679 betartása és személyes adatainak védelme mellett.'}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  {language === 'en' ? 'Product Safety' : 'Termékbiztonság'}
                </h3>
                <p className="text-sm text-green-700">
                  {language === 'en'
                    ? 'Our products comply with relevant EU safety standards and regulations for plastic manufacturing and injection molding.'
                    : 'Termékeink megfelelnek a műanyag gyártásra és fröccsöntésre vonatkozó EU biztonsági szabványoknak és előírásoknak.'}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Global Website Access Disclaimer' : 'Globális weboldal hozzáférési nyilatkozat'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'This website is operated from Hungary and governed by Hungarian law. While accessible globally, content and legal terms are designed primarily for EU users. Visitors from other jurisdictions should be aware that local laws may differ, and they are responsible for ensuring their use of this website complies with applicable local regulations.'
                : 'Ez a weboldal Magyarországról működik és a magyar jog hatálya alá tartozik. Bár világszerte elérhető, a tartalom és jogi feltételek elsősorban EU-s felhasználók számára készültek. Más joghatóságokból érkező látogatóknak tudniuk kell, hogy a helyi törvények eltérhetnek, és ők felelősek azért, hogy a weboldal használatuk megfeleljen az alkalmazandó helyi szabályozásoknak.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Intellectual Property Rights' : 'Szellemi tulajdon jogok'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'All content on this website, including text, graphics, logos, images, and software, is the property of Flair-Plastic Kft. or its content suppliers and is protected by Hungarian and international copyright laws. Unauthorized use of any content from this website is strictly prohibited.'
                : 'A weboldal összes tartalma, beleértve a szövegeket, grafikákat, logókat, képeket és szoftvereket, a Flair-Plastic Kft. vagy tartalomszolgáltatóinak tulajdona, és magyar és nemzetközi szerzői jogi törvények védik. A weboldal bármely tartalmának jogosulatlan használata szigorúan tilos.'}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Updates to This Disclaimer' : 'Jogi nyilatkozat frissítései'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'We reserve the right to update this legal disclaimer at any time without prior notice. The most current version will always be posted on our website. Your continued use of our website after any changes constitutes your acceptance of the updated disclaimer.'
                : 'Fenntartjuk a jogot, hogy ezt a jogi nyilatkozatot bármikor előzetes értesítés nélkül frissítsük. A legaktuálisabb verzió mindig a weboldalunkon lesz elérhető. A változtatások után a weboldalunk további használata a frissített nyilatkozat elfogadását jelenti.'}
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">
              {language === 'en' ? 'Contact Information' : 'Kapcsolattartási információk'}
            </h2>
            <p className="text-gray-700 mb-4">
              {language === 'en'
                ? 'If you have any questions about this legal disclaimer or need clarification on any legal aspects of our services, please contact our legal department:'
                : 'Ha bármilyen kérdése van ezzel a jogi nyilatkozattal kapcsolatban, vagy tisztázásra szorul szolgáltatásaink bármely jogi vonatkozása, kérjük, vegye fel a kapcsolatot jogi osztályunkkal:'}
            </p>
            <div className="space-y-2 text-gray-700">
              <p><strong>Email:</strong> legal@flair-plastic.hu</p>
              <p><strong>{language === 'en' ? 'Phone:' : 'Telefon:'}</strong> +36 (46) 584 06 00</p>
              <p><strong>{language === 'en' ? 'Address:' : 'Cím:'}</strong> Sajószigeti utca 2, 3527 Miskolc, Hungary</p>
            </div>
          </section>

          <div className="text-center text-sm text-gray-500 pt-6 border-t">
            {language === 'en' 
              ? `Last updated: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}`
              : `Utolsó frissítés: ${new Date().toLocaleDateString('hu-HU', { year: 'numeric', month: 'long', day: 'numeric' })}`
            }
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default LegalDisclaimer;