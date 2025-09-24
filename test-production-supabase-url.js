// Quick test to see what Supabase URL production is using
const fetch = require('node-fetch');

async function testProductionSupabaseUrl() {
  console.log('Testing what Supabase URL production is using...');
  
  try {
    const response = await fetch('https://flair-plastic.hu/api/admin/newsletters', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${Buffer.from('admin:L8~().]:\'-ng8{i=').toString('base64')}`,
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log('Response:', JSON.stringify(data, null, 2));
    
    if (data.debug && data.debug.supabaseUrl) {
      console.log('\n🔍 PRODUCTION SUPABASE URL:', data.debug.supabaseUrl);
      console.log('🏠 LOCAL SUPABASE URL: https://vjnixebfwpfzclvxyuoh.supabase.co');
      
      if (data.debug.supabaseUrl === 'https://vjnixebfwpfzclvxyuoh.supabase.co') {
        console.log('✅ URLs MATCH - Same database');
      } else {
        console.log('❌ URLs DIFFERENT - Different databases!');
      }
    }

  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

testProductionSupabaseUrl();