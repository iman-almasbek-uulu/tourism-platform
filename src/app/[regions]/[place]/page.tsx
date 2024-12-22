"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Places from '@/components/pages/popularPlace/place/Places';
import PlacesPopular from '@/components/pages/popularPlace/placesPopular/PlacesPopular';


const PlacePage = () => {
    // const params = useParams()
    // console.log(params);
    
    
    return <>
        <Places />
        <PlacesPopular />
    </>;
};

export default PlacePage;