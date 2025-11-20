export interface Guest {
  name: string;
  tableNumber: number;
}

export interface TableData {
  tableNumber: number;
  guests: string[];
}

export interface Photo {
  id: number;
  url: string;
  size: 'small' | 'medium' | 'large';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
