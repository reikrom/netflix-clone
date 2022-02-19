import { Input, InputGroup, InputLeftAddon, InputRightAddon } from '@chakra-ui/input';
import React from 'react';
import { css } from '@emotion/react';
import { CloseIcon, SearchIcon } from '@chakra-ui/icons';

interface Props {}

const index = (props: Props) => {
    return (
        <div>
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
        </div>
    );
};

export default index;
