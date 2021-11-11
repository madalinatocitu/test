import React from "react";
import './form.css';

class Form extends React.Component {
    render() {
        return (
            <div className="form__container">
                <form >
                    <div className="form__container__title">
                        <label>FORM</label> <br />
                    </div>
                    <label htmlFor="description">Description:</label>
                    <input type="text" id="description" value={this.props.newItem.description} placeholder="Enter description..." onChange={this.props.handleUserInput}/> <br />
                    <label htmlFor="date">Date:</label>
                    <input type="text" id="date" value={this.props.newItem.date} placeholder="Enter date..." onChange={this.props.handleUserInput}/> <br />
                    <label htmlFor="notes">Notes:</label>
                    <input type="text" id="notes" value={this.props.newItem.notes} placeholder="Enter notes..." onChange={this.props.handleUserInput}/>
                </form>

                <div className="form__button">
                    <button id="button_id" onClick={this.props.addNewTask}>Add task</button>
                </div>
            </div>

        );
    }
}

export default Form;