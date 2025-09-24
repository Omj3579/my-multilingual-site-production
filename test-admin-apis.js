// Test admin APIs
console.log('Testing admin APIs...');

const testAdminAPIs = async () => {
  try {
    // Get token from localStorage (this simulates what the dashboard does)
    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'password123';
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    
    console.log('Using token for admin authentication');

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    console.log('Testing contacts API...');
    const contactsRes = await fetch('http://localhost:3000/api/admin/contacts', { headers });
    console.log('Contacts API status:', contactsRes.status);
    if (contactsRes.ok) {
      const contactsData = await contactsRes.json();
      console.log('Contacts data:', contactsData);
      console.log('Number of contacts:', contactsData.data?.length || 0);
    } else {
      const errorData = await contactsRes.text();
      console.log('Contacts API error:', errorData);
    }

    console.log('\nTesting newsletters API...');
    const newslettersRes = await fetch('http://localhost:3000/api/admin/newsletters', { headers });
    console.log('Newsletters API status:', newslettersRes.status);
    if (newslettersRes.ok) {
      const newslettersData = await newslettersRes.json();
      console.log('Newsletters data:', newslettersData);
      console.log('Number of newsletters:', newslettersData.data?.length || 0);
    } else {
      const errorData = await newslettersRes.text();
      console.log('Newsletters API error:', errorData);
    }

    console.log('\nTesting quotes API...');
    const quotesRes = await fetch('http://localhost:3000/api/admin/quotes', { headers });
    console.log('Quotes API status:', quotesRes.status);
    if (quotesRes.ok) {
      const quotesData = await quotesRes.json();
      console.log('Quotes data:', quotesData);
      console.log('Number of quotes:', quotesData.data?.length || 0);
    } else {
      const errorData = await quotesRes.text();
      console.log('Quotes API error:', errorData);
    }

  } catch (error) {
    console.error('Error testing admin APIs:', error);
  }
};

testAdminAPIs();