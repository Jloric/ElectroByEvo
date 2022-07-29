import React from 'react';

const Footer = () =>
{
    return (
        <div className="position-absolute bottom-0 w-100 h-25 pt-3 mh-100 bg-light text-secondary">
            <p>Projet de fin de formation ORSYS pour l'entreprise evoleenByGecko</p>
            <div className="row container">
                <div className="contact">
                  <i >Contact</i>
                   <ul >
                     <li>Mehee Guillaume</li>
                     <li>Minatchy Loric</li>
                     <li>Guerry Dorian</li>
                   </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer;