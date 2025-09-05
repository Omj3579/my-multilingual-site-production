
import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/layouts/PageLayout';

const TermsConditions = () => {
  const { language } = useLanguage();

  return (
    <PageLayout>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {language === 'en' ? 'Terms of Use and Legal Conditions' : 'Használati Feltételek és Jogi Feltételek'}
        </h1>
        
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-gray-700">
              {language === 'en' 
                ? 'Please review these terms and conditions thoroughly before accessing our website.'
                : 'Kérjük, alaposan tekintse át ezeket a feltételeket weboldalunk használata előtt.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Understanding Our Terms' : 'Feltételeink megértése'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'These terms outline the guidelines for accessing and using our website, www.flair-plastic.hu'
                : 'Ezek a feltételek határozzák meg a www.flair-plastic.hu weboldal elérésének és használatának irányelveit'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'About Us and Contact Information' : 'Rólunk és kapcsolat'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Flair-Plastic.hu is operated by Flair-Plastic, a company registered in Hungary. Our registered office is located at Sajószigeti utca 2, 3527 Miskolc, and we are registered under company number 0509004973. As a leading provider in the plastic injection molding industry, Flair-Plastic manages operations across various international locations.'
                : 'A Flair-Plastic.hu-t a Flair-Plastic üzemelteti, amely Magyarországon bejegyzett vállalat. Székhelyünk: Sajószigeti utca 2, 3527 Miskolc, cégjegyzékszámunk: 0509004973. A műanyag fröccsöntő ipar vezető szolgáltatójaként a Flair-Plastic különböző nemzetközi helyszíneken működik.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Acceptance of Terms' : 'Feltételek elfogadása'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'By accessing and using Flair-Plastic.hu, you acknowledge and agree to adhere to these terms of use. If you disagree with any part of the terms, you are advised not to use our website. For your convenience, we suggest printing or saving a copy of these terms for future reference.'
                : 'A Flair-Plastic.hu használatával Ön elfogadja és vállalja, hogy betartja ezeket a használati feltételeket. Ha nem ért egyet a feltételek bármely részével, javasoljuk, hogy ne használja weboldalunkat. Javasoljuk, hogy nyomtassa ki vagy mentse el ezeket a feltételeket későbbi hivatkozás céljából.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Additional Terms You Should Know' : 'További tudnivalók'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Our terms of use include references to additional policies that apply to your use of Flair-Plastic.hu, such as our Cookies Policy, which provides details on the cookies utilized on our site.'
                : 'Használati feltételeink további irányelvekre hivatkoznak, amelyek a Flair-Plastic.hu használatára vonatkoznak, mint például a Cookie-szabályzatunk, amely részletezi az oldalunkon használt sütiket.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Updates to These Terms' : 'A feltételek frissítései'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'We periodically update these terms. We recommend that you review them each time you access our site to stay informed about the conditions that apply during your visit. The latest update to these terms was made on Jan 25, 2023.'
                : 'Rendszeresen frissítjük ezeket a feltételeket. Javasoljuk, hogy minden látogatáskor tekintse át őket, hogy tájékozódjon az aktuálisan érvényes feltételekről. A feltételek legutóbbi frissítése: 2023. január 25.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Site Updates and Changes' : 'Weboldal frissítések és változtatások'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'We may periodically update and modify our site to enhance your experience.'
                : 'Időnként frissíthetjük és módosíthatjuk weboldalunkat az Ön élményének javítása érdekében.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Availability of Our Site' : 'Weboldalunk elérhetősége'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Our website is provided free of charge for your convenience and use. However, we do not guarantee continuous, uninterrupted access to our site or its content. Availability may be affected by a range of factors including business decisions, operational needs, or technical issues. Therefore, we reserve the right to suspend, withdraw, or limit the availability of our site, or any part of it, at any time due to business and operational considerations. We recommend checking our site regularly to stay updated on any changes.'
                : 'Weboldalunkat ingyenesen biztosítjuk az Ön kényelme és használata érdekében. Azonban nem garantáljuk a folyamatos, megszakítás nélküli hozzáférést oldalunkhoz vagy annak tartalmához. Az elérhetőséget számos tényező befolyásolhatja, beleértve az üzleti döntéseket, működési igényeket vagy technikai problémákat. Ezért fenntartjuk a jogot, hogy bármikor felfüggesszük, visszavonjuk vagy korlátozzuk weboldalunk vagy annak bármely részének elérhetőségét üzleti és működési megfontolások miatt. Javasoljuk, hogy rendszeresen ellenőrizze oldalunkat az esetleges változások nyomon követése érdekében.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Using Material from Our Site' : 'Weboldalunk anyagainak használata'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Flair-Plastic owns or holds licenses for all intellectual property on our website, including logos and published material. These works are protected by copyright laws and international treaties. All rights are expressly reserved. You are permitted to print one copy and download extracts of any page(s) from our site for your personal use. Additionally, you may share this content internally within your organization. However, you must not alter the printed or digital copies of any materials you print or download. Also, you are not allowed to use any illustrations, photos, video or audio sequences, or any graphics separately from the text that accompanies them.'
                : 'A Flair-Plastic tulajdonosa vagy licenctulajdonosa a weboldalunkon található minden szellemi tulajdonnak, beleértve a logókat és a közzétett anyagokat. Ezeket a műveket szerzői jogi törvények és nemzetközi egyezmények védik. Minden jog fenntartva. Engedélyezett egy másolat nyomtatása és kivonatok letöltése weboldalunk bármely oldaláról személyes használatra. Emellett megoszthatja ezt a tartalmat szervezetén belül. Azonban nem módosíthatja a kinyomtatott vagy letöltött anyagok másolatait. Továbbá nem használhat illusztrációkat, fényképeket, videó- vagy hangfelvételeket, illetve grafikákat az azokat kísérő szöveg nélkül.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Limitations on Information Reliability' : 'Információk megbízhatóságának korlátai'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'The information provided on our site is intended solely for general informational purposes and is designed to showcase our business and products. It should not be considered as professional or specific advice. Before making any decisions based on the content found on our site, we strongly recommend consulting with a professional or specialist to obtain appropriate advice.'
                : 'A weboldalunkon található információk kizárólag általános tájékoztatási célokat szolgálnak, és üzletünk és termékeink bemutatására szolgálnak. Nem tekinthetők szakmai vagy specifikus tanácsadásnak. Mielőtt bármilyen döntést hozna a weboldalunkon található tartalom alapján, erősen javasoljuk, hogy konzultáljon szakemberrel vagy specialistával a megfelelő tanácsok beszerzése érdekében.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'External Links Disclaimer' : 'Külső hivatkozások felelősségvállalása'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Our website includes links to external websites and resources managed by third parties. These links are offered solely for your convenience. Please note that including these links does not imply endorsement or approval of the linked websites, their content, or any information you may derive from them.'
                : 'Weboldalunk harmadik felek által kezelt külső weboldalakra és erőforrásokra mutató hivatkozásokat tartalmaz. Ezeket a hivatkozásokat kizárólag az Ön kényelme érdekében kínáljuk. Kérjük, vegye figyelembe, hogy e hivatkozások megjelenítése nem jelenti a hivatkozott weboldalak, azok tartalma vagy az azokból származó információk jóváhagyását vagy támogatását.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Social Media Integration' : 'Közösségi média integráció'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Our website features a LinkedIn widget to facilitate easy engagement with us on social media. If you use this widget, it\'s important to be aware that LinkedIn may collect information through its platform and set cookies according to its own privacy policy.'
                : 'Weboldalunk LinkedIn widgetet tartalmaz, hogy megkönnyítse a közösségi médián keresztüli kapcsolattartást. Ha használja ezt a widgetet, fontos tudnia, hogy a LinkedIn információkat gyűjthet platformján keresztül és sütiket állíthat be saját adatvédelmi szabályzata szerint.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Limitations of Our Liability' : 'Felelősségünk korlátai'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'We disclaim all implied conditions, warranties, representations, or other terms that may relate to our website or any content on it. We will not be liable for any loss or damage, whether in contract, tort (including negligence), breach of statutory duty, or otherwise, even if foreseeable, associated with your use of, or inability to use, our website; or your reliance on any content displayed on our website.'
                : 'Elutasítunk minden implicit feltételt, garanciát, nyilatkozatot vagy egyéb feltételt, amely weboldalunkra vagy annak tartalmára vonatkozhat. Nem vállalunk felelősséget semmilyen veszteségért vagy kárért, legyen az szerződéses, szerződésen kívüli (beleértve a gondatlanságot), törvényi kötelezettség megszegése vagy egyéb, még ha előrelátható is, amely weboldalunk használatával vagy használatának képtelenségével, illetve a weboldalunkon megjelenő tartalomra való támaszkodással kapcsolatos.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Guidelines for Linking to Our Site' : 'Weboldalunkra való hivatkozás irányelvei'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'You are permitted to link to our home page, as long as the link is established in a manner that is fair, legal, and does not harm our reputation or exploit it. You must not create a link that implies any form of association, approval, or endorsement from us if none exists.'
                : 'Engedélyezett a kezdőoldalunkra mutató hivatkozás létrehozása, amennyiben a hivatkozás tisztességes, jogszerű módon történik, és nem károsítja vagy használja ki hírnevünket. Nem hozhat létre olyan hivatkozást, amely bármilyen formában társulást, jóváhagyást vagy támogatást sugall részünkről, ha ilyen nem létezik.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Virus Protection and Your Responsibilities' : 'Vírusvédelem és az Ön felelőssége'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'We cannot guarantee that our site will be secure or free from bugs or viruses. You are responsible for setting up your information technology, computer programs, and platform to safely access our site. It is advisable to use your own virus protection software.'
                : 'Nem garantálhatjuk, hogy weboldalunk biztonságos vagy mentes a hibáktól és vírusoktól. Ön felelős az információtechnológiai rendszere, számítógépes programjai és platformja beállításáért weboldalunk biztonságos eléréséhez. Javasolt saját vírusvédelmi szoftver használata.'}
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              {language === 'en' ? 'Governing Law and Jurisdiction' : 'Irányadó jog és joghatóság'}
            </h2>
            <p className="text-gray-700">
              {language === 'en'
                ? 'The terms of use, their subject matter, their formation, and any non-contractual disputes or claims are governed by the laws of Hungary. Both parties agree to the exclusive jurisdiction of the courts located in Hungary to resolve any disputes.'
                : 'A használati feltételekre, azok tárgyára, létrejöttére és minden nem szerződéses vitára vagy követelésre Magyarország jogszabályai az irányadók. Mindkét fél elfogadja a magyarországi bíróságok kizárólagos illetékességét a viták rendezésére.'}
            </p>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default TermsConditions;
