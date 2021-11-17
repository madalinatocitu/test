import React from "react";
import './modal.css';

class Modal extends React.Component {
    render() {


        return (
            this.props.selectedTask
                ?
            
                    (this.props.isModalvisible === true)  
                        ?
                            null
                           
                        :
                        <div className="modal_main-container">  
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">Modal title</h4>
                                </div>
                                <div className="modal-body">
                                    <div> Description: {this.props.selectedTask.description}</div>
                                    <div> Date: {this.props.selectedTask.date} </div>
                                    <div> Status: Open </div>
                                </div>
                                <div className="modal-footer">
                                    <button onClick={() => this.props.onClose()}>Close modal</button>
                                </div>
                            </div>
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