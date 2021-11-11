import React from 'react';
import './table.css';


class Table extends React.Component {
    render() {
        return (
            <div className="table">
                <table>
                    <thead>
                        <tr className="table__th">
                            <th>No.</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.items.map((item =>
                            <tr key={item.no}>
                                <td>{item.no}</td>
                                <td id="descriptionId">{item.description}</td>
                                <td id="dateId">{item.date}</td>
                                <td id="statusId">
                                    <select name="staus">
                                        {item.status.map(((itemStatus, index) =>
                                            <option value="status" key={index}>{itemStatus}</option>
                                        ))}

                                        {/* <option value="open">Open</option>
                                    <option value="in progress">In progress</option>
                                    <option value="opedonen">Done</option> */}
                                    </select>
                                </td>
                                <td>
                                    <button id="buttonsTable">O</button>
                                    <button id="buttonsTable">E</button>
                                    <button id="buttonsTable">D</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        )
    }
}
export default Table;