import Region from '@/components/pages/regions/region/Region';
import NavMap from '@/components/pages/regions/navMap/NavMap';
import React from 'react';
import Try from '@/components/pages/regions/try/Try';

const RegionPage = () => {
    return (
        <>
            <Region/>
            {/* <NavMap /> */}
            <Try />
        </>
    );
};

export default RegionPage;