import InstagramSection from '@/components/home/InstagramSection';
import Newsletter from '@/components/home/Newsletter';
import PromoBanner from '@/components/home/PromoBanner';
import CollectionPage from '@/components/shop/CollectionPage'
import React from 'react'

const Shop = () => {
    return (
        <>
        <CollectionPage />
        <PromoBanner/>
        <InstagramSection/>
        <Newsletter/>
        </>
    )
}

export default Shop;