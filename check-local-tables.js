// Check what tables exist locally
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

console.log('Supabase URL:', supabaseUrl ? 'Set' : 'Missing');
console.log('Service Key:', supabaseServiceKey ? 'Set' : 'Missing');

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

async function checkTables() {
  console.log('Checking available tables in local Supabase...');
  
  // Try to list tables by querying pg_tables
  try {
    const { data, error } = await supabase.rpc('get_table_info');
    if (data) {
      console.log('Tables found:', data);
    }
    if (error) {
      console.log('RPC error (expected):', error.message);
    }
  } catch (err) {
    console.log('RPC method not available (expected)');
  }

  // Let's try querying the newsletter_subscriptions table directly
  console.log('\n--- Testing newsletter_subscriptions table ---');
  const { data: newsletters, error: newsletterError } = await supabase
    .from('newsletter_subscriptions')
    .select('*')
    .limit(1);
    
  if (newsletterError) {
    console.log('Newsletter table error:', newsletterError);
  } else {
    console.log('Newsletter table exists! Sample record:', newsletters?.[0]);
    console.log('Columns:', newsletters?.[0] ? Object.keys(newsletters[0]) : 'No records');
  }

  // Let's also try different possible table names
  const possibleNames = ['newsletters', 'newsletter_subscription', 'email_subscriptions', 'subscriptions'];
  
  for (const tableName of possibleNames) {
    console.log(`\n--- Testing ${tableName} table ---`);
    const { data, error } = await supabase
      .from(tableName)
      .select('*')
      .limit(1);
      
    if (error) {
      console.log(`${tableName} error:`, error.message);
    } else {
      console.log(`${tableName} exists! Records found:`, data?.length || 0);
      if (data?.[0]) {
        console.log('Columns:', Object.keys(data[0]));
      }
    }
  }
}

checkTables().catch(console.error);