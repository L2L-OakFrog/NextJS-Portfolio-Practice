// VideoGallery.tsx
'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 'video1',
    title: 'Telemarketing Best Practices',
    embedUrl: ' ', // Example telemarketing training video
    thumbnail: 'https://img.youtube.com/vi/7KXGZAEWzn0/maxresdefault.jpg',
    description: 'Industry-standard telemarketing techniques we employ'
  },
  {
    id: 'video2',
    title: 'Lead Generation Process',
    embedUrl: 'https://www.youtube.com/embed/wXeuYtxVhwY', // Example lead gen explanation
    thumbnail: 'https://img.youtube.com/vi/wXeuYtxVhwY/maxresdefault.jpg',
    description: 'How professional lead generation typically works'
  },
  {
    id: 'video3',
    title: 'CRM Integration Demo',
    embedUrl: 'https://www.youtube.com/embed/5B2XQ5gL9d0', // Example CRM integration
    thumbnail: 'https://img.youtube.com/vi/5B2XQ5gL9d0/maxresdefault.jpg',
    description: 'Similar to how we integrate with your systems'
  },
  {
    id: 'video4',
    title: 'Call Center Quality Assurance',
    embedUrl: 'https://www.youtube.com/embed/5Uj6WfIN7Rc', // Example QA process
    thumbnail: 'https://img.youtube.com/vi/5Uj6WfIN7Rc/maxresdefault.jpg',
    description: 'Our quality standards match industry best practices'
  },
  {
    id: 'video5',
    title: 'B2B Telemarketing Strategies',
    embedUrl: 'https://www.youtube.com/embed/9W6O7QDuQ4I', // Example B2B strategies
    thumbnail: 'https://img.youtube.com/vi/9W6O7QDuQ4I/maxresdefault.jpg',
    description: 'The approach we take for business clients'
  }
];

export const VideoGallery = () => {
  const [activeVideo, setActiveVideo] = useState(videos[0].id);
  const activeVideoData = videos.find(v => v.id === activeVideo);

  return (
    <div className="h-full p-4">
      {/* Main Video with Description */}
      <div className="mb-6">
        <div className="aspect-video w-full mb-2 bg-black rounded-lg overflow-hidden">
          <iframe
            src={`${activeVideoData?.embedUrl}?rel=0`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
            title={activeVideoData?.title}
          />
        </div>
        <div className="mt-2">
          <h3 className="text-lg font-semibold">{activeVideoData?.title}</h3>
          <p className="text-sm text-gray-300">{activeVideoData?.description}</p>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
        {videos.map((video) => (
          <motion.div
            key={video.id}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveVideo(video.id)}
            className={`cursor-pointer aspect-video rounded overflow-hidden ${activeVideo === video.id ? 'ring-2 ring-blue-500' : 'opacity-70 hover:opacity-100'}`}
          >
            <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VideoGallery;