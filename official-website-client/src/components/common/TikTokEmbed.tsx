import React, { useEffect } from 'react';

const TikTokEmbed: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='h-full bg-white w-full'>
      <blockquote
        className="tiktok-embed"
        cite="https://www.tiktok.com/@gvbajarealty"
        data-unique-id="gvbajarealty"
        data-embed-type="creator"
        style={{ maxWidth: '100%', minWidth: '288px' }}
      >
        <section>
          <a
            target="_blank"
            href="https://www.tiktok.com/@gvbajarealty?refer=creator_embed"
            rel="noopener noreferrer"
          >
            @gvbajarealty
          </a>
        </section>
      </blockquote>
    </div>
  );
};

export default TikTokEmbed;

