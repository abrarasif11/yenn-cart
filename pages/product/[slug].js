import ProductDetailsCarousel from '@/components/ProductDetailsCarousel';
import RelatedProducts from '@/components/RelatedProducts';
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
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Golf Shoes
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                MRP : $15.00
                            </p>
                            {/* {p.original_price && (
                                <>
                                    <p className="text-base  font-medium line-through">
                                        &#8377;{p.original_price}
                                    </p>
                                    <p className="ml-auto text-base font-medium text-green-500">
                                        {getDiscountedPricePercentage(
                                            p.original_price,
                                            p.price
                                        )}
                                        % off
                                    </p>
                                </>
                            )} */}
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>
                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* size start */}
                            <div className='grid grid-cols-3 gap-2'>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 6
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 9
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 12
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 15
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer'>
                                    UK 18
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50'>
                                    UK 21
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50'>
                                    UK 24
                                </div>
                                <div className='border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed opacity-50'>
                                    UK 27
                                </div>
                            </div>
                            {/* size end */}
                        </div>
                        {/* Show error start */}
                        <div className='text-red-600 mt-1 mb-5'>
                            Size selection is required
                        </div>
                        {/* Show error end */}

                        {/* SIZE Range END */}

                        {/* ADD TO CART BUTTON START */}
                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>
                        {/* ADD TO CART BUTTON END */}

                        {/* WHISHLIST BUTTON START */}
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>
                        {/* WHISHLIST BUTTON END */}

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                            </div>
                            <div className="markdown text-md mb-5">
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                                Feel unbeatable from the box.
                            </div>
                        </div>
                    </div>
                </div>
                <RelatedProducts></RelatedProducts>
            </Wrapper>
        </div>
    )
}

export default ProductDetails;