import React from 'react';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="footer-container">
         © All Rights Reserved. 2022 Made by {}
                <a
                  href="https://hariskurtishi.com/"
                  className="transition-all hover:border-b"
                  rel="noopener noreferrer"
                >
                  <span className="text-gray-950 hover:text-bg-gray-3">Haris Kurtishi</span>
                </a>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer