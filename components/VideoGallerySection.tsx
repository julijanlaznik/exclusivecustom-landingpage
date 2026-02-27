
import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    url: '/igreel1.mp4',
  },
  {
    id: 2,
    url: '/igreel2.mp4',
  },
  {
    id: 3,
    url: '/igreel3.mp4',
  },
  {
    id: 4,
    url: '/igreel4.mp4',
  }
];

interface VideoItemProps {
  video: { id: number; url: string };
}

const VideoItem: React.FC<VideoItemProps> = ({ video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      className="flex-shrink-0 w-[260px] md:w-[300px] aspect-[9/16] rounded-[2rem] overflow-hidden bg-black relative shadow-lg border border-gray-100 group cursor-pointer"
      onClick={togglePlay}
    >
      <video 
        ref={videoRef}
        src={video.url}
        className="w-full h-full object-cover"
        playsInline
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* Play Button Overlay */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
          <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center text-black shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
            <Play size={32} fill="currentColor" className="ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

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
            <VideoItem key={video.id} video={video} />
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
