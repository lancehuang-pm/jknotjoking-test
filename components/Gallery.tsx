import React from 'react';
import { GALLERY_PHOTOS } from '../constants';

const Gallery: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-stone-800 mb-2 tracking-wide">Captured Moments</h2>
          <p className="text-stone-400 text-lg tracking-wider">幸福瞬間</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {GALLERY_PHOTOS.map((photo, index) => (
            <div 
              key={photo.id}
              className={`relative group overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-xl cursor-pointer
                ${photo.size === 'large' ? 'col-span-2 row-span-2' : ''}
                ${photo.size === 'medium' ? 'col-span-2 md:col-span-1 row-span-2' : ''}
                ${photo.size === 'small' ? 'col-span-1 row-span-1' : ''}
              `}
            >
              <img 
                src={photo.url} 
                alt="Wedding moment" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;