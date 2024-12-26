export interface WhatToTryItem {
    to_name: string;
    first_description: string,
    second_description: string,
    image: string; 
}

export interface PopularPlace {
    popular_name: string;
    popular_image: string;
    avg_rating: number;
    rating_count: number;
}

export interface RegionData {
    id: number,
    region_name: string; 
    region_image: string; 
    region_description: string; 
    What_to_try: WhatToTryItem[];
    popular_places: PopularPlace[]; 
    region_category: string

}


export interface PopularItem {
    popular_name: string;
    popular_image: string;
    description: string;
    popular_reviews: any[]; // Массив отзывов, если тип отзывов известен, можно заменить any на более точный тип
}
