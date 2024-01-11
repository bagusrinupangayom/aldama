import Typed from 'react-typed';

const HeroComp = () => {
    return (
        <>
            <div className="text-white py-[66px]">
                <div className="mx-auto max-w-4xl py-6 px-8 md:px-16">
                    <div className="text-center mt-[12px] mx-auto flex flex-col">
                        <p className="text-teal-600 font-bold">SPEEDING WITH DATA ANALYTICS</p>

                        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Speed with data</h1>

                        <div className="flex justify-center items-center mb-6">
                            <p className="md:text-5xl sm:text-4xl text-xl font-bold">Fast, flexible financing for</p>

                            <Typed className="md:text-5xl sm:text-4xl text-xl font-bold pl-1 md:pl-3" strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop />
                        </div>

                        <p className="md:text-2xl text-xl font-bold text-gray-500">Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>

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
