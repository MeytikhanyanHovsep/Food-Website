'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../button';
import {FaCartShopping} from 'react-icons/fa6';
import {useParallax} from 'react-scroll-parallax';

export default function Main() {
    const parallaxPizza1 = useParallax<HTMLImageElement>({
        translateY: [-50, 0],
        translateX: [-70, 0],
    });

    const parallaxPizza2 = useParallax<HTMLImageElement>({
        translateY: [50, 0],
        translateX: [-70, 0],
    });

    return (
        <main className='w-full h-[100vh] py-[50px] md:pt-[50px] grid place-items-center relative'>
            <Image
                src='/design/main_shape.png'
                width={130}
                height={130}
                alt=''
                className='absolute -translate-y-1/2 top-[40%] max-h-[130px] object-contain h-full left-[-30px] z-[-1]'
            />
            <Image
                src='/main.png'
                className='w-full h-full bg-dark object-cover absolute top-0 left-0 brightness-[50%] z-[-2]'
                width={1500}
                height={1000}
                alt=''
            />
            <div className='flex sm:flex-col sm:justify-center justify-between container items-center sm:gap-[50px] gap-[10px]'>
                <div className='max-w-[500px] lg:max-w-[400px] z-[1] flex flex-col sm:items-center md:max-w-[300px]'>
                    <h4 className='text-[90px] lg:leading-[60px] lg:text-[50px] leading-[100px] sm:text-center font-bold text-[white] mb-[30px]'>
                        Enjoy Your Food In Town
                    </h4>
                    <Button href='/menu'>
                        <FaCartShopping />
                        Order Now
                    </Button>
                </div>
                <div className='relative grid lg:max-h-[320px] place-items-start sm:min-w-[330px] sm:min-h-[308px] sm:max-h-[309px] sm:w-full lg:max-w-[330px] z-[-1]'>
                    <Image
                        src='/design/main_shape_5.png'
                        width={200}
                        height={500}
                        alt=''
                        className='absolute max-h-full h-full right-[-20px] z-[-1] top-1/2 -translate-y-1/2 object-contain'
                    />
                    <Image
                        src='/design/main_shape_4.png'
                        width={120}
                        height={200}
                        alt=''
                        className='absolute sm:hidden max-h-[200px] object-contain h-full left-[-70px] z-[2] bottom-[-50px]'
                    />
                    <Image
                        src='/design/main_shape_3.png'
                        width={120}
                        height={120}
                        alt=''
                        className='absolute sm:hidden max-h-[120px] object-contain h-full right-[20px] z-[2] bottom-[-20px]  animate-bounce'
                    />
                    <Image
                        src='/design/main_shape_2.png'
                        width={150}
                        height={150}
                        alt=''
                        className='absolute sm:hidden max-h-[150px] object-contain h-full left-[-70px] z-[2] top-[-50px] animate-pulse'
                    />
                    <div className='absolute translate-y-1/2 translate-x-1/4 z-[-1] max-w-[220px] lg:top-[2px] lg:left-[-52px] lg:translate-x-1/2 object-contain lg:max-w-[150px] top-[-5px] left-[-30px]'>
                        <Image
                            ref={parallaxPizza1.ref}
                            alt=''
                            width={300}
                            height={200}
                            src='/design/pizza_slice_1.png'
                        />
                    </div>
                    <div className='absolute bottom-[57px] rotate-[2deg] translate-y-1/6  translate-x-1/4 lg:left-[-17px] lg:bottom-[46px] left-[-27px] lg:max-w-[145px] z-[-1] max-w-[200px] object-contain'>
                        <Image
                            ref={parallaxPizza2.ref}
                            alt=''
                            width={300}
                            height={200}
                            src='/design/pizza_slice_2.png'
                        />
                    </div>
                    <Image
                        alt=''
                        width={550}
                        height={550}
                        src='/design/main_pizza.png'
                        className='z-[1] sm:absolute top-0 left-0 lg:max-w-[330px] w-[450px] max-w-[450px] object-contain'
                    />
                </div>
            </div>
        </main>
    );
}
