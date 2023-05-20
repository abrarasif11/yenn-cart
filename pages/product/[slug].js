import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import Wrapper from '@/components/Wrapper';
import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
const ProductDetails = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* Left col start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel></ProductDetailsCarousel>
                    </div>
                    {/* Right col start */}
                    <div className="flex-[1] py-3">Right</div>
                </div>
            </Wrapper>
        </div>
    )
}

export default ProductDetails;