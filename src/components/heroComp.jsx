import Typed from 'react-typed';

const HeroComp = () => {
    return (
        <>
            <div className="text-white">
                <div className="max-w-4xl px-8 py-4 mx-auto md:px-16">
                    <div className="text-center mt-[66px] mx-auto h-screen flex flex-col">
                        <p className="font-bold text-teal-600">SPEEDING WITH DATA ANALYTICS</p>

                        <h1 className="text-4xl font-bold md:text-7xl sm:text-6xl md:py-6">Speed with data</h1>

                        <div className="flex items-center justify-center mb-6">
                            <p className="text-xl font-bold md:text-5xl sm:text-4xl">Fast, flexible financing for</p>

                            <Typed className="pl-1 text-xl font-bold md:text-5xl sm:text-4xl md:pl-3" strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                        </div>

                        <p className="text-xl font-bold text-gray-500 md:text-2xl">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>

                        <button type="button" className="bg-teal-600 text-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:bg-teal-700 transition duration-300">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroComp;
