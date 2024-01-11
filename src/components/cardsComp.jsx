import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

const CardsComp = () => {
    return (
        <>
            <div className="bg-white py-[66px]">
                <div className="px-8 py-6 mx-auto max-w-screen-2xl md:px-16">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="flex flex-col w-full p-4 duration-300 rounded-lg shadow-xl hover:scale-105 border border-slate-100 hover:bg-slate-100">
                            <img src={Single} className="w-20 mx-auto mt-[-3rem] bg-white rounded-md" alt="Single" />

                            <h2 className="py-8 text-2xl font-bold text-center ">Single User</h2>

                            <p className="text-center text-4xl font-medium">$149</p>

                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                                <p className="py-2 border-b mx-8">1 Granted User GB STORAGE</p>
                                <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                            </div>

                            <button type="button" className="bg-teal-600 text-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:bg-teal-700 transition duration-300">
                                Start Trial
                            </button>
                        </div>

                        <div className="flex flex-col w-full p-4 duration-300 rounded-lg shadow-xl scale-105 border border-slate-100 bg-slate-100">
                            <img src={Double} className="w-20 mx-auto mt-[-3rem] bg-white rounded-md" alt="Single" />

                            <h2 className="py-8 text-2xl font-bold text-center ">Double User</h2>

                            <p className="text-center text-4xl font-medium">$189</p>

                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                                <p className="py-2 border-b mx-8">1 Granted User GB STORAGE</p>
                                <p className="py-2 border-b mx-8">Send up to 2 GB</p>
                            </div>

                            <button type="button" className="bg-teal-600 text-black w-[200px] rounded-md font-medium mx-auto my-6 py-3 hover:bg-teal-700 transition duration-300">
                                Start Trial
                            </button>
                        </div>

                        <div className="flex flex-col w-full p-4 duration-300 rounded-lg shadow-xl hover:scale-105 border border-slate-100 hover:bg-slate-100">
                            <img src={Triple} className="w-20 mx-auto mt-[-3rem] bg-white rounded-md" alt="Single" />

                            <h2 className="py-8 text-2xl font-bold text-center ">Triple User</h2>

                            <p className="text-center text-4xl font-medium">$249</p>

                            <div className="text-center font-medium">
                                <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
                                <p className="py-2 border-b mx-8">1 Granted User GB STORAGE</p>
                                <p className="py-2 border-b mx-8">Send up to 2 GB</p>
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
