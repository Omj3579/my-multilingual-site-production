// Test production API with detailed error reporting to see debug info
const fetch = require('node-fetch');

const adminUsername = 'admin';
const adminPassword = 'L8~().]:\'-ng8{i='; // From .env.local (escaped quote)

const credentials = Buffer.from(`${adminUsername}:${adminPassword}`).toString('base64');

async function testProductionWithDebug() {
  console.log('Testing production API with debug info...');
  
  try {
    const response = await fetch('https://flair-plastic.hu/api/admin/newsletters', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${credentials}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Response status:', response.status);
    
    const responseText = await response.text();
    
    try {
      const data = JSON.parse(responseText);
      console.log('\n=== PRODUCTION API RESPONSE ===');
      console.log(JSON.stringify(data, null, 2));
      
      if (data.debug) {
        console.log('\n=== DEBUG INFO ===');
        console.log('Production Supabase URL:', data.debug.supabaseUrl);
        console.log('Error Code:', data.debug.errorCode);
        console.log('Error Details:', data.debug.errorDetails);
        console.log('Error Hint:', data.debug.errorHint);
      }
      
    } catch (parseError) {
      console.log('Raw response (not JSON):', responseText);
    }

  } catch (error) {
    console.error('Request failed:', error.message);
  }
}

testProductionWithDebug();