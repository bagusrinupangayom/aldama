import React, { useState } from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';

const NavbarComp = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            <div className="text-white">
                <div className="mx-auto max-w-screen-2xl py-4 md:py-0 px-8 md:px-16 ">
                    <div className="flex items-center ">
                        <h1 className="w-full text-3xl font-bold text-teal-600">ALDAMA</h1>

                        <ul className="hidden md:flex">
                            <li className="p-4">Home</li>
                            <li className="p-4">Company</li>
                            <li className="p-4">Resources</li>
                            <li className="p-4">About</li>
                            <li className="p-4">Contact</li>
                        </ul>

                        <div className="cursor-pointer block md:hidden" onClick={handleNav}>
                            {!nav ? <GiHamburgerMenu size={31} className="self-center" /> : <IoCloseSharp size={36} className="self-center" />}
                        </div>

                        <div
                            className={
                                !nav
                                    ? 'ease-in-out duration-200 top-0 fixed left-[-100%] h-full '
                                    : 'fixed left-0 top-0 w-[50%] h-full border-r border-gray-900 bg-slate-950 text-white ease-in-out duration-200'
                            }>
                            <div className="mx-auto max-w-screen-2xl py-4 px-8 md:px-16">
                                <h1 className="w-full text-3xl font-bold text-teal-600">ALDAMA</h1>
                                <ul className="uppercase">
                                    <li className="pt-4 border-b border-gray-300">Home</li>
                                    <li className="pt-4 border-b border-gray-300">Company</li>
                                    <li className="pt-4 border-b border-gray-300">Resources</li>
                                    <li className="pt-4 border-b border-gray-300">About</li>
                                    <li className="pt-4">Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarComp;
