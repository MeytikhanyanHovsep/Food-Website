'use client';
import Link from 'next/link';
import React from 'react';
import {motion, useAnimation} from 'framer-motion';
import {IoSearch} from 'react-icons/io5';

type Props = {
    path: string;
    searchToggle: boolean;
    menuToggle: boolean;
};

export default function NavMenu({path, searchToggle, menuToggle}: Props) {
    const menu: string[] = ['Home', 'Menu', 'About Us', 'News', 'Contacts'];

    return (
        <div
            className={`w-full relative md:order-[3] md:static duration-500 transition-all flex items-center justify-center ${
                !menuToggle ? 'md:h-0' : 'md:h-[auto]'
            }`}
        >
            <motion.ul
                initial={{opacity: 1, zIndex: 100}}
                animate={{
                    opacity: searchToggle ? 0 : 1,
                    zIndex: searchToggle ? -1 : 100,
                }}
                className={`top-0 md:relative md:top-0 md:flex-col md:w-full flex gap-[20px] items-center md:before:content-[""] md:py-[20px] before:absolute md:before:min-w-[150%] before:top-0 before:transition-all md:items-start before:left-[-25%] md:before:bg-[white] ${
                    menuToggle
                        ? 'md:before:h-full'
                        : 'md:hidden md:before:h-full'
                }`}
            >
                {menu.map((e, i) => {
                    let href =
                        i == 0 ? '' : e.toLowerCase().replaceAll(' ', '-');
                    let isCurrentPage =
                        path.includes(e.toLowerCase().replaceAll(' ', '-')) ||
                        (path == '/' && e == 'Home');
                    let isHome = path == '/';

                    return (
                        <li key={i}>
                            <Link
                                href={`/${href}`}
                                className={
                                    'text-[16px] px-[5px] font-[500] relative before:absolute before:content-[""] before:h-[1.5px] before:bottom-[-5px] before:left-0 before:rounded-full before:transition-all before:w-[0px] md:before:h-0 md:before:bg-[transparent] before:bg-current md:hover:before:w-0 hover:before:w-full hover:text-current transition-colors md:before:content-0 ' +
                                    (isCurrentPage
                                        ? 'text-current before:w-full md:text-dark'
                                        : isHome
                                        ? 'text-[white] md:text-dark'
                                        : 'text-dark')
                                }
                            >
                                {e}
                            </Link>
                        </li>
                    );
                })}
            </motion.ul>
            <motion.form
                initial={{opacity: 0, zIndex: -1}}
                transition={{type: 'spring', duration: 0.5}}
                animate={{
                    ...(searchToggle
                        ? {opacity: 1, zIndex: 100, width: '100%'}
                        : {opacity: 0, zIndex: -1, width: '50%'}),
                }}
                className='overflow-hidden py-[10px] px-[20px] rounded-[30px] shadow-[0_0_3px_#b3b3b3] justify-between absolute top-1/2 -translate-y-1/2 w-full left-1/2 -translate-x-1/2 gap-[20px] flex'
                // onSubmit={e => handleSearch(e)}
            >
                <input
                    placeholder='Search...'
                    className='w-full outline-0 text-[white] bg-[transparent]'
                />
                <button>
                    <IoSearch
                        color={path == '/' ? 'white' : '#121619'}
                        className='w-[23px] h-[23px]'
                    />
                </button>
            </motion.form>
        </div>
    );
}
