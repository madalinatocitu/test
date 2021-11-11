import React from 'react';
import './my-tasks-page.css';
import MenuPage from '../menu/';
import Table from '../table';
import Form from '../form';
import Modal from '../modal';

class MyTasksPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            table: {
                items: [
                    {
                        no: 1,
                        description: "Finish my homework",
                        date: "12/12/2021",
                        status: ["open", "in progress", "done"]
                    },

                    {
                        no: 2,
                        description: "Walk the dog",
                        date: "02/11/2021",
                        status: ["open", "in progress", "done"]
                    },
                    {
                        no: 3,
                        description: "Make the presentation",
                        date: "15/11/2021",
                        status: ["open", "in progress", "done"]
                    },
                    {
                        no: 4,
                        description: "Volunteer activity form",
                        date: "20/11/2021",
                        status: ["open", "in progress", "done"]
                    },
                    {
                        no: 5,
                        description: "Finish the OOP project",
                        date: "26/01/2022",
                        status: ["open", "in progress", "done"]
                    }
                ]
            },
            form: {
                description: '',
                date: '',
                notes: ''
            }
        }
        this.addNewTask = this.addNewTask.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
    }

    addNewTask (e) {
        e.preventDefault();
        this.setState({
            ...this.state,  //copiaza tot ce aveam in state pana in momentul respectiv
            table: {
                ...this.state.table,    //copiaza tot ce aveam in tabel pana in mom respectiv
                items: [...this.state.table.items, {    //adauga obiectul cu prop no, description, date, notes, status
                    no: 6,
                    description: this.state.form.description,   //nu punem intre {} pentru ca vrem ca this.state.form.description sa aiba aceeasi forma ca description
                    date: this.state.form.date,
                    notes: this.state.form.notes,
                    status: ["open", "in progress", "done"]
                }]
            }
        })
    }

    handleUserInput (e) {
        // console.log(e.target.value);
        this.setState({
            form: e.target.value
        });
    }



    render() {
        return (
            <div className="my-tasks-page">
                <MenuPage />
                <div className="my-tasks-page__container">
                    <h2 className="my-tasks-page__title">My tasks</h2>
                    <div className="my-tasks-page__table-and-form">
                        <Table items={this.state.table.items} />
                        <Form newItem={this.state.form} handleUserInput = {this.handleUserInput} addNewTask={this.addNewTask}/>
                    </div>
                    <Modal />
                </div>
            </div>
        );
    }
}
export default MyTasksPage;