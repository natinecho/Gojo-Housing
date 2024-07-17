import logo from "../asset/Gojo-logo.png";
import footerImg from "../asset/footer.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex w-full relative h-[325px]">
            <div className=' top-0 left-0 bg-[#0E2865] p-0'>
                    <img src={logo} alt="Gojo Logo" className="bg-white w-1/8 h-[90px]" />
            </div>
        <div className='relative flex flex-wrap bg-[#0E2865] text-white p-6 w-full'>
            <div className='flex flex-col sm:flex-row justify-between items-start gap-4 sm:w-3/5'>
                <div className='flex flex-col mb-6'>
                    <div className='font-bold mb-2'>Quick Link</div>
                    <div className="flex">
                        <div className='flex flex-col'>
                            <Link className='hover:underline p-2' to="/"><ChevronRightIcon />Home</Link>
                            <Link className='hover:underline p-2' to="/howitworks"><ChevronRightIcon />About Us</Link>
                            <Link className='hover:underline p-2' to="/howitworks"><ChevronRightIcon />How it works?</Link>
                        </div>
                        <div className='flex flex-col'>
                            <Link className='hover:underline p-2' to="/meetourteam"><ChevronRightIcon />Meet our Team</Link>
                            <Link className='hover:underline p-2' to="/uploadhome"><ChevronRightIcon />Rent House</Link>
                            <Link className='hover:underline p-2' to="/"><ChevronRightIcon />FAQ</Link>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col mb-6'>
                    <div className='font-bold mb-2'>Contact us</div>
                    <div className='flex p-2'><LocationOnIcon /> <p className="pl-4">AASTU, Addis Ababa, Ethiopia</p></div>
                    <div className='flex p-2'><EmailIcon /> <p className="pl-4">Natnael.necho@a2sv.org</p></div>
                    <div className='flex p-2'><PhoneIcon /> <p className="pl-4">+251 955-195-491</p></div>
                </div>
            </div>
            <div className='absolute top-0 right-0 flex flex-col items-center bg-[#0E2865] p-6'>
                <div className='flex flex-col mb-6 w-3/5'>
                    <div className="text-center mb-2">Subscribe and enjoy our service</div>
                    <button className=' py-2 bg-white text-[#0E2865] border border-[#0E2865] rounded-3xl font-bold'>Subscribe</button>
                </div>
                <div className='flex flex-col items-center w-3/5'>
                    <div className="text-center mb-2">Follow our social media for more updates</div>
                    <div className='flex justify-between space-x-2'>
                        <div className="bg-white py-1 px-3 rounded-full text-[#0E2865] font-bold">f</div>
                        <div className="bg-white px-1 rounded-full text-[#0E2865] font-bold"><TwitterIcon /></div>
                        <div className="bg-white px-1 rounded-full text-[#0E2865] font-bold"><InstagramIcon /></div>
                        <div className="bg-white px-1 rounded-full text-[#0E2865] font-bold"><YouTubeIcon /></div>
                    </div>
                </div>
            </div>
        </div>
            <div className='absolute bottom-0 left-0 sm:w-full'>
              <img src={footerImg} alt="Gojo Logo" className="bg-white w-1/8 h-[90px]" />
            </div>
        </div>

    );
}

export default Footer;
