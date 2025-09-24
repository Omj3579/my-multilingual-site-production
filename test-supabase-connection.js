// Test what tables exist in production Supabase
const fetch = require('node-fetch');

const adminUsername = 'admin';
const adminPassword = 'L8~().]:\'-ng8{i='; // From .env.local (escaped quote)

const credentials = Buffer.from(`${adminUsername}:${adminPassword}`).toString('base64');

async function testSupabaseConnection() {
  console.log('Testing Supabase connection on production...');
  
  // Test if contacts table works (we know this works)
  try {
    const response = await fetch('https://flair-plastic.hu/api/admin/contacts', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${credentials}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Contacts API status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Contacts working - found', data.data?.length || 0, 'records');
      console.log('Sample contact record structure:', data.data?.[0] ? Object.keys(data.data[0]) : 'No records');
    }

  } catch (error) {
    console.error('Contacts API failed:', error.message);
  }
}

testSupabaseConnection();