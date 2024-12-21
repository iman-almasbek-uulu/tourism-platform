"use client"

import Region from '@/components/pages/regions/region/Region';
import NavMap from '@/components/pages/regions/navMap/NavMap';
import React from 'react';
import Try from '@/components/pages/regions/try/Try';
import Places from '@/components/pages/regions/places/Places';
import { useParams, useRouter } from 'next/navigation';


const RegionPage = () => {
    const params = useParams()
    
    
    return (
        <>
            <Region/>
            {/* <NavMap /> */}
            <Try />
            <Places/>
        </>
    );
};

export default RegionPage;