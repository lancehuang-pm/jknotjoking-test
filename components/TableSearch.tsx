import React, { useState, useMemo } from 'react';
import { Search, User } from 'lucide-react';
import { ALL_GUESTS } from '../constants';
import SeatingMap from './SeatingMap';

const TableSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGuest, setSelectedGuest] = useState<{name: string, tableNumber: number} | null>(null);

  const filteredGuests = useMemo(() => {
    if (!searchTerm) return [];
    return ALL_GUESTS.filter(guest => 
      guest.name.includes(searchTerm)
    ).slice(0, 6); // Limit results
  }, [searchTerm]);

  const handleSelect = (guest: {name: string, tableNumber: number}) => {
    setSelectedGuest(guest);
    setSearchTerm(''); // Clear search to show result view cleanly
  };

  const resetSearch = () => {
    setSelectedGuest(null);
    setSearchTerm('');
  };

  return (
    <section className="py-20 px-4 bg-wedding-cream" id="seating">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-stone-800 mb-2 tracking-wide">Find Your Seat</h2>
          <p className="text-stone-400 text-lg mb-2 tracking-wider">座位查詢</p>
          <p className="text-stone-500 text-sm">Please enter your name to find your table / 請輸入您的姓名</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Left Panel: Search Logic */}
            <div className="flex-1">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-stone-100 h-full">
                    {!selectedGuest ? (
                        <>
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Name (e.g., 林靜)"
                                    className="w-full pl-12 pr-4 py-4 bg-stone-50 border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-rose/50 transition-all"
                                />
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-stone-400" size={20} />
                            </div>

                            {filteredGuests.length > 0 && (
                                <ul className="space-y-2">
                                    {filteredGuests.map((guest, idx) => (
                                        <li 
                                            key={`${guest.name}-${idx}`}
                                            onClick={() => handleSelect(guest)}
                                            className="flex items-center justify-between p-3 hover:bg-stone-50 rounded-lg cursor-pointer transition-colors group border-b border-stone-100 last:border-0"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="bg-stone-200 p-2 rounded-full group-hover:bg-wedding-rose group-hover:text-white transition-colors">
                                                    <User size={16} />
                                                </div>
                                                <span className="font-medium text-stone-700">{guest.name}</span>
                                            </div>
                                            <span className="text-stone-400 text-xs">Select / 選擇</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {searchTerm && filteredGuests.length === 0 && (
                                <div className="text-center py-8 text-stone-400 text-sm">
                                    No guest found / 查無此賓客
                                </div>
                            )}
                            {!searchTerm && (
                                <div className="text-center py-12 text-stone-300">
                                    <Search size={48} className="mx-auto mb-2 opacity-20" />
                                    <p className="text-sm">Please enter name above / 請在上方輸入姓名</p>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="text-center py-8 animate-fade-in">
                            <div className="w-20 h-20 bg-wedding-rose text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold shadow-lg">
                                {selectedGuest.tableNumber}
                            </div>
                            <h3 className="text-2xl font-sans font-bold text-stone-800 mb-1">Table {selectedGuest.tableNumber}</h3>
                            <p className="text-stone-400 mb-2">第 {selectedGuest.tableNumber} 桌</p>
                            <p className="text-lg text-stone-600 mb-8">Welcome, {selectedGuest.name}</p>
                            <button 
                                onClick={resetSearch}
                                className="text-sm text-stone-400 hover:text-stone-600 underline underline-offset-4"
                            >
                                Search Again / 查詢其他賓客
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Right Panel: Map Visualization */}
            <div className="flex-1">
                <SeatingMap highlightTable={selectedGuest?.tableNumber || null} />
            </div>
        </div>
      </div>
    </section>
  );
};

export default TableSearch;