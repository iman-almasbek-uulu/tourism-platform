export interface HotelType {
    id: number,
    name: string;
    hotel_image: string[]; 
    average_rating: number; 
    rating_count: number; 
    region: string,
    popular_places: string
}

export interface HotelItemType {
    id: number;
    name: string;
    hotel_image: string[]; // Массив строк для изображений отеля
    address: string;
    bedroom: number;
    bathroom: number;
    cars: number;
    bikes: number;
    pets: number;
    amenities: string[]; // Массив строк для удобств
    safety_and_hygiene: string;
    price_short_period: number; // Цена за короткий срок аренды
    price_medium_period: number; // Цена за средний срок аренды
    price_long_period: number; // Цена за длительный срок аренды
  }
  

export interface Cafe {
    id: number; 
    kitchen_name: string; 
    price: number; 
    type_of_cafe: string[]; 
    average_rating: number; 
    rating_count: number; 
    main_image: string; 
}

interface KitchenLocation {
    id: number;
    address: string;
    Website: string;
    email: string;
    phone_number: string;
    kitchen: string;
  }

export interface CafeItem {
    id: number;
    kitchen_name: string;
    main_image: string | null;
    kitchen_image: {
      id: number;
      image: string;
    }[];
    price: number;
    specialized_menu: string;
    meal_time: string[];
    description: string;
    average_rating: number;
    rating_count: number;
    nutrition_rating: number;
    service_rating: number;
    price_rating: number;
    atmosphere_rating: number;
    kitchen: KitchenLocation[];
  }