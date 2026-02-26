
import React, { useRef } from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    url: '/igreel1.mp4',
    poster: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-cleaning-the-interior-of-a-car-41585-large.mp4',
    poster: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-washing-a-car-with-a-pressure-washer-41586-large.mp4',
    poster: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-polishing-a-car-with-a-machine-41584-large.mp4',
    poster: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
  }
];

const VideoGallerySection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="pb-24 bg-white overflow-hidden">
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto pb-4 hide-scrollbar cursor-grab active:cursor-grabbing"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex gap-4 px-4 sm:px-6 lg:px-8 pl-[calc(max(1rem,50vw-640px+1rem))] sm:pl-[calc(max(1.5rem,50vw-640px+1.5rem))] lg:pl-[calc(max(2rem,50vw-640px+2rem))]">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black relative shadow-lg border border-gray-100"
            >
              <video 
                src={video.url}
                poster={video.poster}
                controls
                className="w-full h-full object-cover"
                playsInline
              />
            </div>
          ))}
          {/* Extra spacer for right alignment */}
          <div className="flex-shrink-0 w-4 sm:w-6 lg:w-8"></div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default VideoGallerySection;
