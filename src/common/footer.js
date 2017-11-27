import React from 'react';

const Footer = () => {
    return (
        <div style={{ textAlign: 'center' }}> 
            <p>&copy; {`Levvel ${new Date().getFullYear()}`}</p>
            <p>Made with &hearts; in NYC</p>
        </div>
    )
}

export default Footer;