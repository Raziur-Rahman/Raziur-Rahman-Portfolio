import imgh from "../../assets/Official-4.jpg"
import { motion } from "framer-motion";

const Banner = () => {

    const variants = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 1,
                duration: 1,
                staggerChildren: 0.1,
            }
        }
    }

    return (
        <div className="relative md:overflow-hidden h-[calc(100vh-100px)] flex flex-col" >
            <motion.div
                variants={variants}
                initial= "initial"
                animate="animate"
                className="flex flex-col gap-5 p-5 md:w-[50%] justify-center mt-10 md:mt-28 ">
                <motion.h2 variants={variants} className="text-3xl text-amber-500 tracking-widest font-semibold">Raziur Rahman</motion.h2>
                <motion.h1 variants={variants} className="text-5xl font-bold">MERN Stack Web Developer </motion.h1>
                <motion.div variants={variants} className="space-x-5 my-10">
                    <motion.button variants={variants} className="btn btn-outline">DownLoad Resume</motion.button>
                    <motion.button variants={variants} className="btn btn-accent">Contact Me</motion.button>

                </motion.div>
            </motion.div>
            <div className="block md:absolute lg:h-[100%] md:w-[50%] top-0 right-0 p-5">
                <img src={imgh} alt="" />
            </div>

        </div>
    );
};

export default Banner;