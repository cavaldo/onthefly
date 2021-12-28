import React from 'react';
import Data from '../data.json';
import '../assets/styles/components/Contacts.scss';
import fb from '../assets/img/socials/fb-link.png'
import inst from '../assets/img/socials/inst-link.png'
import linkedin from '../assets/img/socials/linkedin-link.png'

function Contacts() {
    return (
      <section id="contacts" className="centered-heading">
        <h3>Contacts</h3>
        
        <p className="contacts-email">E-mail: <a href={Data.contacts.mailto}>{Data.contacts.email}</a></p>
        <div className="contacts-icons">
          <a href={Data.contacts.linkedin}><img class="contacts-icon" src={linkedin} alt="Linkedin"/></a>
          <a href={Data.contacts.facebook}><img class="contacts-icon" src={fb} alt="Facebook"/></a>
          <a href={Data.contacts.instagram}><img class="contacts-icon" src={inst} alt="Instagram"/></a>
        </div>
      </section>
    );
  }
  
  export default Contacts;
  