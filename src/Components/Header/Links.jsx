import { motion } from "framer-motion";

const Links = ({ setOpen }) => {

    const variants ={
        open: {
            transition: {
                staggerChildren: 0.1,
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        },
    }
    const variantsI ={
        open: {
            delay: 2,
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        }
    }

    const link = [
        "Home", "About", "Projects", "Contact", 
    ]

    return (
        <motion.div variants={variants}  className='absolute w-[100%] h-[100%] flex flex-col justify-center items-center gap-5'>
            {
                link.map(item => <motion.a 
                    variants={variantsI} 
                    onClick={()=>setOpen((prev)=> !prev)} 
                    href={`#${item}`} key={item} 
                    className="text-4xl"
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: .90}}
                    >{item}</motion.a>)
            }
            
        </motion.div>
    );
};

export default Links;