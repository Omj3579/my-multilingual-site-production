PS C:\Users\OMJohn\STAR-PLUS Kft\VS Code - VS Code Projects\Bilingual\my-multilingual-site> node scan-links.js

🔍 Scanning 187 files for <Link> components...

src\pages\ProductDetail.tsx:92 — ✅ Static
  ↳ <Link href=/ />

src\pages\ProductDetail.tsx:94 — ⚠️ Dynamic
  ↳ <Link href={`/products/${categoryId}`} />

src\pages\products\SearchResultsPage.tsx:26 — ⚠️ Dynamic
  ↳ <Link href={`/products/${product.id}`} />

src\pages\products\index.tsx:55 — ⚠️ Dynamic
  ↳ <Link href={href} />

src\pages\products\CategoryPage.tsx:71 — ⚠️ Dynamic
  ↳ <Link href={`/products/${categoryId}/${product.id}`} />

src\pages\products\CartPage.tsx:24 — ✅ Static
  ↳ <Link href=/products />

src\pages\products\CartPage.tsx:48 — ✅ Static
  ↳ <Link href=/products />

src\pages\products\CartPage.tsx:228 — ✅ Static
  ↳ <Link href=/products />

src\components\HeroSection.tsx:40 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\Footer.tsx:58 — ✅ Static
  ↳ <Link href=/capabilities />

src\components\Footer.tsx:59 — ✅ Static
  ↳ <Link href=/sustainability />

src\components\Footer.tsx:60 — ✅ Static
  ↳ <Link href=/company />

src\components\Footer.tsx:61 — ✅ Static
  ↳ <Link href=/resources />

src\components\Footer.tsx:69 — ✅ Static
  ↳ <Link href=/capabilities/plastic-injection />

src\components\Footer.tsx:70 — ✅ Static
  ↳ <Link href=/capabilities/contract-manufacturing />     

src\components\Footer.tsx:71 — ✅ Static
  ↳ <Link href=/capabilities/manufacturing-support />      

src\components\Footer.tsx:109 — ✅ Static
  ↳ <Link href=/contact />

src\components\Footer.tsx:123 — ✅ Static
  ↳ <Link href=/policies/mycookiesettings />

src\components\Footer.tsx:130 — ✅ Static
  ↳ <Link href=/policies/cookies />

src\components\Footer.tsx:132 — ✅ Static
  ↳ <Link href=/policies/privacy />

src\components\Footer.tsx:134 — ✅ Static
  ↳ <Link href=/policies/terms />

src\components\FeaturedSection.tsx:43 — ✅ Static
  ↳ <Link href=/products />

src\components\FeaturedSection.tsx:64 — ⚠️ Dynamic
  ↳ <Link href={`/products/${product.id}`} />

src\components\FeaturedProducts.tsx:54 — ⚠️ Dynamic
  ↳ <Link href={`/products/${product.id}`} />

src\components\FeaturedProducts.tsx:66 — ✅ Static
  ↳ <Link href=/products />

src\components\products\ProductsFooter.tsx:44 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\products\ProductsFooter.tsx:50 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\products\ProductsFooter.tsx:56 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\products\ProductsFooter.tsx:62 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\layouts\ProductLayout.tsx:87 — ✅ Static
  ↳ <Link href=/ />

src\components\layouts\ProductLayout.tsx:98 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\layouts\ProductLayout.tsx:112 — ✅ Static   
  ↳ <Link href=/products/cart />

src\components\home\CapabilitiesCards.tsx:93 — ⚠️ Dynamic
  ↳ <Link href={card.link} />

src\components\header\MobileMenu.tsx:26 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\header\MobileMenu.tsx:35 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\header\Logo.tsx:6 — ✅ Static
  ↳ <Link href=/ />

src\components\header\DesktopNavigation.tsx:25 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\header\DesktopNavigation.tsx:35 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\header\navigation\SustainabilityMenu.tsx:26 — ✅ Static
  ↳ <Link href=/sustainability/green-strategy />

src\components\header\navigation\SustainabilityMenu.tsx:31 — ✅ Static
  ↳ <Link href=/sustainability/clean-sweep />

src\components\header\navigation\CompanyMenu.tsx:30 — ✅ Static
  ↳ <Link href=/company/history />

src\components\header\navigation\CompanyMenu.tsx:35 — ✅ Static
  ↳ <Link href=/company/management />

src\components\header\navigation\CapabilitiesMenu.tsx:31 — ✅ Static
  ↳ <Link href=/capabilities/plastic-injection />

src\components\header\navigation\CapabilitiesMenu.tsx:36 — ✅ Static
  ↳ <Link href=/capabilities/in-mould-labelling />

src\components\header\navigation\CapabilitiesMenu.tsx:41 — ✅ Static
  ↳ <Link href=/capabilities/in-mould-decoration />        

