import Laptop from '../assets/laptop.jpg';

const AnalyticsComp = () => {
    return (
        <>
            <div className="bg-white">
                <div className="px-8 py-6 mx-auto max-w-screen-2xl md:px-16">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-12 my-[66px]">
                        <div>
                            <img src={Laptop} alt="Laptop" className="max-w-full mx-auto my-4" />
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="font-bold text-teal-600 ">DATA ANALYTICS DASHBOARD</p>

                            <h1 className="py-2 text-2xl font-bold md:text-4xl sm:text-3xl md:py-6">Manage Data Analytics Certrally</h1>

                            <p className="mb-3">
                                Centralized Data Analytics management involves the centralized collection, integration, and analysis of data from various sources. This approach enables organizations
                                to optimize data governance policies, provide centralized access for analytics, and ensure consistent security and data quality.
                            </p>

                            <button type="button" className="text-teal-600 bg-black w-[200px] rounded-md font-medium mx-auto md:mx-0 my-6 py-3 hover:opacity-90 transition duration-300">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AnalyticsComp;
