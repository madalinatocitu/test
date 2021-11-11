import React from "react";
import './modal.css';

class Modal extends React.Component {
    render() {
        return (
            <div className="modal_container">
                <div>Desciption:</div>
                <div>Date:</div>
                <div>Status:</div>
                <div>Notes:</div>
            </div>
        );
    }
}

export default Modal;