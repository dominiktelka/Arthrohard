import React from "react";

export const Popup = ({ id, name, value, onClose }) => {
    return (
        <div className="popup-overlay">
            <div className="popup">
                <span className="close-button" onClick={onClose}>X</span>
                <p className="popupPID">ID : {id}</p>
                <p className="popupPName">Nazwa: {name}</p>
                <p className="popupPValue">Wartość: {value}</p>
            </div>
        </div>
    );
};