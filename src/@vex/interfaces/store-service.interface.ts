export interface StoreService {
    id: number | string;
    label: string;
    price: string;
    icon: string;
    selected: boolean;
    disabled?: boolean;
  }
  