import React, { useState } from 'react';
import { css } from '@emotion/react';

import Logo from './Logo';
import Image from 'next/image';
import TabletNavigation from 'components/touch-header/TabletNavigation';
import MobileNavigation from './MobileNavigation';
import { Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/react';

import { HamburgerIcon, SearchIcon, CloseIcon, BellIcon } from '@chakra-ui/icons';
import ProfilePic from '../../public/profile-pic.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState({ mobile: false, tablet: false });

    const toggleTabletMenu = () => {
        setIsOpen((prevS) => ({ ...prevS, tablet: !prevS.tablet }));
    };
    const toggleMobileMenu = () => {
        setIsOpen((prevS) => ({ ...prevS, mobile: !prevS.mobile }));
    };

    return (
        <div>
            <div
                className="header-wrapper
                    flex
                    fixed 
                    items-center 
                    px-5 
                    h-11 
                    bg-dark-4 
                    bg-opacity-50 
                    top-0 
                    z-20 w-full
                    md:h-16
                    md:bg-opacity-100
                    md:px-[4%]"
            >
                <div
                    className="menu-icon
                        cursor-pointer
                        text-white
                        color-white
                        block
                        md:hidden
                        "
                >
                    <HamburgerIcon w={32} h={32} onClick={toggleMobileMenu} />
                </div>
                <Logo />
                <div
                    className="browse 
                      text-primary-red 
                        font-bold px-4 
                        hidden
                        md:block
                        ml-8
                        cursor-pointer"
                    onClick={toggleTabletMenu}
                >
                    Browse
                </div>
                {isOpen.tablet && <TabletNavigation />}
                <div
                    className="right-side 
                        ml-auto
                        flex
                        items-center"
                >
                    <InputGroup
                        id="search"
                        css={css`
                            height: 2.25rem;
                            border: 1px solid white;
                            justify-content: space-between;
                            max-width: 260px;
                            background: #00000050;
                        `}
                    >
                        <InputLeftAddon
                            className="px-2 text-white"
                            children={<SearchIcon h={13} w={13} />}
                        />
                        <Input
                            placeholder="Search"
                            css={css`
                                background: transparent;
                                color: white;
                                font-size: 14px;
                                width: 100%;
                                &:focus {
                                    outline: none;
                                }
                            `}
                            focusBorderColor="transparent"
                        />
                        <InputRightAddon
                            css={css`
                                color: white;
                                padding: 0 8px;
                                justify-self: flex-end;
                            `}
                            children={<CloseIcon h={13} w={13} />}
                        />
                    </InputGroup>
                    <BellIcon
                        w={21}
                        h={21}
                        css={css`
                            color: white;
                            margin-left: 16px;
                            margin-right: 8px;
                        `}
                    />
                    <div
                        className="account
                          text-light-4
                          items-center 
                          ml-6 
                          hidden
                          md:flex"
                    >
                        <div className="imgWrapper h-8 w-8">
                            <Image
                                className="profile-pic 
                                inline-block
                                rounded
                                "
                                src={ProfilePic}
                                height="52"
                                width="52"
                            />
                        </div>
                        <div className="inline-block pl-2 leading-8">
                            <div className="username">Username</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-0 relative">
                {isOpen.mobile && <MobileNavigation isOpen={isOpen.mobile} />}
                {isOpen.mobile && (
                    <div
                        className="backdrop
                            opacity-80 
                            h-screen 
                            w-screen 
                            fixed left-0 
                            top-0 
                            z-10
                            bg-dark-4"
                    />
                )}
            </div>
        </div>
    );
};

export default Header;
