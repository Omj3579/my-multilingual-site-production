const fs = require('fs');

// DNS Records data
const dnsRecords = [
  {
    name: 'www.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'WWW subdomain',
    category: 'Web Services'
  },
  {
    name: 'default._domainkey.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'TXT',
    record: 'v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAs...',
    description: 'DKIM email authentication',
    category: 'Email Security'
  },
  {
    name: 'flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'TXT',
    record: 'v=spf1 ip4:79.172.249.237 +a +mx +ip4:217.144.56.49 ~all',
    description: 'SPF email authentication',
    category: 'Email Security'
  },
  {
    name: '_carddav._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'SRV',
    record: 'Priority: 0, Weight: 0, Port: 2079, Target: flair-plastic.hu',
    description: 'CardDAV service discovery',
    category: 'Calendar/Contacts'
  },
  {
    name: '_carddav._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'TXT',
    record: 'path=/',
    description: 'CardDAV path configuration',
    category: 'Calendar/Contacts'
  },
  {
    name: 'cpanel.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'cPanel access',
    category: 'Hosting Services'
  },
  {
    name: 'cpcontacts.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'cPanel contacts',
    category: 'Hosting Services'
  },
  {
    name: '_carddavs._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'SRV',
    record: 'Priority: 0, Weight: 0, Port: 2080, Target: flair-plastic.hu',
    description: 'CardDAV SSL service',
    category: 'Calendar/Contacts'
  },
  {
    name: '_carddavs._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'TXT',
    record: 'path=/',
    description: 'CardDAV SSL path',
    category: 'Calendar/Contacts'
  },
  {
    name: '_autodiscover._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'SRV',
    record: 'Priority: 0, Weight: 0, Port: 443, Target: cpanelemaildiscovery.cpanel.net',
    description: 'Email autodiscovery',
    category: 'Email Services'
  },
  {
    name: 'whm.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'WHM (Web Host Manager)',
    category: 'Hosting Services'
  },
  {
    name: 'autodiscover.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'Email autodiscovery',
    category: 'Email Services'
  },
  {
    name: 'autoconfig.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'Email autoconfig',
    category: 'Email Services'
  },
  {
    name: 'webmail.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'Webmail access',
    category: 'Email Services'
  },
  {
    name: 'cpcalendars.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'cPanel calendars',
    category: 'Calendar/Contacts'
  },
  {
    name: '_caldav._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'SRV',
    record: 'Priority: 0, Weight: 0, Port: 2079, Target: flair-plastic.hu',
    description: 'CalDAV service',
    category: 'Calendar/Contacts'
  },
  {
    name: '_caldav._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'TXT',
    record: 'path=/',
    description: 'CalDAV path',
    category: 'Calendar/Contacts'
  },
  {
    name: '_caldavs._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'SRV',
    record: 'Priority: 0, Weight: 0, Port: 2080, Target: flair-plastic.hu',
    description: 'CalDAV SSL service',
    category: 'Calendar/Contacts'
  },
  {
    name: '_caldavs._tcp.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'TXT',
    record: 'path=/',
    description: 'CalDAV SSL path',
    category: 'Calendar/Contacts'
  },
  {
    name: 'webdisk.flairplastic.hu.flair-plastic.hu.',
    ttl: 14400,
    type: 'A',
    record: '216.198.79.1',
    description: 'Web disk access',
    category: 'Hosting Services'
  }
];

// Proposed Vercel records
const vercelRecords = [
  {
    name: 'en',
    ttl: 14400,
    type: 'A',
    record: '76.76.19.61',
    description: 'English subdomain for Vercel',
    category: 'Vercel Subdomains',
    status: 'TO ADD'
  },
  {
    name: 'hu',
    ttl: 14400,
    type: 'A',
    record: '76.76.19.61',
    description: 'Hungarian subdomain for Vercel',
    category: 'Vercel Subdomains',
    status: 'TO ADD'
  },
  {
    name: 'de',
    ttl: 14400,
    type: 'A',
    record: '76.76.19.61',
    description: 'German subdomain for Vercel',
    category: 'Vercel Subdomains',
    status: 'TO ADD'
  }
];

// Create CSV content
function createCSV() {
  const headers = ['Name', 'TTL', 'Type', 'Record', 'Description', 'Category', 'Status'];
  
  let csvContent = headers.join(',') + '\n';
  
  // Add existing records
  dnsRecords.forEach(record => {
    const row = [
      `"${record.name}"`,
      record.ttl,
      record.type,
      `"${record.record}"`,
      `"${record.description}"`,
      `"${record.category}"`,
      'EXISTING'
    ];
    csvContent += row.join(',') + '\n';
  });
  
  // Add proposed Vercel records
  vercelRecords.forEach(record => {
    const row = [
      `"${record.name}"`,
      record.ttl,
      record.type,
      record.record,
      `"${record.description}"`,
      `"${record.category}"`,
      record.status
    ];
    csvContent += row.join(',') + '\n';
  });
  
  return csvContent;
}

// Write CSV file
const csvContent = createCSV();
fs.writeFileSync('dns-records.csv', csvContent);

console.log('✅ DNS records exported to dns-records.csv');
console.log('📊 Summary:');
console.log(`   - ${dnsRecords.length} existing DNS records`);
console.log(`   - ${vercelRecords.length} proposed Vercel records`);
console.log('\n📝 Categories:');
const categories = [...new Set([...dnsRecords, ...vercelRecords].map(r => r.category || 'Vercel Subdomains'))];
categories.forEach(cat => {
  const count = [...dnsRecords, ...vercelRecords].filter(r => (r.category || 'Vercel Subdomains') === cat).length;
  console.log(`   - ${cat}: ${count} records`);
});