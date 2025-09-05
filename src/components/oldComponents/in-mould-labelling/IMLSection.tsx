
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import SplitBackground from '@/components/ui/split-background';

export const IMLSection = () => {
  const { language } = useLanguage();
  
  return (
    <SplitBackground
      topColor="bg-[#ebebeb]"
      bottomColor="#ffffff"
      topHeight="55%"
    >
      <section className="relative font-[Poppins] text-[#333]">
        <div className="pb-48 px-6">
          <div className="max-w-[1140px] mx-auto mb-10">
            <div className="mb-10 text-left">
              <h2 className="text-[30px] md:text-[34px] font-semibold leading-snug">
                {language === 'en' ? (
                  <>
                    <span className="text-[#000] font-medium">Elevating</span>{" "}
                    Products Design{" "}
                    <span className="text-[#000] font-bold">Through In–Mold Labeling</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#000] font-medium">Termékek</span>{" "}
                    tervezésének{" "}
                    <span className="text-[#000] font-bold">fejlesztése szerszámon belüli címkézéssel</span>
                  </>
                )}
              </h2>
            </div>

            <div className="hidden md:flex w-full">
              <div className="w-[12%]" />
              <div className="w-[88%] flex gap-16 text-[20px] text-[#555] leading-[1.7]">
                <div className="w-1/2">
                  <p>
                    {language === 'en' 
                      ? "At Flair-Plastic, we employ a unique technique to integrate labels directly into injection-moulded products via in-mould labelling (IML). This method, unlike conventional labelling techniques, embeds logos, decorations, or product information into plastic products and packaging, resulting in a seamless and long-lasting finish."
                      : "A Flair-Plasticnál egyedi technikát alkalmazunk a címkék közvetlen integrálására a fröccsöntött termékekbe a szerszámon belüli címkézés (IML) révén. Ez a módszer, a hagyományos címkézési technikáktól eltérően, a logókat, dekorációkat vagy termékinformációkat beágyazza a műanyag termékekbe és csomagolásokba, így tökéletes és tartós felületet eredményezve."}
                  </p>
                </div>
                <div className="w-1/2">
                  <p>
                    {language === 'en'
                      ? "At Flair-Plastic, we go beyond conventional applications of IML, using it to also enhance your product's physical properties. Our advanced facilities allow us to incorporate features like oxygen scavenging directly into your packaging, extending the lifespan of your products. Moreover, our process ensures each product is anti-bacterial, making it ideal for food retail packaging."
                      : "A Flair-Plasticnál túllépünk az IML hagyományos alkalmazásain, és a termék fizikai tulajdonságainak javítására is használjuk. Fejlett létesítményeink lehetővé teszik, hogy olyan tulajdonságokat építsünk be közvetlenül a csomagolásba, mint az oxigénmegkötés, így meghosszabbítva a termékek élettartamát. Továbbá folyamatunk biztosítja, hogy minden termék antibakteriális legyen, így ideális az élelmiszer-kiskereskedelmi csomagoláshoz."}
                  </p>
                </div>
              </div>
            </div>

            <div className="md:hidden space-y-6 text-[20px] text-[#555] leading-[1.7]">
              <p>
                {language === 'en'
                  ? "At Flair-Plastic, we employ a unique technique to integrate labels directly into injection-moulded products via in-mould labelling (IML). This method, unlike conventional labelling techniques, embeds logos, decorations, or product information into plastic products and packaging, resulting in a seamless and long-lasting finish."
                  : "A Flair-Plasticnál egyedi technikát alkalmazunk a címkék közvetlen integrálására a fröccsöntött termékekbe a szerszámon belüli címkézés (IML) révén. Ez a módszer, a hagyományos címkézési technikáktól eltérően, a logókat, dekorációkat vagy termékinformációkat beágyazza a műanyag termékekbe és csomagolásokba, így tökéletes és tartós felületet eredményezve."}
              </p>
              <p>
                {language === 'en'
                  ? "At Flair-Plastic, we go beyond conventional applications of IML, using it to also enhance your product's physical properties. Our advanced facilities allow us to incorporate features like oxygen scavenging directly into your packaging, extending the lifespan of your products. Moreover, our process ensures each product is anti-bacterial, making it ideal for food retail packaging."
                  : "A Flair-Plasticnál túllépünk az IML hagyományos alkalmazásain, és a termék fizikai tulajdonságainak javítására is használjuk. Fejlett létesítményeink lehetővé teszik, hogy olyan tulajdonságokat építsünk be közvetlenül a csomagolásba, mint az oxigénmegkötés, így meghosszabbítva a termékek élettartamát. Továbbá folyamatunk biztosítja, hogy minden termék antibakteriális legyen, így ideális az élelmiszer-kiskereskedelmi csomagoláshoz."}
              </p>
            </div>
          </div>
        </div>

        <div className="relative -mt-40 mb-20 z-10">
          <div className="w-[1440px] overflow-hidden rounded-[40px] shadow-lg" style={{ marginLeft: 0 }}>
            <img
              src="https://flair-plastic.hu/wp-content/uploads/2024/05/dec6525.png.webp"
              alt={language === 'en' ? "IML Candy Showcase" : "IML Édesség Bemutató"}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="max-w-[1140px] mx-auto px-6">
          <div className="text-left mb-10">
            <h3 className="text-[28px] md:text-[32px] font-medium">
              {language === 'en' ? (
                <>Flair-Plastic's <span className="font-bold">Mastery</span> of IML</>
              ) : (
                <>A Flair-Plastic <span className="font-bold">szakértelme</span> az IML-ben</>
              )}
            </h3>
          </div>

          <div className="hidden md:flex w-full">
            <div className="w-[12%]" />
            <div className="w-[88%]">
              <p className="text-[20px] text-[#555] leading-[1.8] max-w-[95%]">
                {language === 'en'
                  ? "Annually producing over 50 million IML injection-moulded vessels and covers, Flair-Plastic leverages profound experience and specialized expertise in the field. Our state-of-the-art automation systems, developed over years of innovation and refinement, enable us to streamline the IML process, enhancing both speed and efficiency while maintaining cost-effectiveness. This commitment to technological advancement ensures top-tier production quality and operational excellence."
                  : "A Flair-Plastic évente több mint 50 millió IML fröccsöntött edényt és fedelet gyárt, kihasználva a területen szerzett mély tapasztalatait és speciális szakértelmét. Az évek során kifejlesztett és finomított csúcstechnológiás automatizálási rendszereink lehetővé teszik az IML folyamat optimalizálását, növelve mind a sebességet, mind a hatékonyságot, miközben fenntartják a költséghatékonyságot. Ez a technológiai fejlődés iránti elkötelezettség biztosítja a csúcsminőségű gyártást és a működési kiválóságot."}
              </p>
            </div>
          </div>

          <div className="md:hidden">
            <p className="text-[20px] text-[#555] leading-[1.8]">
              {language === 'en'
                ? "Annually producing over 50 million IML injection-moulded vessels and covers, Flair-Plastic leverages profound experience and specialized expertise in the field. Our state-of-the-art automation systems, developed over years of innovation and refinement, enable us to streamline the IML process, enhancing both speed and efficiency while maintaining cost-effectiveness. This commitment to technological advancement ensures top-tier production quality and operational excellence."
                : "A Flair-Plastic évente több mint 50 millió IML fröccsöntött edényt és fedelet gyárt, kihasználva a területen szerzett mély tapasztalatait és speciális szakértelmét. Az évek során kifejlesztett és finomított csúcstechnológiás automatizálási rendszereink lehetővé teszik az IML folyamat optimalizálását, növelve mind a sebességet, mind a hatékonyságot, miközben fenntartják a költséghatékonyságot. Ez a technológiai fejlődés iránti elkötelezettség biztosítja a csúcsminőségű gyártást és a működési kiválóságot."}
            </p>
          </div>
        </div>
      </section>
    </SplitBackground>
  );
};
