import React from 'react';
import { genres } from 'utils/routes';
import MenuListItem from './MenuListItem';
import c from './TabletNavigation.module.scss';
import cn from 'classnames';

interface Props {}

const TabletNavigation = (props: Props) => {
    const displayGenres = genres.map((genre) => (
        <MenuListItem
            className="listItem block w-[200px]"
            key={genre.id}
            genreId={genre.id}
            text={genre.title}
        />
    ));

    return (
        <div
            className={cn(
                c.tabletMenu,
                `
                bg-dark-4
                border-t-[3px]
                text-light-1
                absolute
                top-[42px]
                left-[155px]
                text-[14.5px]
                flex
                h-44
                w-[750px]
                mt-4
                p-4`
            )}
        >
            <ol className="accountMenu w-24">
                <MenuListItem href="/" text="Home" />
                <MenuListItem href="mylist" text="My List" />
            </ol>
            <ol
                className={cn(
                    c.genres,
                    `flex 
                    flex-col 
                    flex-wrap 
                    justify-between`
                )}
            >
                {displayGenres}
            </ol>
        </div>
    );
};

export default TabletNavigation;
