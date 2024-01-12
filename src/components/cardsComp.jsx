import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const CardsComp = () => {
    return (
        <>
            <div className="bg-white">
                <div className="px-8 py-6 mx-auto max-w-screen-2xl md:px-16">
                    <div className="grid gap-6 md:gap-12 my-[99px] md:grid-cols-3">
                        <div className="flex flex-col w-full p-4 my-6 duration-300 border rounded-lg shadow-xl hover:scale-105 border-slate-100 hover:bg-slate-100">
                            <img src={Single} className="w-20 mx-auto mt-[-3rem] bg-white rounded-md" alt="Single" />

                            <h2 className="py-8 text-2xl font-bold text-center ">Single User</h2>

                            <p className="text-4xl font-medium text-center">$149</p>

                            <div className="font-medium text-center">
                                <p className="py-2 mx-8 mt-8 border-b">500 GB Storage</p>
                                <p className="py-2 mx-8 border-b">1 Granted User GB STORAGE</p>
                                <p className="py-2 mx-8 border-b">Send up to 2 GB</p>
                            </div>

                            <button type="button" className="bg-teal-600 text-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:bg-teal-700 transition duration-300">
                                Start Trial
                            </button>
                        </div>

                        <div className="flex flex-col w-full p-4 my-6 duration-300 scale-105 border rounded-lg shadow-xl border-slate-100 bg-slate-100">
                            <img src={Double} className="w-20 mx-auto mt-[-3rem] bg-white rounded-md" alt="Single" />

                            <h2 className="py-8 text-2xl font-bold text-center ">Double Users</h2>

                            <p className="text-4xl font-medium text-center">$189</p>

                            <div className="font-medium text-center">
                                <p className="py-2 mx-8 mt-8 border-b">1.5 TB Storage</p>
                                <p className="py-2 mx-8 border-b">2 Granted User GB STORAGE</p>
                                <p className="py-2 mx-8 border-b">Send up to 5 GB</p>
                            </div>

                            <button type="button" className="bg-teal-600 text-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:bg-teal-700 transition duration-300">
                                Start Trial
                            </button>
                        </div>

                        <div className="flex flex-col w-full p-4 my-6 duration-300 border rounded-lg shadow-xl hover:scale-105 border-slate-100 hover:bg-slate-100">
                            <img src={Triple} className="w-20 mx-auto mt-[-3rem] bg-white rounded-md" alt="Single" />

                            <h2 className="py-8 text-2xl font-bold text-center ">Triple Users</h2>

                            <p className="text-4xl font-medium text-center">$499</p>

                            <div className="font-medium text-center">
                                <p className="py-2 mx-8 mt-8 border-b">5.5 TB Storage</p>
                                <p className="py-2 mx-8 border-b">3 Granted User GB STORAGE</p>
                                <p className="py-2 mx-8 border-b">Send up to 25 GB</p>
                            </div>

                            <button type="button" className="bg-teal-600 text-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:bg-teal-700 transition duration-300">
                                Start Trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardsComp;
