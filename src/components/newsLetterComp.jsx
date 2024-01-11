const NewsLetterComp = () => {
    return (
        <>
            <div className="text-white">
                <div className="px-8 py-4 mx-auto max-w-screen-2xl md:px-16">
                    <div className="grid md:grid-cols-3">
                        <div className="my-4 lg:col-span-2">
                            <h1 className="py-2 text-xl font-bold md:text-4xl sm:text-3xl">Want tips & tricks to optimize your flow?</h1>

                            <p>Sign up to our newsletter and stay up to date.</p>
                        </div>

                        <div className="my-4">
                            <div className="flex flex-col items-center justify-between w-full sm:flex-row">
                                <input type="email" className="w-full p-3 text-black rounded-md" placeholder="Enter Email" />

                                <button type="button" className="bg-teal-600 text-black w-[200px] rounded-md font-medium ml-4 my-6 py-3 hover:bg-teal-700 transition duration-300">
                                    Notify Me
                                </button>
                            </div>
                            <p>
                                We care about the protection of your data. Read our <span className="text-teal-600">Privacy Policy.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsLetterComp;
