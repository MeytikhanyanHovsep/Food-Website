'use client';
import React from 'react';
import Image from 'next/image';
import Plx from 'react-plx';

export default function MenuPreview() {
    let best: any[] = [0, 0, 0, 0, 0];
    let popular: any[] = [0, 0, 0, 0, 0];

    const plxPizza = [
        {
            start: 0,
            end: 220 + 'vh',
            properties: [
                {
                    startValue: 0,
                    endValue: Math.min(
                        document.documentElement.scrollHeight -
                            window.innerHeight,
                        450
                    ),
                    property: 'translateY',
                },
            ],
        },
    ];

    return (
        <section className='w-full bg-[#0000167d] relative before:z-[-1] before:saturate-100 before:w-full before:h-full before:content-[""] before:absolute pt-[170px] pb-[1000px] before:top-0 before:bg-cover before:bg-[url("/preview_menu_bg.jpg")] overflow-hidden'>
            <div className='container flex gap-[12px] justify-between'>
                <ul className='p-[30px] pt-[80px] relative border-[2px] border-current rounded-[30px] max-w-max flex flex-col gap-[15px]'>
                    <li className='absolute top-0 left-1/2 bg-current py-[5px] px-[30px] rounded-b-[20px] text-[28px] font-bold text-[white] -translate-x-1/2'>
                        Best
                    </li>
                    {best.map((_, i) => (
                        <li key={i} className='text-[white] font-[500]'>
                            <p className='text-[24px]'>
                                Santa Fe Pizza...{' '}
                                <span className='font-bold'>$24.7</span>
                            </p>
                            <p>Chicken breast, cheddar wrapped in a crispy</p>
                        </li>
                    ))}
                </ul>
                <div className='max-w-min flex text-[white] justify-end text-center flex-col h-full self-end'>
                    <p className='min-w-max mb-[20px] uppercase text-[36px]'>
                        Freshly made
                    </p>
                    <h5 className=' flex flex-col items-center uppercase  font-[500]'>
                        <span className='text-current my-[-50px] text-[100px]'>
                            foods
                        </span>{' '}
                        <span className='text-[80px]'>menu</span>
                    </h5>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                    </p>
                </div>
                <ul className='p-[30px] pt-[80px] relative border-[2px] border-current rounded-[30px] max-w-max flex flex-col gap-[15px]'>
                    <li className='absolute top-0 left-1/2 bg-current py-[5px] px-[30px] rounded-b-[20px] text-[28px] font-bold text-[white] -translate-x-1/2'>
                        Popular
                    </li>
                    {popular.map((_, i) => (
                        <li key={i} className='text-[white] font-[500]'>
                            <p className='text-[24px]'>
                                Santa Fe Pizza...{' '}
                                <span className='font-bold'>$24.7</span>
                            </p>
                            <p>Chicken breast, cheddar wrapped in a crispy</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='absolute top-[-450px] left-1/2 -translate-x-1/2'>
                <Plx parallaxData={plxPizza}>
                    <Image
                        src='/preview_menu_pizza.png'
                        alt=''
                        width={450}
                        height={450}
                        className=''
                    />
                </Plx>
            </div>
        </section>
    );
}
