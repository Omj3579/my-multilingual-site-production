import React, { useState } from 'react';

interface VideoEmbedProps {
  // YouTube or Vimeo URL
  url: string;
  // Optional title for accessibility
  title?: string;
  // Optional width and height (default to 16:9 aspect ratio)
  aspectRatio?: '16:9' | '4:3' | '1:1';
  // Optional autoplay
  autoplay?: boolean;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({
  url,
  title = 'Embedded video',
  aspectRatio = '16:9',
  autoplay = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Get video ID and determine platform
  const getVideoInfo = (url: string) => {
    // YouTube URL patterns
    const youtubeRegex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const youtubeMatch = url.match(youtubeRegex);
    
    if (youtubeMatch && youtubeMatch[2].length === 11) {
      return {
        platform: 'youtube',
        id: youtubeMatch[2],
      };
    }
    
    // Vimeo URL patterns
    const vimeoRegex = /(?:vimeo)\.com.*(?:videos|video|channels|)\/([\d]+)/i;
    const vimeoMatch = url.match(vimeoRegex);
    
    if (vimeoMatch) {
      return {
        platform: 'vimeo',
        id: vimeoMatch[1],
      };
    }
    
    // Return null if no match
    return null;
  };
  
  const videoInfo = getVideoInfo(url);
  
  // Determine aspect ratio class
  const aspectRatioClass = 
    aspectRatio === '4:3' ? 'pt-[75%]' : 
    aspectRatio === '1:1' ? 'pt-[100%]' : 
    'pt-[56.25%]'; // 16:9 default
  
  // If URL is invalid, show error message
  if (!videoInfo) {
    return (
      <div className={`relative bg-gray-100 w-full ${aspectRatioClass}`}>
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          Invalid video URL
        </div>
      </div>
    );
  }
  
  // Determine embed URL based on platform
  let embedUrl = '';
  
  if (videoInfo.platform === 'youtube') {
    embedUrl = `https://www.youtube-nocookie.com/embed/${videoInfo.id}?rel=0&autoplay=${autoplay ? 1 : 0}`;
  } else if (videoInfo.platform === 'vimeo') {
    embedUrl = `https://player.vimeo.com/video/${videoInfo.id}?autoplay=${autoplay ? 1 : 0}`;
  }
  
  return (
    <div className="video-container">
      <div className={`relative w-full ${aspectRatioClass}`}>
        {/* Loading spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#fa9b6b]"></div>
          </div>
        )}
        
        <iframe
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={title}
          allowFullScreen
          onLoad={() => setIsLoaded(true)}
          allow={autoplay ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" : "accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}
        ></iframe>
      </div>
    </div>
  );
};

export default VideoEmbed;