import React from "react";
import "./Footer.css";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <h1>Contact us</h1>
                <p><FaPhoneAlt /> (817) 597-5045 300</p>
                <p><MdEmail /> xyz@gmail.com</p>
                <p>El Cajon Blvd El Cajon, California(CA), 92020</p>
            </div>
            <div className="footer-middle">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Service</li>
                    <li>Companies</li>
                </ul>
            </div>
            <div className="footer-right">
                <ul>
                    <li><FaFacebookF />
                    </li>
                    <li><FaTwitter />
                    </li>
                    <li><AiFillInstagram /></li>
                    <li><FaLinkedin /></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;