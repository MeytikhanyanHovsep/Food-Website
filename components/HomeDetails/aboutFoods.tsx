import React from 'react';
import Image from 'next/image';

type Props = {};

export default function AboutFoods({}: Props) {
    return (
        <section className='py-[100px] relative overflow-hidden'>
            <div className='absolute w-full min-h-[150%] -translate-y-1/2 top-1/2 bg-[#fff8ef] z-[-3]'></div>
            <div className='container md:flex-col justify-center z-[2] items-center flex md:items-stretch gap-[70px]'>
                <div className='relative md:flex'>
                    <Image
                        src='/best_pizza.png'
                        width={450}
                        height={300}
                        alt=''
                        className='object-contain md:max-w-[600px] lg:max-w-auto md:w-full md:h-auto max-w-[450px]'
                    />
                    <Image
                        src='/design/best_shape.png'
                        width={350}
                        height={350}
                        alt=''
                        className='absolute object-contain left-[20px] bottom-[-50%] animate-bounce md:max-w-[350px] lg:max-w-[200px] z-[-1]'
                    />
                    <Image
                        src='/design/outline_2.png'
                        width={160}
                        height={60}
                        alt=''
                        className='absolute opacity-[0.3] object-contain right-[-20px] top-[-50px] z-[-1]'
                    />
                    <Image
                        src='/design/outline_5.png'
                        width={160}
                        height={140}
                        alt=''
                        className='absolute object-contain right-[-20px] bottom-[-50px] opacity-[0.3] z-[-1]'
                    />
                </div>
                <div className='flex flex-col items-start md:items-center'>
                    <div className='flex items-start uppercase flex-col max-w-min relative'>
                        <Image
                            src='/design/outline_3.png'
                            width={50}
                            height={110}
                            alt=''
                            className='absolute object-contain right-[30px] top-0 z-[-1]'
                        />
                        <p className='text-[64px] lg:text-[35px] text-dark'>
                            The Best{' '}
                        </p>
                        <h5 className='text-[160px] lg:text-[100px] text-current font-bold mb-[-45px] mt-[-50px]'>
                            Foods
                        </h5>
                        <p className='text-[64px] lg:text-[35px] text-dark self-end'>
                            Arround
                        </p>
                        <Image
                            src='/design/outline_8.png'
                            width={200}
                            height={25}
                            alt=''
                            className='object-contain w-[220px] absolute left-1/2 -translate-x-1/2 bottom-[-30px] max-w-[220px]'
                        />
                    </div>

                    <p className='text-[#616161] leading-[30px] drop-shadow-[0_0_2px_#fff] mt-[50px]'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s.
                    </p>
                </div>
            </div>
            <Image
                src='/design/outline_7.png'
                width={70}
                height={70}
                alt=''
                className='absolute object-contain -translate-x-1/2 right-1/4 z-[-1] bottom-0'
            />
            <Image
                src='/design/outline.png'
                width={180}
                height={180}
                alt=''
                className='absolute object-contain left-0 z-[-1] top-0'
            />
            <Image
                src='/design/outline_6.png'
                width={130}
                height={300}
                alt=''
                className='absolute opacity-[0.3] object-contain right-[0] z-[-1] bottom-0'
            />
            <Image
                src='/design/outline_4.png'
                width={100}
                height={120}
                alt=''
                className='absolute object-contain left-[0] z-[-1] bottom-0'
            />
        </section>
    );
}
