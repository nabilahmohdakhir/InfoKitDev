// PopupButton.js
import React, { useState } from 'react';

const PopupButton = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Popup</button>
      {isPopupOpen && (
        <div className="popup">
          <p>This is the popup content.</p>
          <button onClick={togglePopup}>Close Popup</button>
        </div>
      )}
    </div>
  );
};

export default PopupButton;
