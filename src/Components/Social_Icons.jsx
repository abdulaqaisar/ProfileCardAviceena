import React from 'react'
import './Social_Icons.css'
import facebook from '../assets/Icons/facebook.png'
import instagram from '../assets/Icons/instagram.png'
import fiver from '../assets/Icons/fiverr.png'
import linkedin from '../assets/Icons/linkedin.png'
import telegram from '../assets/Icons/telegram.png'
import { IoPersonAddOutline } from "react-icons/io5";

const Social_Icons = () => {
  return (
    <>
        <div className="social">
            <p>Social Media</p>
            <div className="social_icons">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="facebook" />
            <img src={fiver} alt="facebook" />
            <img src={linkedin} alt="facebook" />
            <img src={telegram} alt="facebook" />
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="facebook" />
            <img src={fiver} alt="facebook" />
            <img src={linkedin} alt="facebook" />
            <img src={telegram} alt="facebook" />
            </div>
        </div>
            <div className="savetocontact">
                <IoPersonAddOutline style={{ fontSize:"xx-large", margin:"13px 10px 0px 0px" }}/>
                <button>Save to contact</button>
            </div>
    </>
  )
}

export default Social_Icons