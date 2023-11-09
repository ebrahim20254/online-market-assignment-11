import { FaGoogle, FaGithub, FaTwitter, FaFacebook } from 'react-icons/fa';
import logo from '../../../assets/login/ribbon.jpg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-blue-400 text-base-content my-12 rounded-lg">
            <aside>
            <img  src={logo} className=" w-[100px] h-[100px]  " alt="" />
                <p>The Developer.<br />Company since at 2004</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Web Developer</a>
                <a className="link link-hover">Digital Marketing </a>
                <a className="link link-hover">Web design</a>
                <a className="link link-hover">Graphic Design</a>
            </nav>
            <nav>
            <header className="footer-title">company</header>
                <a className="link link-hover">about us</a>
                <a className="link link-hover">contact </a>
                <a className="link link-hover">jobs</a>
            </nav>
            <nav>
            <header className="footer-title">Social Media</header>
                <div className=' flex gap-6'>
               <a className=' text-2xl'><FaGoogle></FaGoogle></a>
               <a className=' text-2xl'><FaFacebook></FaFacebook></a>
               <a className=' text-2xl'><FaGithub></FaGithub></a>
               <a className=' text-2xl'><FaTwitter></FaTwitter></a>
                </div>
                <p className=' my-4'>Copyright © 2023 - All right reserved</p>
            </nav>
        </footer>
    );
};

export default Footer;