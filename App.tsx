import React from 'react';
import Header from './components/Header';
import WeddingInfo from './components/WeddingInfo';
import Gallery from './components/Gallery';
import TableSearch from './components/TableSearch';
import GuestAssistant from './components/GuestAssistant';
import { Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Header />
      
      <main>
        <WeddingInfo />
        <Gallery />
        <TableSearch />
      </main>

      <footer className="bg-stone-900 text-stone-400 py-12 text-center">
        <div className="flex items-center justify-center gap-2 mb-4 text-wedding-rose">
          <Heart size={20} fill="currentColor" />
        </div>
        <p className="font-script text-3xl text-stone-300 mb-2">Jack & Kensey</p>
        <p className="text-xs tracking-wider uppercase opacity-60">Thank you for celebrating with us</p>
        <p className="text-[10px] mt-8 opacity-30">Designed with Love & React</p>
      </footer>

      <GuestAssistant />
    </div>
  );
};

export default App;