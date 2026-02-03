import PromoBanner from '@/components/home/PromoBanner'
import ProductDetailPage from '@/components/product/ProductDetailPage'
import DealsOfTheMonth from '@/components/home/DealsSection'
import React from 'react'
import Newsletter from '@/components/home/Newsletter'

const Product = () => {
  return (
   <>
   <ProductDetailPage/>
   <PromoBanner/>
   <DealsOfTheMonth />
   <Newsletter/>
   </>
  )
}

export default Product