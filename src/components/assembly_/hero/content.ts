import { Zap, Shield, Award } from 'lucide-react';
import { HeroContentMap } from './types';

export const heroContent: HeroContentMap = {
  en: {
    badge: "Advanced Manufacturing",
    title: ["Precision", "Assembly", "Excellence"],
    subtitle: "Transforming Ideas into Reality",
    description: "State-of-the-art assembly services combining cutting-edge technology with unparalleled precision to deliver exceptional manufacturing outcomes for complex industrial applications.",
    primaryCTA: "Explore Capabilities",
    secondaryCTA: "Watch Process",
    stats: [
      { value: "99.8%", label: "Quality Accuracy" },
      { value: "24/7", label: "Production Capacity" },
      { value: "500+", label: "Projects Completed" }
    ],
    features: [
      { icon: Zap, text: "Lightning-fast Assembly" },
      { icon: Shield, text: "Quality Assurance" },
      { icon: Award, text: "Industry Leadership" }
    ]
  },
  hu: {
    badge: "Fejlett Gyártás",
    title: ["Precíziós", "Összeszerelés", "Kiválóság"],
    subtitle: "Ötletek Valósággá Alakítása",
    description: "Élvonalbeli összeszerelési szolgáltatások, amelyek a legmodernebb technológiát párosítják páratlan precizitással, hogy kivételes gyártási eredményeket nyújtsanak összetett ipari alkalmazásokhoz.",
    primaryCTA: "Képességek Felfedezése",
    secondaryCTA: "Folyamat Megtekintése",
    stats: [
      { value: "99,8%", label: "Minőségi Pontosság" },
      { value: "24/7", label: "Termelési Kapacitás" },
      { value: "500+", label: "Befejezett Projekt" }
    ],
    features: [
      { icon: Zap, text: "Villámgyors Összeszerelés" },
      { icon: Shield, text: "Minőségbiztosítás" },
      { icon: Award, text: "Iparági Vezetés" }
    ]
  }
};
