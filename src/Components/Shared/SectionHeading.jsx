import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SectionHeading = ({ tittle }) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const bgTransformtext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const bgTransform = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

    return (
        <div 
        ref={ref}
        className={`${tittle === "skills" ? "bg-gradient-to-b from-[#0d0d26] to-[#171731]" : "bg-gradient-to-b from-[#0d0d26] to-[#212137]"} min-h-screen  relative flex justify-center items-center overflow-hidden z-0`}>
            <motion.h1
            style={{y: bgTransformtext}}
             className="text-5xl font-bold text-amber-600 z-30">
                {tittle === "about" && "A Little Summery About Me"}
                {tittle === "projects" && "Technology that I Know"}
                {tittle === "skills" && "Technology that I Know"}
            </motion.h1>
            <motion.div style={{x: bgTransform}}  className="bg-bg-stars h-[100%] w-[100%] absolute bg-bottom z-0">

            </motion.div>
            <motion.div className="bg-bg-mountains h-[100%] w-[100%] absolute bg-bottom z-20">

            </motion.div>
            <motion.div style={{y: bgTransform}} className={`${tittle === "skills" ? "bg-bg-sun" : "bg-bg-planet"} h-[100%] w-[100%] absolute z-10 bg-cover bg-center `}></motion.div>
        </div>
    );
};

export default SectionHeading;