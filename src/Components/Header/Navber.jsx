import facebook from "../../assets/logo/facebook1.png"
import instagram from '../../assets/logo/instagram.png'
import github from "../../assets/logo/github1.png"
import linkedIn from '../../assets/logo/linkedin.png'
import { motion } from "framer-motion"

const Navber = () => {
    return (
        <div>
            <div className="flex justify-center lg:justify-between items-center py-5 px-5">
                <span className="text-3xl text-amber-500 hidden lg:block">Raziur Rahman</span>
                <div className="flex justify-around items-center gap-2">
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: .90 }}
                        target="blank" href="https://www.facebook.com/rajiurrahman.raju.1"><img className="w-[45px]" src={facebook} alt="" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: .90 }}
                        target="blank" href="#"><img className="w-[50px]" src={instagram} alt="" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: .90 }}
                        target="blank" href="https://www.linkedin.com/in/md-raziur-rahman-61602a1b3"><img className="w-[50px]" src={linkedIn} alt="" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: .90 }}
                        target="blank" href="https://github.com/Raziur-Rahman"><img className="w-[48px]" src={github} alt="" />
                    </motion.a>
                </div>
            </div>
        </div>
    );
};

export default Navber;