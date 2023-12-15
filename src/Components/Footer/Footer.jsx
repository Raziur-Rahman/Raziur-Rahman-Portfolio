import { ImFacebook2 } from "react-icons/im";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import developerLogo from "../../../public/developer.png"

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-300 text-gray">
            <aside>
                <img className="w-[60px]" src={developerLogo} alt="" />
                <p className="text-xl">Md Raziur Rahman<br />Web Developer From Bangladesh</p>
            </aside>
            <nav>
                <header className="footer-title"> Social</header>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-3xl text-blue-700"> <ImFacebook2></ImFacebook2> </a>

                    <a className="text-3xl text-gray-600"> <FaGithubSquare></FaGithubSquare> </a>
                    <a className="text-3xl text-blue-700"> <FaLinkedin></FaLinkedin> </a>
                </div>
            </nav>
            <form>
                <header className="footer-title">Newsletter</header>
                <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </footer>
    );
};

export default Footer;