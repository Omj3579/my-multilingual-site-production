// Live site newsletter API test
// Replace 'your-live-domain.com' with your actual Vercel domain

console.log('Testing live site newsletter API...');

const testLiveSite = async () => {
  const LIVE_DOMAIN = 'https://your-live-domain.vercel.app'; // Replace with your actual domain
  
  try {
    console.log('Testing live API endpoint:', `${LIVE_DOMAIN}/api/newsletter`);
    
    const response = await fetch(`${LIVE_DOMAIN}/api/newsletter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'test-live-' + Date.now() + '@example.com',
        language: 'en',
        source: 'footer'
      }),
    });

    console.log('Live API Response status:', response.status);
    console.log('Live API Response ok:', response.ok);

    const responseText = await response.text();
    console.log('Live API Raw response:', responseText);

    if (responseText) {
      try {
        const result = JSON.parse(responseText);
        console.log('Live API Parsed result:', result);
        
        if (result.success) {
          console.log('✅ Live API is working correctly!');
        } else {
          console.log('❌ Live API returned error:', result.message);
        }
      } catch (e) {
        console.error('❌ Live API returned invalid JSON:', e.message);
        console.log('Response was:', responseText);
      }
    } else {
      console.log('❌ Live API returned empty response');
    }

  } catch (error) {
    console.error('❌ Failed to reach live API:', error);
  }
};

// Uncomment and run this with your actual domain
// testLiveSite();