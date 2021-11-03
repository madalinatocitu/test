import React from 'react';
import './table.css';


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items:
                [
                    { no: "1.", description: "Finish my homework", date: "12/12/2021" },
                    { no: "2.", description: "Walk the dog", date: "02/11/2021" },
                    { no: "3.", description: "Make the presentation", date: "15/11/2021" },
                    { no: "4.", description: "Volunteer activity form", date: "20/11/2021" },
                    { no: "5.", description: "Finish the OOP project", date: "26/01/2022" }
                ]
        }

    }
    render() {
        return (
            <div class="tableClass">
                <table>
                    <tr id="c">
                        <th>No.</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                    {this.state.items.map((item =>
                        <tr>
                            <td>{item.no}</td>
                            <td id="descriptionId">{item.description}</td>
                            <td id="dateId">{item.date}</td>
                            <td id="statusId">
                                <select name="staus">
                                    <option value="open">Open</option>
                                    <option value="in progress">In progress</option>
                                    <option value="opedonen">Done</option>
                                </select>
                            </td>
                            <td>
                                <button  id="buttonsTable">O</button>
                                <button  id="buttonsTable">E</button>
                                <button  id="buttonsTable">D</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        )
    }
}
export default Table;