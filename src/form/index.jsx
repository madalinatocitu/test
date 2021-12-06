import React from "react";
import './form.css';

class Form extends React.Component {
    render() {
        return (
            this.props.isFormVisible
                ?
                <div className="form__container">
                    <form >
                        <div className="form__container__title">
                            <label className="form__title">FORM</label> <br />
                        </div>
                        <label htmlFor="description">Description:</label>
                        <input
                            type="text"
                            id="description"
                            value={this.props.newItem.description}
                            placeholder="Enter description..."
                            onChange={(e) => this.props.handleUserInput(e, 'description')} /> <br />

                        <label htmlFor="date">Date:</label>
                        <input type="text"
                            id="date"
                            value={this.props.newItem.date}
                            placeholder="Enter date..."
                            onChange={(e) => this.props.handleUserInput(e, 'date')} /> <br />

                        <label htmlFor="notes">Notes:</label>
                        <input type="text"
                            id="notes"
                            value={this.props.newItem.notes}
                            placeholder="Enter notes..."
                            onChange={(e) => this.props.handleUserInput(e, 'notes')} />
                    </form>

                    <div className="form__button">
                        <button id="button_id" 
                        onClick={this.props.addNewTask}
                        disabled={this.props.isAddButtonDisabled}
                        style={{
                            color: this.props.isAddButtonDisabled ? 'grey' : 'red'
                        }}
                        >Add task</button>
                        {/* disabled={true} -> butonul nu este activ */}
                    </div>
                </div>
                : null

        );
    }
}

export default Form;