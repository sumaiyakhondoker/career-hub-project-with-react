

const Banner = () => {
    return (
        <div className="bg-slate-100 "> 
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                    <h2 className="text-6xl font-extrabold leading-normal">One Step <br /> Closer To Your <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">Dream Job</span></h2>
                   
                   <p className='max-w-lg font-medium text-gray-500 my-6'> Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                   <button className="btn px-6 text-xl font-extrabold text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ">Get Started</button>
                </div>
                <div>
                    <img src="/user.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;