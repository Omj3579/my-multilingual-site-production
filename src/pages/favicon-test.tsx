import Head from 'next/head';

export default function FaviconTest() {
  return (
    <>
      <Head>
        <title>Flair Plastic - Favicon Test</title>
        <link rel="icon" type="image/png" href="/logos/flair_plastic_logo_cmyk_mono_-_MAIN.png" />
        <link rel="shortcut icon" type="image/png" href="/logos/flair_plastic_logo_cmyk_mono_-_MAIN.png" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 flex items-center justify-center p-8">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center">
          <img 
            src="/logos/flair_plastic_logo_cmyk_mono_-_MAIN.png" 
            alt="Flair Plastic Logo" 
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Flair Plastic Favicon Test
          </h1>
          <p className="text-gray-600 mb-4">
            Check your browser tab! The Flair Plastic logo should be visible as the favicon.
          </p>
          <p className="text-sm text-orange-600 font-semibold">
            If you see this logo above, it should also be in your browser tab.
          </p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </>
  );
}
