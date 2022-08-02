import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa';

import './Footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
            </div>
            <div className='container'>
                <div className='col'>
                    <h3>Coordinates</h3>
                    <p>Organization</p>
                    <p>Bases</p>
                    <p>Shuttles</p>
                    <p>Planets</p>
                </div>
                <div className='col'>
                    <h3>Operations</h3>
                    <p>Organization</p>
                    <p>Bases</p>
                    <p>Shuttles</p>
                    <p>Planets</p>
                </div>
                <div className='col'>
                    <h3>Rules</h3>
                    <p>Organization</p>
                    <p>Bases</p>
                    <p>Shuttles</p>
                    <p>Planets</p>
                </div>
                <div className='col'>
                    <h3>Information</h3>
                    <p>Organization</p>
                    <p>Bases</p>
                    <p>Shuttles</p>
                    <p>Planets</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;