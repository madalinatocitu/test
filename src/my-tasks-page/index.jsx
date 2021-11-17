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
            },
            selectedTask: null,
            isModalVisible: false
        }
        this.addNewTask = this.addNewTask.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        this.showInfo = this.showInfo.bind(this);
        // this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
        this.handleModal = this.handleModal.bind(this);
    }

    addNewTask(e) {
        e.preventDefault();
        this.setState({
            ...this.state,  //copiaza tot ce aveam in state pana in momentul respectiv
            table: {
                ...this.state.table,    //copiaza tot ce aveam in tabel pana in mom respectiv
                items: [...this.state.table.items, {    //adauga obiectul cu prop no, description, date, notes, status
                    no: this.state.table.items[this.state.table.items.length - 1].no + 1,
                    description: this.state.form.description,   //nu punem intre {} pentru ca vrem ca this.state.form.description sa aiba aceeasi forma ca description
                    date: this.state.form.date,
                    notes: this.state.form.notes,
                    status: ["open", "in progress", "done"]
                }]
            }
        })
    }

    handleUserInput(e, inputName) {
        this.setState({
            form: {
                ...this.state.form,
                [inputName]: e.target.value
            }
        });

        // setTimeout (
        //     () => {console.log(this.state)},
        //     2000
        // )
    }

    showInfo(e, index) {
        console.log(this.state.table.items[index]);
        console.log(this.state.isModalVisible);
        this.setState({
            selectedTask: this.state.table.items[index],
            isModalVisible: true
        });
        console.log("functioneaza");
        console.log(this.state.isModalVisible);
    }

    // showModal() {
    //     this.setState(
    //         { isModalVisible: true }
    //     );
    // }

    hideModal() {
        this.setState(
            { isModalVisible: false }
        );
    }

    handleModal() {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }


    render() {
        return (
            <div className="my-tasks-page">
                <MenuPage />
                <div className="my-tasks-page__container">
                    <h2 className="my-tasks-page__title">My tasks</h2>
                    <div className="my-tasks-page__table-and-form">
                        <Table items={this.state.table.items} showInfo={this.showInfo} />
                        <Form newItem={this.state.form} handleUserInput={this.handleUserInput} addNewTask={this.addNewTask} />
                    </div>
                </div>
                <Modal selectedTask={this.state.selectedTask} isModalVisible={this.state.isModalVisible} onHide={() => this.handleModal()} />
                {/* https://blog.bitsrc.io/build-a-simple-modal-component-with-react-16decdc111a6 */}
            </div>
        );
    }
}
export default MyTasksPage;