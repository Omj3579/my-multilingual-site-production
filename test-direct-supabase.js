// Test production Supabase connection directly
const { createClient } = require('@supabase/supabase-js');

// Using the same environment variables that production should have
const supabaseUrl = 'https://qpzqxugaxmmcxibobrnz.supabase.co'; // From your screenshots
const supabaseServiceKey = 'your-service-role-key'; // We'll need to check this

console.log('Testing production Supabase connection directly...');
console.log('Supabase URL:', supabaseUrl);

async function testDirectSupabaseConnection() {
  // We need to get the actual service role key that's used in production
  console.log('\n--- ENVIRONMENT CHECK ---');
  console.log('We need to verify the SUPABASE_SERVICE_ROLE_KEY that production is using...');
  
  // First, let's test if we can connect with the public anon key
  // This should work for SELECT operations if RLS policies are correct
  
  console.log('\n--- TESTING WITH LOCAL ENV VARS ---');
  
  // Try to load the same env vars that should be in production
  require('dotenv').config({ path: '.env.local' });
  
  const localUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const localServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  console.log('Local URL:', localUrl);
  console.log('Local Service Key:', localServiceKey ? `${localServiceKey.substring(0, 10)}...` : 'MISSING');
  
  if (!localUrl || !localServiceKey) {
    console.log('❌ Missing local environment variables');
    return;
  }
  
  const supabase = createClient(localUrl, localServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  });
  
  try {
    console.log('\n--- TESTING NEWSLETTER TABLE ACCESS ---');
    
    const { data, error, count } = await supabase
      .from('newsletter_subscriptions')
      .select('*', { count: 'exact' })
      .limit(3);
      
    if (error) {
      console.log('❌ Supabase error:', error);
      console.log('Error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
    } else {
      console.log('✅ Direct Supabase connection works!');
      console.log(`Found ${count} total records`);
      console.log('Sample records:', data);
    }
    
  } catch (error) {
    console.log('❌ Connection failed:', error.message);
  }
  
  // Test RLS policies by trying different auth contexts
  console.log('\n--- TESTING RLS POLICIES ---');
  
  try {
    // Test with service role (should bypass RLS)
    const { data: serviceData, error: serviceError } = await supabase
      .from('newsletter_subscriptions')
      .select('count')
      .limit(1);
      
    if (serviceError) {
      console.log('❌ Service role access failed:', serviceError);
    } else {
      console.log('✅ Service role access works');
    }
    
  } catch (error) {
    console.log('❌ Service role test failed:', error.message);
  }
}

testDirectSupabaseConnection().catch(console.error);