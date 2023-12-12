import { useState } from "react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";

import { motion } from "framer-motion";

const Sidebar = () => {

    const [open, setOpen] = useState(false);

    const variants ={
        open: {
            clipPath: "circle(1200px at 50px 50px)",
            transition: {
                type:"spring",
                stiffness: 20,
                damping: 20,

            }
        },
        closed: {
            clipPath: "circle( 30px at 50px 50px)",
            transition: {
                delay: 0.5,
                type: "spring",
                stiffness: 150,
                damping: 30,
            }
        },
    }

    // console.log(open)

    return (
        <motion.div animate={open ? "open" : 'closed'} className="flex flex-col justify-center items-center bg-white text-amber-500" >
            <motion.div variants={variants} className="fixed top-0 left-0 bottom-0 w-[400px]  bg-white ">
                <Links setOpen={setOpen} />
            </motion.div>
            
            <ToggleButton setOpen={setOpen} open={open} />
        </motion.div>
    );
};

export default Sidebar;