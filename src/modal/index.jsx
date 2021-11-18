import React from "react";
import './modal.css';

class Modal extends React.Component {
    render() {


        return (
            this.props.selectedTask
                ?

                (!this.props.isModalVisible)
                    ?
                    null

                    :
                    <div className="modal_main-container" onClick={(e) => this.props.handleClick(e)}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Task {this.props.selectedTask.no}</h4>
                            </div>
                            <div className="modal-body">
                                <div> Description: {this.props.selectedTask.description}</div>
                                <div> Date: {this.props.selectedTask.date} </div>
                                <div> Status: Open </div>
                                {/* <div> Noes: {this.props.selectedTask.notes || '-'}</div> */}
                                {this.props.selectedTask.notes
                                    ? <div> Notes: {this.props.selectedTask.notes}</div>
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