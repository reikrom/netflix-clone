import React from 'react';
import Link from 'next/link';

interface Props {
    text?: string;
    children?: any;
    genreId?: number;
    href?: string;
    className?: string;
}

const MenuListItem = ({ text, children, href, genreId, className }: Props) => {
    return (
        <li className={className}>
            {href ? (
                <Link href={href}>
                    <a>
                        {children}
                        {text}
                    </a>
                </Link>
            ) : (
                <Link href={`/browse/genres/${genreId}`}>
                    <a>
                        {children}
                        {text}
                    </a>
                </Link>
            )}
        </li>
    );
};

export default MenuListItem;
