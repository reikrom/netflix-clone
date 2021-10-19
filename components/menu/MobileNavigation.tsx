import React from 'react';
import ProfilePic from '../../public/profile-pic.png';
import Image from 'next/image';

interface Props {
    isOpen: boolean;
}

const MobileMenu = (isOpen: Props) => {
    return (
        <div
            id="header-navigation-slider"
            className="absolute -left-5 top-9 bg-dark-4 z-20 text-text-1 font-bold  leading-8"
            style={{ height: '100vh', width: '250px' }}
        >
            <ol id="navigation-menu-settings">
                <li>
                    <Image className="inline-block" src={ProfilePic} height="32" width="32" />
                    <div className="inline-block">
                        <div>Username</div>
                        <div>Switch Profiles</div>
                    </div>
                </li>
                <li>Account</li>
                <li>Help Centre</li>
                <li>Sign out of Netflix</li>
            </ol>
            <ol id="navigation-menu-sections">
                <li>Home</li>
                <li>My List</li>
            </ol>
            <ol id="navigation-menu-genres">
                <li>Thrillers</li>
                <li>Crime</li>
                <li>Children & Family</li>
                <li>International Films & TV</li>
                <li>Reality TV</li>
                <li>Action</li>
                <li>Anime</li>
                <li>Comedies</li>
                <li>Fantasy</li>
                <li>Sci-Fi</li>
                <li>Horror</li>
                <li>Stand-up Comedy</li>
                <li>Documentaries</li>
                <li>Music & Musicals</li>
                <li>Romance</li>
                <li>Dramas</li>
                <li>British Movies & TV</li>
            </ol>
        </div>
    );
};

export default MobileMenu;
