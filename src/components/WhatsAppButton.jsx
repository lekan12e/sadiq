import React from 'react';

const WhatsAppButton = ({ itemName, itemPrice, salesRepNumber }) => {
    const handleClick = () => {
        const message = `Hello, I am interested in the ${itemName} which costs ${itemPrice}.`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${salesRepNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <button onClick={handleClick}>Contact Sales Rep</button>
    );
};

export default WhatsAppButton;
