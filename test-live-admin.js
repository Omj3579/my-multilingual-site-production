// Test live admin APIs
console.log('Testing LIVE admin APIs...');

const testLiveAdminAPIs = async () => {
  try {
    const LIVE_DOMAIN = 'https://flair-plastic.hu'; // Your live domain
    
    // Use the same credentials as Vercel env vars
    const username = 'admin';
    const password = `L8~().]:'-ng8{i=`; // Your actual password from .env.local
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    
    console.log('Testing live admin APIs with authentication...');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    console.log('\n1. Testing LIVE contacts API...');
    const contactsRes = await fetch(`${LIVE_DOMAIN}/api/admin/contacts`, { headers });
    console.log('Live Contacts API status:', contactsRes.status);
    if (contactsRes.ok) {
      const contactsData = await contactsRes.json();
      console.log('✅ Live contacts working:', contactsData.data?.length || 0, 'contacts found');
    } else {
      const errorData = await contactsRes.text();
      console.log('❌ Live contacts error:', errorData);
    }

    console.log('\n2. Testing LIVE newsletters API...');
    const newslettersRes = await fetch(`${LIVE_DOMAIN}/api/admin/newsletters`, { headers });
    console.log('Live Newsletters API status:', newslettersRes.status);
    if (newslettersRes.ok) {
      const newslettersData = await newslettersRes.json();
      console.log('✅ Live newsletters working:', newslettersData.data?.length || 0, 'newsletters found');
    } else {
      const errorData = await newslettersRes.text();
      console.log('❌ Live newsletters error:', errorData);
    }

    console.log('\n3. Testing LIVE quotes API...');
    const quotesRes = await fetch(`${LIVE_DOMAIN}/api/admin/quotes`, { headers });
    console.log('Live Quotes API status:', quotesRes.status);
    if (quotesRes.ok) {
      const quotesData = await quotesRes.json();
      console.log('✅ Live quotes working:', quotesData.data?.length || 0, 'quotes found');
    } else {
      const errorData = await quotesRes.text();
      console.log('❌ Live quotes error:', errorData);
    }

  } catch (error) {
    console.error('❌ Error testing live admin APIs:', error);
  }
};

testLiveAdminAPIs();