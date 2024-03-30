'use client';
import Image from 'next/image';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import React, {useRef, useState} from 'react';
import NavMenu from './navMenu';
import NavTools from './navTools';

export default function Header() {
    const path: string = usePathname();
    const logo: string =
        path == '/' ? '/icons/logo-white.png' : '/icons/logo.png';
    const [searchToggle, setSearchToggle] = useState<boolean>(false);
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    return (
        <header className='w-full absolute top-0 z-[10] left-0'>
            <nav
                className={`container md:flex-wrap gap-x-[50px] sm:gap-[10px] flex relative py-[20px] justify-between gap-y-20px`}
            >
                <Link href='/'>
                    <Image
                        src={logo}
                        width={160}
                        height={50}
                        className='sm:max-w-[110px] w-[160px] max-w-[160px] object-contain'
                        alt='Pizzle'
                    />
                </Link>
                <NavMenu
                    menuToggle={menuToggle}
                    path={path}
                    searchToggle={searchToggle}
                />
                <NavTools
                    menuToggle={menuToggle}
                    setMenuToggle={setMenuToggle}
                    searchToggle={searchToggle}
                    setSearchToggle={setSearchToggle}
                    isHomePage={path == '/'}
                />
            </nav>
        </header>
    );
}
