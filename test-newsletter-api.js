// Test newsletter API specifically
console.log('Testing newsletter API issue...');

const testNewsletterAPI = async () => {
  try {
    const username = process.env.ADMIN_USERNAME || 'admin';
    const password = process.env.ADMIN_PASSWORD || 'password123';
    const token = Buffer.from(`${username}:${password}`).toString('base64');
    
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    console.log('Making request to newsletter API...');
    const response = await fetch('http://localhost:3000/api/admin/newsletters', { 
      headers,
      method: 'GET'
    });

    console.log('Status:', response.status);
    console.log('Headers:', Object.fromEntries(response.headers.entries()));

    const responseText = await response.text();
    console.log('Raw response:', responseText);

    try {
      const data = JSON.parse(responseText);
      console.log('Parsed response:', data);
    } catch (e) {
      console.log('Could not parse JSON:', e.message);
    }

  } catch (error) {
    console.error('Request failed:', error);
  }
};

testNewsletterAPI();