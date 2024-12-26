export interface HotelType {
    id: number,
    name: string;
    hotel_image: string[]; 
    average_rating: number; 
    rating_count: number; 
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
  