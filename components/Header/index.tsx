import React, { useState } from 'react';
import c from './Header.module.scss';

import { Menu as MenuIcon } from '@mui/icons-material';
import { Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MobileNavigation from './MobileNavigation';
import ProfilePic from '../../public/profile-pic.png';
import Logo from './Logo';
import Image from 'next/image';
import cn from 'classnames';
import TabletNavigation from 'components/header/TabletNavigation';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
            <div className={c.header}>
                <div className={c.menuIcon}>
                    <MenuIcon onClick={toggleMobileMenu} className={c.menuIcon} />
                </div>
                <Logo />
                <div onClick={toggleTabletMenu} className={c.browse}>
                    Browse
                </div>
                {isOpen.tablet && <TabletNavigation />}
                <div className={c.rightSideHeader}>
                    <SearchIcon sx={{ color: 'white' }} />
                    <Input
                        id="search"
                        disableUnderline
                        className={c.searchInput}
                        size="small"
                        placeholder="Search"
                        type="Search"
                    />
                    <NotificationsIcon sx={{ color: 'white' }} />
                    <div className={c.account}>
                        <Image className="inline-block" src={ProfilePic} height="32" width="32" />
                        <div className="inline-block pl-2 leading-8">
                            <div className={cn('lg:hidden')}>Username</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-0 relative">
                {isOpen.mobile && <MobileNavigation isOpen={isOpen.mobile} />}
                <div className={cn(isOpen.mobile && c.backdrop)} />
            </div>
        </div>
    );
};

export default Header;
