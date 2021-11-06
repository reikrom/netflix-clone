import React from 'react';
import c from './WatchTitle.module.scss';

interface Props {
    href: string;
    cover?: string;
}

const WatchTitle = ({ href, cover = 'https://via.placeholder.com/150' }: Props) => {
    return (
        <a className={c.watchTitle} href={href}>
            <div style={{ backgroundImage: `url(${cover})` }} />
        </a>
    );
};

export default WatchTitle;
