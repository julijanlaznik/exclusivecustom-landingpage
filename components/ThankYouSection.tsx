
import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

const ThankYouSection: React.FC = () => {
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
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black mb-12 font-sans tracking-tight max-w-4xl mx-auto leading-tight">
          Pokud řešíte ochranu auta teď, jste o krok napřed.
        </h2>
        
        <div className="relative max-w-5xl mx-auto group">
          {/* Decorative background element */}
          <div className="absolute -inset-6 bg-brand/5 rounded-[3rem] blur-3xl -z-10"></div>
          
          {/* Video Container */}
          <div 
            className="relative aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-black shadow-2xl border border-gray-100 cursor-pointer"
            onClick={togglePlay}
          >
            <video 
              ref={videoRef}
              src="https://assets.mixkit.co/videos/preview/mixkit-man-polishing-a-car-with-a-machine-41584-large.mp4" 
              poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200"
              className="w-full h-full object-cover"
              playsInline
              onEnded={() => setIsPlaying(false)}
            />
            
            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors duration-300">
                <div className="w-20 h-20 bg-brand rounded-full flex items-center justify-center text-black shadow-2xl transform group-hover:scale-110 transition-transform duration-300">
                  <Play size={40} fill="currentColor" className="ml-1" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYouSection;
