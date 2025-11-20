import React from 'react';
import { WEDDING_CONFIG } from '../constants';
import { Calendar, MapPin, Clock } from 'lucide-react';

const InfoCard: React.FC<{ icon: React.ReactNode; title: string; text: string; subtext?: string }> = ({ icon, title, text, subtext }) => (
  <div className="flex flex-col items-center p-8 bg-white rounded-xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 h-full">
    <div className="text-wedding-rose mb-4 p-3 bg-rose-50 rounded-full">{icon}</div>
    <h3 className="text-lg font-sans font-bold text-stone-800 mb-4 uppercase tracking-widest">{title}</h3>
    <div className="text-stone-600 font-medium text-lg text-center whitespace-pre-line leading-relaxed">
        {text}
    </div>
    {subtext && (
        <div className="text-stone-400 text-sm mt-4 text-center whitespace-pre-line border-t border-stone-100 pt-4 w-full">
            {subtext}
        </div>
    )}
  </div>
);

const WeddingInfo: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-wedding-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-stone-800 mb-2 tracking-wide">
            You Are Invited
          </h2>
          <p className="text-stone-400 text-lg mb-4 tracking-wider">誠摯邀請</p>
          <p className="text-stone-500 max-w-lg mx-auto">
            在這個特別的日子裡，我們希望能與您分享這份喜悅。<br/>
            Please join us to celebrate our special day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          <InfoCard 
            icon={<Calendar size={28} />} 
            title="日期 / Date" 
            text={WEDDING_CONFIG.date} 
          />
          <InfoCard 
            icon={<Clock size={28} />} 
            title="時間 / Time" 
            text={WEDDING_CONFIG.time}
          />
          <InfoCard 
            icon={<MapPin size={28} />} 
            title="地點 / Location" 
            text={WEDDING_CONFIG.location}
            subtext={WEDDING_CONFIG.address}
          />
        </div>
        
        <div className="mt-12 text-center">
           <a 
            href={WEDDING_CONFIG.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-colors uppercase tracking-widest text-xs md:text-sm font-bold"
          >
            Google Maps Navigation / 地圖導航
          </a>
        </div>
      </div>
    </section>
  );
};

export default WeddingInfo;