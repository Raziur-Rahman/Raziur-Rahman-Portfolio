import imgh from "../../assets/Official-4.jpg"

const Banner = () => {
    return (
        <div className="relative md:overflow-hidden h-[calc(100vh-100px)] flex flex-col" >
            <div className="flex flex-col gap-5 p-5 md:w-[50%] justify-center mt-10 md:mt-32 ">
                <div>
                    <h2 className="text-3xl text-amber-500 tracking-widest font-semibold">Raziur Rahman</h2>
                    <h1 className="text-5xl font-bold">MERN Stack Web Developer </h1>
                </div>
                <div className="space-x-5 my-10">
                    <button className="btn btn-outline">DownLoad Resume</button>
                    <button className="btn btn-accent">Contact</button>

                </div>
            </div>
            <div className="block md:absolute lg:h-[100%] md:w-[50%] top-0 right-0 p-5">
                <img src={imgh} alt="" />
            </div>
            
        </div>
    );
};

export default Banner;