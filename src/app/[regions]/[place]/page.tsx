"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Places from '@/components/pages/popularPlace/place/Places';
import PlacesPopular from '@/components/pages/popularPlace/placesPopular/PlacesPopular';
import Tabs_content from '@/components/pages/popularPlace/tabs_content/Tabs_content';


const PlacePage = () => {
    // const params = useParams()
    // console.log(params);
    
    
    return <>
        <Places />
        <Tabs_content />
        <PlacesPopular />
    </>;
};

export default PlacePage;