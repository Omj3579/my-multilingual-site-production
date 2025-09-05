// Script to add missing features to all solutions in content.ts

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'content.ts');
let content = fs.readFileSync(filePath, 'utf8');

// Define features for each solution type
const automotiveFeatures = [
  '"Valós idejű minőségmonitorozás AI-vezérelt ellenőrző rendszerekkel"',
  '"Rugalmas összeszerelő sorok több járműmodellhez adaptálhatóan"',
  '"Zéró hulladék gyártás optimalizált anyagkezeléssel"',
  '"Integráció meglévő autóipari ERP és MES rendszerekkel"'
];

const medicalFeatures = [
  '"ISO 13485 tanúsított tisztatéri összeszerelési környezetek"',
  '"Validált sterilizálási és csomagolási folyamatok"',
  '"Nyomon követhetőségi rendszerek teljes eszköz életciklushoz"',
  '"FDA-megfelelő dokumentáció és minőségirányítás"'
];

const aerospaceFeatures = [
  '"AS9100 tanúsított légiközlekedési minőségirányítási rendszerek"',
  '"ITAR-megfelelő biztonságos gyártási környezetek"',
  '"Kiterjedt környezeti és stressz tesztelési képességek"',
  '"DO-178C szoftver fejlesztési és verifikációs folyamatok"'
];

const electronicsFeatures = [
  '"Teljesen automatizált SMT összeszerelő sorok Industry 4.0 integrációval"',
  '"Fejlett optikai ellenőrző és tesztelő rendszerek"',
  '"Rugalmas termelő sorok gyors termékváltásokhoz"',
  '"RoHS-megfelelő ólommentes forrasztási folyamatok"'
];

// Add features to Hungarian automotive solution
content = content.replace(
  /(icon: Factory,\s*description: "Fejlett összeszerelési megoldások autóipari gyártáshoz[^"]*",\s*image: "\/images\/automotive-assembly\.jpg",\s*)(applications: \[)/,
  `$1\n        features: [\n          ${automotiveFeatures.join(',\n          ')}\n        ],\n        \n        $2`
);

// Add features to Hungarian medical solution
content = content.replace(
  /(icon: HeartHandshake,\s*description: "Ultra-precíz összeszerelési megoldások[^"]*",\s*image: "\/images\/medical-assembly\.jpg",\s*)(applications: \[)/,
  `$1\n        features: [\n          ${medicalFeatures.join(',\n          ')}\n        ],\n        \n        $2`
);

// Add features to Hungarian aerospace solution
content = content.replace(
  /(icon: Rocket,\s*description: "Küldetéskritikus összeszerelési megoldások[^"]*",\s*image: "\/images\/aerospace-assembly\.jpg",\s*)(applications: \[)/,
  `$1\n        features: [\n          ${aerospaceFeatures.join(',\n          ')}\n        ],\n        \n        $2`
);

// Add features to Hungarian electronics solution
content = content.replace(
  /(icon: Cpu,\s*description: "Nagy volumenű elektronikai összeszerelési megoldások[^"]*",\s*image: "\/images\/electronics-assembly\.jpg",\s*)(applications: \[)/,
  `$1\n        features: [\n          ${electronicsFeatures.join(',\n          ')}\n        ],\n        \n        $2`
);

fs.writeFileSync(filePath, content);
console.log('Features added to Hungarian solutions!');
