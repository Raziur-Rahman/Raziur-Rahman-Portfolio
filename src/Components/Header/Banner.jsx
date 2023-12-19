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
    const variantsI = {
        initial: {
            pageYOffset: -500,
            opacity: 0,
        },
        animate: {
            y: 0,
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
                initial="initial"
                animate="animate"
                className="flex flex-col gap-5 p-5 md:w-[50%] justify-center mt-10 md:mt-28 ">
                <motion.h2 variants={variants} className="text-3xl text-amber-500 tracking-widest font-semibold">{`Hi, I'm Raziur Rahman`}</motion.h2>
                <motion.h1 variants={variants} className="text-5xl font-bold">MERN Stack Web Developer </motion.h1>
                <motion.div variants={variants} className="space-x-5 my-10">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .90 }}
                        variants={variants}
                        className="btn btn-outline"><a href="Raziur's Resume.pdf" download target="blank">Download Resume</a></motion.button>
                    <motion.button
                        variants={variants}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: .90 }}
                        className="rounded-lg px-4 py-3 font-semibold bg-amber-500 text-white"><a href="#Contact">Contact Me</a></motion.button>

                </motion.div>
            </motion.div>
            <motion.div 
                variants={variantsI}
                initial="initial"
                animate="animate" 
                className=" sm:static md:absolute lg:h-[100%] md:w-[50%] top-0 right-0 p-5">
                <motion.img className="z-20 bg-white" variants={variants} src={imgh} alt="" />
            </motion.div>

        </div>
    );
};

export default Banner;