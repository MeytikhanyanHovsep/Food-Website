import React from 'react';
import Button from '../button';
import {FaCartShopping} from 'react-icons/fa6';
import Image from 'next/image';

export default function Promo() {
    return (
        <section className='container md:flex-col pt-[70px] pb-[100px] flex gap-[30px]'>
            <div className='py-[20px] w-1/2 md:w-full md:justify-center justify-end rounded-[20px] flex bg-cover bg-[url("/promo_1.jpg")]'>
                <div className='w-1/2 text-[36px] md:w-full md:items-center flex gap-[20px] flex-col justify-between leading-[45px] text-[white]'>
                    <h6 className='max-w-[100px] md:max-w-[250px] drop-shadow-sm uppercase font-semibold'>
                        Mexican green Wave
                    </h6>
                    <Button href='/menu'>
                        <FaCartShopping />
                        Order Now
                    </Button>
                </div>
            </div>
            <div className='py-[20px] w-1/2 md:w-full md:justify-center justify-end rounded-[20px] flex bg-cover bg-[url("/promo_1.jpg")] relative'>
                <div className='w-1/2 text-[36px] md:w-full md:items-center flex gap-[20px] flex-col justify-between leading-[45px] text-[white]'>
                    <h6 className='max-w-[100px] md:max-w-[250px] drop-shadow-sm uppercase font-semibold'>
                        Mexican green Wave
                    </h6>
                    <Button href='/menu'>
                        <FaCartShopping />
                        Order Now
                    </Button>
                </div>
                <Image
                    alt=''
                    width={300}
                    height={200}
                    src='/design/home_shape.png'
                    className='absolute max-w-[300px] object-contain bottom-[-100px] animate-bounce right-[-150px] z-[-1]'
                />
            </div>
        </section>
    );
}
