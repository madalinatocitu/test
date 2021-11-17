import React from "react";
import './modal.css';

class Modal extends React.Component {
    render() {
        if(!this.props.isModalvisible) {
            console.log(this.props.isModalvisible);
            return null;
        }
        return (
            this.props.selectedTask
                ?
                <div className="modal_main-container">
                    <div> Description: {this.props.selectedTask.description}</div>
                    <div> Date: {this.props.selectedTask.date} </div>
                    <div> Status: Open </div>
                    {/* {this.props.selectedTaskNotes
                    ? <div> Notes: {this.props.selectedTaskNotes}</div>
                    : null} */}
                     {/* pentru randurile din tabel care au fost adaugate folosind formularul (deci au si varianta de notes) */}
                </div>
                : null
        );
    }
}

export default Modal;