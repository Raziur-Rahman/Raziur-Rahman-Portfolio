import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const ToggleButton = ({ setOpen , open }) => {
    return (
        <button onClick={()=>setOpen((prev) => !prev)} className="w-[45px] h-[45px] rounded-full fixed top-[26px] left-[34px] border-none text-3xl z-[999]">
            {open ? <RxCross1 /> : <GiHamburgerMenu></GiHamburgerMenu>}
        </button>
    );
};

export default ToggleButton;