src\components\header\navigation\CapabilitiesMenu.tsx:46 — ✅ Static
  ↳ <Link href=/capabilities/injection-blow />

src\components\header\navigation\CapabilitiesMenu.tsx:51 — ✅ Static
  ↳ <Link href=/capabilities/surface-finishing />

src\components\header\navigation\CapabilitiesMenu.tsx:65 — ✅ Static
  ↳ <Link href=/capabilities/contract-manufacturing />     

src\components\header\navigation\CapabilitiesMenu.tsx:70 — ✅ Static
  ↳ <Link href=/capabilities/assembly />

src\components\header\navigation\CapabilitiesMenu.tsx:84 — ✅ Static
  ↳ <Link href=/capabilities/tooling-management />

src\components\header\navigation\CapabilitiesMenu.tsx:89 — ✅ Static
  ↳ <Link href=/capabilities/material-selection />

src\components\header\navigation\CapabilitiesMenu.tsx:94 — ✅ Static
  ↳ <Link href=/capabilities/precision-quality />

src\components\header\mobile\MobileSustainabilityMenu.tsx:18 — ✅ Static
  ↳ <Link href=/sustainability />

src\components\header\mobile\MobileSustainabilityMenu.tsx:25 — ✅ Static
  ↳ <Link href=/sustainability/green-strategy />

src\components\header\mobile\MobileSustainabilityMenu.tsx:30 — ✅ Static
  ↳ <Link href=/sustainability/clean-sweep />

src\components\header\mobile\MobileCompanyMenu.tsx:26 — ✅ Static
  ↳ <Link href=/company/history />

src\components\header\mobile\MobileCompanyMenu.tsx:31 — ✅ Static
  ↳ <Link href=/company/management />

src\components\header\mobile\MobileCapabilitiesMenu.tsx:26 — ✅ Static
  ↳ <Link href=/capabilities/plastic-injection-moulding /> 

src\components\header\mobile\MobileCapabilitiesMenu.tsx:31 — ✅ Static
  ↳ <Link href=/capabilities/in-mould-labelling />

src\components\header\mobile\MobileCapabilitiesMenu.tsx:36 — ✅ Static
  ↳ <Link href=/capabilities/in-mould-decoration />        

src\components\header\mobile\MobileCapabilitiesMenu.tsx:41 — ✅ Static
  ↳ <Link href=/capabilities/injection-blow-moulding />    

src\components\header\mobile\MobileCapabilitiesMenu.tsx:46 — ✅ Static
  ↳ <Link href=/capabilities/surface-finishing />

src\components\header\mobile\MobileCapabilitiesMenu.tsx:55 — ✅ Static
  ↳ <Link href=/capabilities/contract-manufacturing />     

src\components\header\mobile\MobileCapabilitiesMenu.tsx:60 — ✅ Static
  ↳ <Link href=/capabilities/assembly />

src\components\header\mobile\MobileCapabilitiesMenu.tsx:69 — ✅ Static
  ↳ <Link href=/capabilities/tooling-management />

src\components\header\mobile\MobileCapabilitiesMenu.tsx:74 — ✅ Static
  ↳ <Link href=/capabilities/material-selection />

src\components\header\mobile\MobileCapabilitiesMenu.tsx:79 — ✅ Static
  ↳ <Link href=/capabilities/precision-quality />

src\components\contact\SubscribeBanner.tsx:36 — ❌ Invalid or missing
  ↳ <Link href=undefined />

src\components\contact\ContactSection.tsx:98 — ✅ Static
  ↳ <Link href=/privacy />

src\components\capabilities\RelatedCapabilitiesSlider.tsx:97 — ❌ Invalid or missing
  ↳ <Link href=undefined />


Summary:
  Static hrefs: 51
  Dynamic hrefs: 7
  Invalid/missing hrefs: 12

Files with invalid or missing hrefs:
src\components\HeroSection.tsx:40 — <Link href=undefined />
src\components\products\ProductsFooter.tsx:44 — <Link href=undefined />
src\components\products\ProductsFooter.tsx:50 — <Link href=undefined />
src\components\products\ProductsFooter.tsx:56 — <Link href=undefined />
src\components\products\ProductsFooter.tsx:62 — <Link href=undefined />
src\components\layouts\ProductLayout.tsx:98 — <Link href=undefined />
src\components\header\MobileMenu.tsx:26 — <Link href=undefined />
src\components\header\MobileMenu.tsx:35 — <Link href=undefined />
src\components\header\DesktopNavigation.tsx:25 — <Link href=undefined />
src\components\header\DesktopNavigation.tsx:35 — <Link href=undefined />
src\components\contact\SubscribeBanner.tsx:36 — <Link href=undefined />
src\components\capabilities\RelatedCapabilitiesSlider.tsx:97 — <Link href=undefined />
PS C:\Users\OMJohn\STAR-PLUS Kft\VS Code - VS Code Projects\Bilingual\my-multilingual-site>