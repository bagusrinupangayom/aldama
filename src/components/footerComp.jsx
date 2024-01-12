import { FaWhatsappSquare, FaFacebookSquare, FaYoutubeSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const FooterComp = () => {
    return (
        <>
            <div className="text-white">
                <div className="px-8 py-8 mx-auto max-w-screen-2xl md:px-16">
                    <div className="grid gap-6 md:grid-cols-3 md:gap-12">
                        <div>
                            <h1 className="w-full text-3xl font-bold text-teal-600">ALDAMA.</h1>

                            <p className="py-4">
                                ALDAMA specializes in advanced analytics, providing in-depth insights for strategic decision-making. Our commitment to excellence ensures optimal performance for your
                                business.
                            </p>

                            <div className="flex justify-between md:w-[75%] my-6">
                                <FaFacebookSquare size={30} className="transition duration-300 cursor-pointer hover:text-teal-600" />
                                <FaInstagramSquare size={30} className="transition duration-300 cursor-pointer hover:text-teal-600" />
                                <FaTwitterSquare size={30} className="transition duration-300 cursor-pointer hover:text-teal-600" />
                                <FaYoutubeSquare size={30} className="transition duration-300 cursor-pointer hover:text-teal-600" />
                                <FaWhatsappSquare size={30} className="transition duration-300 cursor-pointer hover:text-teal-600" />
                            </div>
                        </div>

                        <div className="flex justify-between md:mt-9 md:col-span-2">
                            <div>
                                <h2 className="font-medium text-gray-400">Solutions</h2>
                                <ul>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Analytics</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Marketing</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Commerce</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Insights</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-medium text-gray-400">Support</h2>
                                <ul>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Pricing</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Documentation</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Guides</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">API Status</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-medium text-gray-400">Company</h2>
                                <ul>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">About</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Blog</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Careers</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Press</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Contacts</li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-medium text-gray-400">Legal</h2>
                                <ul>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Claim</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Policy</li>
                                    <li className="my-4 text-sm transition duration-300 cursor-pointer hover:text-teal-600">Terms</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto text-center">
                        <p className="font-semibold text-gray-500">
                            built by <span className="transition duration-300 cursor-pointer hover:text-teal-600">Bagus Rinu</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Done */}
        </>
    );
};

export default FooterComp;
