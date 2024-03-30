import React from 'react';
import {IoSearch} from 'react-icons/io5';
import {CgClose} from 'react-icons/cg';
import Link from 'next/link';
import {IoPersonOutline} from 'react-icons/io5';
import {TbMenuDeep as FaMenu} from 'react-icons/tb';
import {FiShoppingBag} from 'react-icons/fi';
import {MdOutlineRestaurantMenu as MenuClose} from 'react-icons/md';

type Props = {
    searchToggle: boolean;
    setSearchToggle: any;
    menuToggle: boolean;
    setMenuToggle: any;
    isHomePage: boolean;
};

export default function NavTools({
    searchToggle,
    setSearchToggle,
    menuToggle,
    setMenuToggle,
    isHomePage,
}: Props) {
    return (
        <div className='flex items-center pt-[5px] gap-[25px]'>
            <button
                className='w-[22px] h-[22px] relative'
                onClick={() => setSearchToggle(!searchToggle)}
            >
                <span
                    className={
                        searchToggle
                            ? 'opacity-1'
                            : 'opacity-0' +
                              ' transition-opacity duration-500 absolute left-1/2 grid place-items-center -translate-x-1/2 top-1/2 -translate-y-1/2 min-w-full min-h-full'
                    }
                >
                    <CgClose
                        color={isHomePage ? 'white' : '#121619'}
                        className='w-full h-full'
                    />
                </span>
                <span
                    className={
                        searchToggle
                            ? 'opacity-0'
                            : 'opacity-1' +
                              ' transition-opacity duration-500 grid place-items-center min-h-[25px] pb-[2px]'
                    }
                >
                    <IoSearch
                        color={isHomePage ? 'white' : '#121619'}
                        className='w-full h-full'
                    />
                </span>
            </button>
            <Link href=''>
                <IoPersonOutline
                    width={25}
                    height={25}
                    color={isHomePage ? 'white' : '#121619'}
                    className='w-[22px] h-[22px]'
                />
            </Link>
            <Link href=''>
                <FiShoppingBag
                    width={25}
                    height={25}
                    color={isHomePage ? 'white' : '#121619'}
                    className='w-[22px] h-[22px]'
                />
            </Link>
            <button
                className='w-[22px] md:block hidden h-[22px] relative'
                onClick={() => setMenuToggle((val: boolean) => !val)}
            >
                <span
                    className={
                        menuToggle
                            ? 'opacity-1'
                            : 'opacity-0' +
                              ' transition-opacity duration-500 grid place-items-center min-h-[25px] pb-[2px]'
                    }
                >
                    <MenuClose
                        color={isHomePage ? 'white' : '#121619'}
                        className='w-full h-full'
                    />
                </span>
                <span
                    className={
                        menuToggle
                            ? 'opacity-0'
                            : 'opacity-1' +
                              ' transition-opacity duration-500 absolute left-1/2 grid place-items-center -translate-x-1/2 top-1/2 -translate-y-1/2 min-w-full min-h-full'
                    }
                >
                    <FaMenu
                        color={isHomePage ? 'white' : '#121619'}
                        className='w-full h-full'
                    />
                </span>
            </button>
        </div>
    );
}
