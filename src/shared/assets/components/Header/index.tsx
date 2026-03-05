import './style.css';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BlogLogoIcon, SearchIcon } from '../../icons';
import BlogLogoIconMobile from '../../icons/blog-logo.svg';
import { Button, Input } from '../ui';
import TextBase from '../ui/TextBase';

interface MobileHeaderProps {
    active: string;
    handleClick: () => void;
}

interface MenuMobileProps {
    open: string;
    showMenu: string;
}

function DesktopHeader() {
    const navigate = useNavigate();

    const handleLoginPage = () => {
        navigate('/');
    };

    return (
        <section className="scroll border-brand-white-dark/10 fixed top-0 z-90 hidden w-full border-b backdrop-blur-[6px] lg:block">
            <div className="container">
                <header className="flex h-20 items-center justify-between px-5">
                    <div className="flex items-center gap-14">
                        <a href="/home">
                            <BlogLogoIcon className="hover:opacity-80" />
                        </a>
                        <ul className="flex list-none items-center space-x-10 [&>li]:p-4">
                            <li>
                                <a href="/category">
                                    <TextBase
                                        size="b3"
                                        color="secondary"
                                        className="hover:text-brand-blue"
                                    >
                                        Categorias
                                    </TextBase>
                                </a>
                            </li>
                            <li>
                                <a href="/about">
                                    <TextBase
                                        size="b3"
                                        color="secondary"
                                        className="hover:text-brand-blue"
                                    >
                                        Sobre
                                    </TextBase>
                                </a>
                            </li>
                            <li>
                                <a href="/contact">
                                    <TextBase
                                        size="b3"
                                        color="secondary"
                                        className="hover:text-brand-blue"
                                    >
                                        Contato
                                    </TextBase>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-17">
                        <Input
                            placeholder="Buscar"
                            icon={<SearchIcon />}
                            iconPosition="right"
                            className="min-w-70"
                        />
                        <Button onClick={handleLoginPage}>Login</Button>
                    </div>
                </header>
            </div>
        </section>
    );
}

function MobileHeader({ active, handleClick }: MobileHeaderProps) {
    const navigate = useNavigate();

    const handleLoginPage = () => {
        navigate('/');
    };

    return (
        <section className="border-brand-white-dark/10 fixed top-0 left-0 z-10 w-full border-b lg:hidden">
            <div className="container">
                <header className="flex h-20 items-center justify-between px-5">
                    <a href="/home">
                        <img
                            src={BlogLogoIconMobile}
                            alt="blog"
                            className="hover:opacity-80"
                        />
                    </a>
                    <div
                        className={`bx ${active} h-10 w-10 cursor-pointer hover:opacity-80`}
                        onClick={handleClick}
                    ></div>
                    <span>
                        <Button
                            color="ghost"
                            className="text-brand-blue"
                            onClick={handleLoginPage}
                        >
                            Login
                        </Button>
                    </span>
                </header>
            </div>
        </section>
    );
}

function MenuMobile({ open, showMenu }: MenuMobileProps) {
    return (
        <section
            className={`${open} ${showMenu} animation-menu-mobile h-screen w-full pt-20 transition-all duration-500 ease-in-out lg:hidden`}
        >
            <ul className="border-customBlack-light [&>li]:hover:bg-brand-white-light/10 border-b [&>li]:p-5">
                <li>
                    <a
                        href="/category"
                        className="transition-all duration-500 ease-in-out hover:ml-3"
                    >
                        <TextBase size="b3" color="secondary">
                            Categorias
                        </TextBase>
                    </a>
                </li>
                <li className="border-brand-white-light/10 border-t border-b">
                    <a
                        href="/about"
                        className="transition-all duration-500 ease-in-out hover:ml-3"
                    >
                        <TextBase size="b3" color="secondary">
                            Sobre
                        </TextBase>
                    </a>
                </li>
                <li>
                    <a
                        href="/contact"
                        className="transition-all duration-500 ease-in-out hover:ml-3"
                    >
                        <TextBase size="b3" color="secondary">
                            Contato
                        </TextBase>
                    </a>
                </li>
                <li className="border-brand-white-light/10 border-t border-b">
                    <Input
                        placeholder="Buscar"
                        icon={<SearchIcon />}
                        iconPosition="right"
                    />
                </li>
            </ul>
        </section>
    );
}

const Header = () => {
    const [open, isOpen] = useState<string>('hidden');
    const [active, isActive] = useState<string>('');
    const [showMenu, isShowMenu] = useState<string>('');

    const handleClick = () => {
        isOpen(open === 'hidden' ? 'block' : 'hidden');
        isActive(active === '' ? 'active' : '');
        isShowMenu(showMenu === '' ? 'show-menu-mobile' : '');
    };

    return (
        <>
            <DesktopHeader />
            <MobileHeader active={active} handleClick={handleClick} />
            <MenuMobile open={open} showMenu={showMenu} />
        </>
    );
};

export default Header;
