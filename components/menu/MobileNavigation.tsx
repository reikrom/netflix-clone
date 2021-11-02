import React from 'react';
import ProfilePic from '../../public/profile-pic.png';
import Image from 'next/image';
import MenuListItem from './MenuListItem';
import c from './mobileNavigation.module.scss';
import { genres } from '../../utils/routes';

interface Props {
    isOpen: boolean;
}

const MobileNavigation = (isOpen: Props) => {
    const displayGenres = genres.map((genre) => <MenuListItem key={genre.id} genreId={genre.id} text={genre.title} />);

    return (
        <div className={c.mobileNavigation}>
            <ol className={c.menuSettings}>
                <MenuListItem href="SwitchAccount">
                    <Image className="inline-block" src={ProfilePic} height="32" width="32" />
                    <div className="inline-block pl-2">
                        <div>Username</div>
                        <div className="text-[11.5px] leading-[0px] font-normal">Switch Profiles</div>
                    </div>
                </MenuListItem>
                <MenuListItem href="YourAccount" text="Account" />
                <MenuListItem href="en" text="Help Centre" />
                <MenuListItem href="Logout" text="Sign out of Netflix" />
            </ol>
            <ol>
                <MenuListItem href="/" text="Home" />
                <MenuListItem href="myList" text="My List" />
            </ol>
            <ol className={c.genreList}>{displayGenres}</ol>
        </div>
    );
};

export default MobileNavigation;
