import React from 'react';

interface SeatingMapProps {
  highlightTable: number | null;
}

const SeatingMap: React.FC<SeatingMapProps> = ({ highlightTable }) => {
  // Generate simplified coordinates for 20 tables in a grid/layout
  const tables = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="bg-stone-100 p-6 rounded-xl border border-stone-200 overflow-hidden relative">
      <div className="absolute top-0 left-0 bg-stone-200 px-3 py-1 text-xs font-bold text-stone-500 rounded-br-lg">
        Stage / 舞台
      </div>
      
      {/* Stage representation */}
      <div className="w-1/2 mx-auto h-8 bg-wedding-dark/10 rounded-b-full mb-10 flex items-center justify-center">
        <span className="text-stone-400 text-xs tracking-widest font-bold">STAGE</span>
      </div>

      <div className="grid grid-cols-5 gap-4 md:gap-8 max-w-2xl mx-auto">
        {tables.map((tableNum) => {
            const isHighlighted = highlightTable === tableNum;
            return (
              <div 
                key={tableNum}
                className={`
                  relative aspect-square rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-500
                  ${isHighlighted 
                    ? 'bg-wedding-rose text-white border-wedding-rose scale-110 shadow-[0_0_15px_rgba(230,184,184,0.8)] z-10' 
                    : 'bg-white text-stone-600 border-stone-300 hover:border-stone-400'
                  }
                `}
              >
                {tableNum}
                {/* Chairs visualization (dots around) */}
                <div className="absolute inset-0 rounded-full border-[1px] border-dotted border-stone-300 scale-125 pointer-events-none opacity-50"></div>
              </div>
            );
        })}
      </div>
      
      <div className="mt-8 flex justify-center gap-6 text-xs text-stone-500 font-medium">
        <div className="flex items-center gap-2">
           <span className="w-3 h-3 bg-wedding-rose rounded-full"></span> Your Seat / 您的座位
        </div>
        <div className="flex items-center gap-2">
           <span className="w-3 h-3 bg-white border border-stone-300 rounded-full"></span> Other Tables / 其他桌次
        </div>
      </div>
    </div>
  );
};

export default SeatingMap;