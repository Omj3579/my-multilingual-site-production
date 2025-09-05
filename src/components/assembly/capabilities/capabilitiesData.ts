import { 
  Cog, 
  Shield, 
  Cpu, 
  Eye, 
  Layers,
  Settings,
  CheckCircle2,
  Activity
} from 'lucide-react';

export const capabilitiesContent = {
  en: {
    badge: "Core Capabilities",
    title: "Consumer Product",
    subtitle: "Assembly Excellence",
    description: "Our specialized assembly capabilities focus on household products, personal care items, toys, and everyday consumer goods, ensuring quality and efficiency at scale.",
    
    tabs: [
      {
        id: "household",
        label: "Household Products",
        icon: Cog,
        title: "Household Product Assembly",
        description: "Specialized assembly for cleaning tools, storage solutions, and kitchen accessories with focus on durability and user safety.",
        features: [
          "Multi-Component Integration",
          "Ergonomic Design Assembly",
          "Safety Testing Integration",
          "Quality Control Systems"
        ],
        metrics: {
          speed: "5000+ units/day",
          accuracy: "99.5%",
          efficiency: "Continuous operation"
        },
        processSteps: [
          {
            title: "Component Preparation",
            status: "completed",
            duration: 15
          },
          {
            title: "Precision Assembly",
            status: "active",
            duration: 45
          },
          {
            title: "Quality Testing",
            status: "pending",
            duration: 25
          },
          {
            title: "Final Packaging",
            status: "pending",
            duration: 15
          }
        ]
      },
      {
        id: "personal-care",
        label: "Personal Care",
        icon: Eye,
        title: "Personal Care & Hygiene Products",
        description: "Assembly of cosmetic containers, hygiene products, and personal care accessories meeting strict safety standards.",
        features: [
          "Hygienic Assembly Environments",
          "Precision Component Fitting",
          "Leak Testing Systems",
          "Cosmetic Grade Finishing"
        ],
        metrics: {
          tolerance: "±0.1mm",
          accuracy: "99.8%",
          resolution: "Food-grade quality"
        },
        processSteps: [
          {
            title: "Sterilization Process",
            status: "completed",
            duration: 20
          },
          {
            title: "Component Assembly",
            status: "completed",
            duration: 40
          },
          {
            title: "Leak Testing",
            status: "active",
            duration: 20
          },
          {
            title: "Quality Verification",
            status: "pending",
            duration: 20
          }
        ]
      },
      {
        id: "packaging",
        label: "Packaging",
        icon: Shield,
        title: "Food & Beverage Packaging",
        description: "Assembly of caps, closures, and packaging components for food safety and extended shelf life.",
        features: [
          "Food-Safe Assembly",
          "Tamper-Evident Features",
          "Leak Prevention Testing",
          "Regulatory Compliance"
        ],
        metrics: {
          defects: "<0.2%",
          testing: "100% leak testing",
          compliance: "FDA approved"
        },
        processSteps: [
          {
            title: "Material Inspection",
            status: "completed",
            duration: 10
          },
          {
            title: "Cap Assembly",
            status: "completed",
            duration: 30
          },
          {
            title: "Seal Testing",
            status: "completed",
            duration: 30
          },
          {
            title: "Final Inspection",
            status: "active",
            duration: 30
          }
        ]
      },
      {
        id: "toys",
        label: "Toys & Education",
        icon: Layers,
        title: "Toys & Educational Products",
        description: "Safe assembly of children's products meeting international toy safety standards and educational requirements.",
        features: [
          "Child-Safe Materials",
          "Toy Safety Compliance",
          "Durability Testing",
          "Educational Value Integration"
        ],
        metrics: {
          safety: "CE/CPSC certified",
          durability: "10,000+ cycles",
          compliance: "International standards"
        },
        processSteps: [
          {
            title: "Safety Verification",
            status: "completed",
            duration: 25
          },
          {
            title: "Component Assembly",
            status: "completed",
            duration: 35
          },
          {
            title: "Durability Testing",
            status: "completed",
            duration: 25
          },
          {
            title: "Final Packaging",
            status: "completed",
            duration: 15
          }
        ]
      }
    ]
  },

  hu: {
    badge: "Alapvető Képességek",
    title: "Fogyasztói Termék",
    subtitle: "Összeszerelési Kiválóság",
    description: "Specializált összeszerelési képességeink háztartási termékekre, személyes ápolási cikkekre, játékokra és mindennapi fogyasztási cikkekre összpontosítanak, biztosítva a minőséget és hatékonyságot nagy volumenben.",
    
    tabs: [
      {
        id: "household",
        label: "Háztartási Termékek",
        icon: Cog,
        title: "Háztartási Termék Összeszerelés",
        description: "Specializált összeszerelés tisztítóeszközökhöz, tárolási megoldásokhoz és konyhai kiegészítőkhöz tartósságra és felhasználói biztonságra összpontosítva.",
        features: [
          "Többkomponensű Integráció",
          "Ergonomikus Tervezés Összeszerelés",
          "Biztonsági Teszt Integráció",
          "Minőségellenőrzési Rendszerek"
        ],
        metrics: {
          speed: "5000+ darab/nap",
          accuracy: "99.5%",
          efficiency: "Folyamatos működés"
        },
        processSteps: [
          {
            title: "Komponens Előkészítés",
            status: "completed",
            duration: 15
          },
          {
            title: "Precíziós Összeszerelés",
            status: "active",
            duration: 45
          },
          {
            title: "Minőségi Tesztelés",
            status: "pending",
            duration: 25
          },
          {
            title: "Végső Csomagolás",
            status: "pending",
            duration: 15
          }
        ]
      },
      {
        id: "personal-care",
        label: "Személyes Ápolás",
        icon: Eye,
        title: "Személyes Ápolási és Higiéniai Termékek",
        description: "Kozmetikai tartályok, higiéniai termékek és személyes ápolási kiegészítők összeszerelése szigorú biztonsági előírások betartásával.",
        features: [
          "Higiénikus Összeszerelési Környezet",
          "Precíziós Komponens Illesztés",
          "Szivárgás Tesztelési Rendszerek",
          "Kozmetikai Minőségű Befejezés"
        ],
        metrics: {
          tolerance: "±0.1mm",
          accuracy: "99.8%",
          resolution: "Élelmiszeripari minőség"
        },
        processSteps: [
          {
            title: "Sterilizációs Folyamat",
            status: "completed",
            duration: 20
          },
          {
            title: "Komponens Összeszerelés",
            status: "completed",
            duration: 40
          },
          {
            title: "Szivárgás Tesztelés",
            status: "active",
            duration: 20
          },
          {
            title: "Minőség Ellenőrzés",
            status: "pending",
            duration: 20
          }
        ]
      },
      {
        id: "packaging",
        label: "Csomagolás",
        icon: Shield,
        title: "Élelmiszer és Ital Csomagolás",
        description: "Kupakok, zárások és csomagolási komponensek összeszerelése az élelmiszerbiztonság és hosszabb eltarthatóság érdekében.",
        features: [
          "Élelmiszerbiztonsági Összeszerelés",
          "Illetéktelen Hozzáférés Elleni Védelem",
          "Szivárgás Megelőzési Tesztelés",
          "Szabályozási Megfelelőség"
        ],
        metrics: {
          defects: "<0.2%",
          testing: "100% szivárgás teszt",
          compliance: "FDA jóváhagyott"
        },
        processSteps: [
          {
            title: "Anyag Ellenőrzés",
            status: "completed",
            duration: 10
          },
          {
            title: "Kupak Összeszerelés",
            status: "completed",
            duration: 30
          },
          {
            title: "Tömítés Tesztelés",
            status: "completed",
            duration: 30
          },
          {
            title: "Végső Ellenőrzés",
            status: "active",
            duration: 30
          }
        ]
      },
      {
        id: "toys",
        label: "Játékok és Oktatás",
        icon: Layers,
        title: "Játékok és Oktatási Termékek",
        description: "Gyermektermékek biztonságos összeszerelése a nemzetközi játékbiztonsági előírások és oktatási követelmények betartásával.",
        features: [
          "Gyermekbiztos Anyagok",
          "Játékbiztonsági Megfelelőség",
          "Tartóssági Tesztelés",
          "Oktatási Érték Integráció"
        ],
        metrics: {
          safety: "CE/CPSC tanúsított",
          durability: "10,000+ ciklus",
          compliance: "Nemzetközi szabványok"
        },
        processSteps: [
          {
            title: "Biztonsági Ellenőrzés",
            status: "completed",
            duration: 25
          },
          {
            title: "Komponens Összeszerelés",
            status: "completed",
            duration: 35
          },
          {
            title: "Tartóssági Tesztelés",
            status: "completed",
            duration: 25
          },
          {
            title: "Végső Csomagolás",
            status: "completed",
            duration: 15
          }
        ]
      }
    ]
  }
};
