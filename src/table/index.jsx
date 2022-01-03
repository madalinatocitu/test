import React from 'react';
import './table.css';


class Table extends React.Component {
    render() {
        const getColor = (ceva) => {
            if (ceva.currentStatus === 'done')
                return 'green';
            if (ceva.currentPriority === 'critical')
                return 'red';
            if (ceva.currentPriority === 'minor')
                return 'grey';
            return '';
        }

        const getLine = (ceva) => {
            if (ceva.currentStatus === 'done')
                return 'line-through';
            return '';
        }

        return (
            <div className="table" >
                <table>
                    <thead>
                        <tr className="table__th">
                            <th>No.</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Priority</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map(((item,  i) =>
                            <tr key={item.no}>
                                <td style={{
                                    color: getColor(item),
                                    textDecorationLine: getLine(item)
                                }}>{item.no}</td>

                                <td id="descriptionId"
                                   style={{
                                    color: getColor(item),
                                    textDecorationLine: getLine(item)
                                }}
                                >{item.description}</td>

                                <td id="dateId"
                                    style={{
                                    color: getColor(item),
                                    textDecorationLine: getLine(item)
                                }}
                                >{item.date}</td>

                                <td id="priorityId">
                                    <select name="priority"
                                        value={item.currentPriority}
                                        onChange={(e) => this.props.countPriority(e, i)}>

                                        {item.priority.map((itemPriority, index) => {
                                            return <option key={index}>{itemPriority}</option>;
                                        })}
                                    </select>
                                </td>

                                <td id="statusId">
                                    <select name="staus"
                                        value={item.currentStatus}
                                        onChange={(e) => this.props.countStatus(e, i)}>

                                        {item.status.map((itemStatus, index) => {
                                            return <option key={index}>{itemStatus}</option>;
                                        })}
                                    </select>
                                </td>
                                <td>
                                    <button id="buttonsTable"
                                        onClick={(e) => {
                                            this.props.showInfo(e, i);
                                            this.props.showModal();
                                        }}>O</button>
                                    <button id="buttonsTable"
                                        onClick={() => this.props.addRowInForm(i)}>E</button>
                                    <button id="buttonsTable"
                                        onClick={() => this.props.handleDeleteRow(i)}
                                    >D</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div >
        )
    }
}
export default Table;