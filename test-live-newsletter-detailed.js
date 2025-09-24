// Test live newsletter API with detailed error reporting
const fetch = require('node-fetch');

const adminUsername = 'admin';
const adminPassword = 'L8~().]:\'-ng8{i='; // From .env.local (escaped quote)

const credentials = Buffer.from(`${adminUsername}:${adminPassword}`).toString('base64');

async function testLiveNewsletterAPI() {
  console.log('Testing LIVE newsletter API with detailed error reporting...');
  
  try {
    const response = await fetch('https://flair-plastic.hu/api/admin/newsletters', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${credentials}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Response status:', response.status);
    console.log('Response headers:', Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log('Raw response:', responseText);
    
    try {
      const data = JSON.parse(responseText);
      console.log('Parsed response:', JSON.stringify(data, null, 2));
    } catch (parseError) {
      console.log('Response is not valid JSON');
    }

  } catch (error) {
    console.error('Request failed:', error);
  }
}

testLiveNewsletterAPI();