import {FaGoogle, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="contact-information">
    <div className="social-images-cont">
      <FaGoogle color="#3D3C3C" />
      <FaTwitter color="#3D3C3C" />
      <FaInstagram color="#3D3C3C" />
      <FaYoutube color="#3D3C3C" />
    </div>
    <p className="contact-us">Contact Us</p>
  </div>
)

export default Footer
