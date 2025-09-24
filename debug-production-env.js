// Test what Supabase URL the production API is actually using
const fetch = require('node-fetch');

const adminUsername = 'admin';
const adminPassword = 'L8~().]:\'-ng8{i=';
const credentials = Buffer.from(`${adminUsername}:${adminPassword}`).toString('base64');

async function testProductionEnvironment() {
  console.log('Testing what environment variables production is using...');
  
  try {
    // Create a temporary debug API endpoint test
    const response = await fetch('https://flair-plastic.hu/api/admin/newsletters', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${credentials}`,
        'Content-Type': 'application/json'
      }
    });

    console.log('Production API response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Production API working!');
      console.log('Data count:', data.data?.length || 0);
    } else {
      const errorText = await response.text();
      console.log('❌ Production API error:');
      console.log('Error response:', errorText);
      
      try {
        const errorJson = JSON.parse(errorText);
        console.log('Error details:', errorJson);
      } catch (e) {
        console.log('Raw error text:', errorText);
      }
    }

  } catch (error) {
    console.error('Request failed:', error.message);
  }
  
  console.log('\n--- COMPARING ENVIRONMENTS ---');
  console.log('Local Supabase URL: https://vjnixebfwpfzclvxyuoh.supabase.co');
  console.log('Screenshots show: https://qpzqxugaxmmcxibobrnz.supabase.co');
  console.log('');
  console.log('The issue might be:');
  console.log('1. Production Vercel env vars point to the wrong Supabase project');
  console.log('2. Or production Supabase project has different RLS policies');
  console.log('3. Or the service role key is wrong for the production project');
}

testProductionEnvironment();