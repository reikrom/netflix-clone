import React, { useState } from 'react';

import { Menu as MenuIcon } from '@mui/icons-material';
import { Input } from '@mui/material';
import MobileNavigation from 'components/menu/MobileNavigation';
import Logo from './Logo';
import c from './header.module.scss';
import cn from 'classnames';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div className={c.header}>
                <div className={c.menuIcon}>
                    <MenuIcon onClick={() => setIsOpen(!isOpen)} className={c.menuIcon} />
                </div>
                <Logo />

                <Input
                    id="search"
                    disableUnderline
                    className={c.searchInput}
                    size="small"
                    placeholder="Search"
                    type="Search"
                />
            </div>
            <div className="h-0 relative">
                {isOpen && <MobileNavigation isOpen={isOpen} />}
                <div className={cn(isOpen && c.backdrop)} />
            </div>
        </div>
    );
};

export default Header;
