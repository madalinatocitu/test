import React from 'react';
import './statusEvidence.css';

class StatusEvidence extends React.Component {
    render() {
        return (
            <div className="my-tasks-page__status">
                <div className="status-evidence"> <span className="status-evidence__span">Open: </span> <span>{this.props.openTaks} </span></div>
                <div className="status-evidence"> <span className="status-evidence__span">In progress:</span> <span> {this.props.inProgressTasks}</span></div>
                <div className="status-evidence"> <span className="status-evidence__span"> Done: </span> <span>{this.props.doneTasks}</span></div>
            </div>
        );
    }
}
export default StatusEvidence;