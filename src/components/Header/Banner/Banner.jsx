

const Banner = () => {
    return (
        <div className="h-[50vh]">
            {/* Banner */}
            <div>
                <div
                    className="hero h-[50vh] opacity-95"
                    style={{
                        backgroundImage: "url(https://i.ibb.co/TLbkHLH/384066765-1354423451863397-957217595449501748-n.jpg)",
                    }}
                >
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-black text-3xl font-bold">
                                I Grow By Helping People In Need
                            </h1>

                            <div className="flex justify-center items-center mt-8">
                                <input
                                    type="text"
                                    placeholder="Search here...."
                                    className="input  rounded-r-none w-full max-w-xs"
                                />
                                <button className="btn btn-primary rounded-l-none">
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;