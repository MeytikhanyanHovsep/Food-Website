import React from 'react';
import Link from 'next/link';

type Props = {
    href: string;
    children: React.ReactNode;
};

export default function Button({children, href}: Props) {
    return (
        <Link
            href={href}
            className='text-[white] bg-current font-[500] uppercase rounded-[30px] flex items-center hover:text-dark max-h-min justify-center cursor-pointer gap-[10px] text-[16px] py-[13px] px-[30px] max-w-max'
        >
            {children}
        </Link>
    );
}
