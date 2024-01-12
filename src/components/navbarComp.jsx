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
                <div className="px-8 py-4 mx-auto max-w-screen-4xl md:py-0 md:px-16 bg-slate-800 ">
                    <div className="relative flex items-center py-2 ">
                        <div className="items-center inline-block">
                            <h1 className="text-3xl font-bold text-teal-600 transition duration-300 cursor-pointer hover:text-teal-800">ALDAMA</h1>
                        </div>

                        <div className="absolute top-0 right-0 items-center inline-block ">
                            <ul className="hidden md:flex">
                                <li className="p-4 font-medium transition duration-300 cursor-pointer hover:text-teal-600">Home</li>
                                <li className="p-4 font-medium transition duration-300 cursor-pointer hover:text-teal-600">Company</li>
                                <li className="p-4 font-medium transition duration-300 cursor-pointer hover:text-teal-600">Resources</li>
                                <li className="p-4 font-medium transition duration-300 cursor-pointer hover:text-teal-600">About</li>
                                <li className="p-4 font-medium transition duration-300 cursor-pointer hover:text-teal-600">Contact</li>
                            </ul>
                        </div>

                        <div className="absolute top-0 right-0 block py-3 cursor-pointer md:hidden" onClick={handleNav}>
                            {nav ? <IoCloseSharp size={36} className="self-center" /> : <GiHamburgerMenu size={31} className="self-center" />}
                        </div>

                        <div
                            className={
                                nav
                                    ? 'fixed left-0 top-0 w-[50%] h-full border-r border-gray-900 bg-slate-800 text-white ease-in-out duration-200'
                                    : 'ease-in-out duration-200 top-0 fixed left-[-100%] h-full'
                            }>
                            <div className="px-8 py-4 mx-auto max-w-screen-2xl md:px-16">
                                <h1 className="w-full text-3xl font-bold text-teal-600">ALDAMA</h1>
                                <ul className="uppercase">
                                    <li className="pt-4 font-medium transition duration-300 border-b border-gray-300 cursor-pointer hover:text-teal-600">Home</li>
                                    <li className="pt-4 font-medium transition duration-300 border-b border-gray-300 cursor-pointer hover:text-teal-600">Company</li>
                                    <li className="pt-4 font-medium transition duration-300 border-b border-gray-300 cursor-pointer hover:text-teal-600">Resources</li>
                                    <li className="pt-4 font-medium transition duration-300 border-b border-gray-300 cursor-pointer hover:text-teal-600">About</li>
                                    <li className="pt-4 font-medium transition duration-300 border-b border-gray-300 cursor-pointer hover:text-teal-600">Contact</li>
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
