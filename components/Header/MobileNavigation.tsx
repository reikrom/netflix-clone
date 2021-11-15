import React from 'react';
import ProfilePic from '../../public/profile-pic.png';
import Image from 'next/image';
import MenuListItem from './MenuListItem';
import c from './MobileNavigation.module.scss';
import cn from 'classnames';
import { genres } from '../../utils/routes';

interface Props {
    isOpen: boolean;
}

const MobileNavigation = (isOpen: Props) => {
    const displayGenres = genres.map((genre) => (
        <MenuListItem
            className="listItem pl-4"
            key={genre.id}
            genreId={genre.id}
            text={genre.title}
        />
    ));

    return (
        <div
            className={cn(
                c.mobileNavigation,
                `
                top-[44px]
                bg-dark-4 
                overflow-y-scroll 
                fixed 
                left-0  
                z-20 
                text-text-1 
                font-bold  
                leading-8 
                w-64
                `
            )}
        >
            <ol
                className="menuSettings 
                    pb-2
                    mb-2
                    border-b
                    border-dark-1"
            >
                <MenuListItem className="listItem pl-4" href="SwitchAccount">
                    <Image className="inline-block" src={ProfilePic} height="32" width="32" />
                    <div className="inline-block pl-2">
                        <div>Username</div>
                        <div className="text-[11.5px] leading-[0px] font-normal">
                            Switch Profiles
                        </div>
                    </div>
                </MenuListItem>
                <MenuListItem className="listItem pl-4" href="YourAccount" text="Account" />
                <MenuListItem className="listItem pl-4" href="en" text="Help Centre" />
                <MenuListItem className="listItem pl-4" href="Logout" text="Sign out of Netflix" />
            </ol>
            <ol>
                <MenuListItem className="listItem pl-4" href="/" text="Home" />
                <MenuListItem className="listItem pl-4" href="mylist" text="My List" />
            </ol>
            <ol className="genreList leading-loose">{displayGenres}</ol>
        </div>
    );
};

export default MobileNavigation;
