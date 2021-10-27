import React from 'react';
import ProfilePic from '../../public/profile-pic.png';
import Image from 'next/image';
import MenuListItem from './MenuListItem';
import c from './mobileNavigation.module.scss';

interface Props {
    isOpen: boolean;
}

const MobileNavigation = (isOpen: Props) => {
    return (
        <div className={c.mobileNavigation}>
            <ol className={c.menuSettings}>
                <MenuListItem>
                    <Image className="inline-block" src={ProfilePic} height="32" width="32" />
                    <div className="inline-block pl-2">
                        <div>Username</div>
                        <div className="text-[11.5px] leading-[0px] font-normal">Switch Profiles</div>
                    </div>
                </MenuListItem>
                <MenuListItem text="Account" />
                <MenuListItem text="Help Centre" />
                <MenuListItem text="Sign out of Netflix" />
            </ol>
            <ol>
                <MenuListItem text="Home" />
                <MenuListItem text="My List" />
            </ol>
            <ol className={c.genreList}>
                <MenuListItem text="Thrillers" />
                <MenuListItem text="Crime" />
                <MenuListItem text="Children & Family" />
                <MenuListItem text="International Films & TV" />
                <MenuListItem text="Reality TV" />
                <MenuListItem text="Action" />
                <MenuListItem text="Anime" />
                <MenuListItem text="Comedies" />
                <MenuListItem text="Fantasy" />
                <MenuListItem text="Sci-Fi" />
                <MenuListItem text="Horror" />
                <MenuListItem text="Stand-up Comedy" />
                <MenuListItem text="Documentaries" />
                <MenuListItem text="Music & Musicals" />
                <MenuListItem text="Romance" />
                <MenuListItem text="Dramas" />
                <MenuListItem text="British Movies & TV" />
            </ol>
        </div>
    );
};

export default MobileNavigation;
