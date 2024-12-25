export interface HotelType {
    name: string;
    hotel_image: string[]; 
    average_rating: number; 
    rating_count: number; 
}

export interface HotelItemType {
    name: string; // Название отеля
    hotel_image: string[]; // Массив изображений
    address: string; // Адрес отеля
    bedroom: number; // Количество спален
    bathroom: number; // Количество ванных комнат
    cars_bikes: string; // Информация об авто или велосипедах
    pets: number; // Информация о животных (возможно, количество)
    amenities: string; // Удобства
    safety_hygiene: string; // Безопасность и гигиена
    price_short_period: number; // Цена за короткий период
    price_medium_period: number; // Цена за средний период
    price_long_period: number; // Цена за длительный период
}
