import React from 'react';
import { genres } from 'utils/routes';
import MenuListItem from './MenuListItem';
import c from './TabletNavigation.module.scss';

interface Props {}

const TabletNavigation = (props: Props) => {
    const displayGenres = genres.map((genre) => <MenuListItem key={genre.id} genreId={genre.id} text={genre.title} />);

    return (
        <div className={c.tabletMenu}>
            <ol className={c.accountMenu}>
                <MenuListItem href="/" text="Home" />
                <MenuListItem href="mylist" text="My List" />
            </ol>
            <ol className={c.genres}>{displayGenres}</ol>
        </div>
    );
};

export default TabletNavigation;
