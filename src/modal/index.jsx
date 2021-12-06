import React from "react";
import './modal.css';

class Modal extends React.Component {
    render() {


        return (
            this.props.selectedTask
                ?

                !this.props.isModalVisible
                    ?
                    null

                    :
                    <div className="modal_main-container" onClick={(e) => this.props.handleClick(e)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h3 className="modal-title">Task {this.props.selectedTask.no}</h3>
                            </div>
                            <div className="modal-body">
                                <div>
                                    <span className="modal-body__description"> Description: </span>
                                    <span className="modal-body__info"> {this.props.selectedTask.description} </span>
                                </div>
                                <div>
                                    <span className="modal-body__description"> Date: </span>
                                    <span className="modal-body__info">{this.props.selectedTask.date} </span>
                                </div>
                                <div>
                                    <span className="modal-body__description"> Status:</span>
                                    <span className="modal-body__info"> {this.props.selectedTask.currentStatus} </span>
                                </div>
                                {/* <div> Notes: {this.props.selectedTask.notes || '-'}</div> */}
                                {this.props.selectedTask.notes
                                    ? <div>
                                        <span className="modal-body__description"> Notes: </span>
                                        <span className="modal-body__info"> {this.props.selectedTask.notes} </span>
                                    </div>
                                    : null
                                }
                            </div>
                        </div>
                    </div>

                : null
        );
    }
}

export default Modal;