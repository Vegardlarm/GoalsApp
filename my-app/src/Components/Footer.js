import React from 'react';
import '../Css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className='Container'>
      <div className='SocialIcons'>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://youtube.com">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <div className='FooterText'>
        <FontAwesomeIcon icon={faCircle} className='circle-icon' />
        <span className='copyright'>
          Gamer Goals, Inc. All rights reserved.
        </span>
      </div>
    </div>
  );
}

