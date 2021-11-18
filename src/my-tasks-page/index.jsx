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
                        status: ["open", "in progress", "done"],
                        notes: ''
                    },

                    {
                        no: 2,
                        description: "Walk the dog",
                        date: "02/11/2021",
                        status: ["open", "in progress", "done"],
                        notes: ''
                    },
                    {
                        no: 3,
                        description: "Make the presentation",
                        date: "15/11/2021",
                        status: ["open", "in progress", "done"],
                        notes: ''
                    },
                    {
                        no: 4,
                        description: "Volunteer activity form",
                        date: "20/11/2021",
                        status: ["open", "in progress", "done"],
                        notes: ''
                    },
                    {
                        no: 5,
                        description: "Finish the OOP project",
                        date: "26/01/2022",
                        status: ["open", "in progress", "done"],
                        notes: ''
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
            },
            form: {
                description: '',
                date: '',
                notes: ''
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
        this.setState({
            selectedTask: this.state.table.items[index],
        });
        console.log("functioneaza");
    }

    showModal() {
        this.setState(
            { isModalVisible: true }
        );
        console.log("modalul a aparut");
        console.log(this.state.isModalVisible);
    }

    handleClick (e) {
        if(this.state.isModalVisible) {
            this.closeModal();
            return;
        }
        this.setState( 
            {isModalVisible: true}
        );
        e.stopPropagation();
        document.addEventListener("click", this.closeModal);
    };

    closeModal () {
        this.setState(
            { isModalVisible: false}
        );
        document.removeEventListener("click", this.closeModal)
    };

    handleDeleteRow (i) {
        console.log("am apasat butonul de delete");
        let rows = this.state.table.items
        //console.log(rows);
        rows.splice(i,1)
        //console.log(rows);
        this.setState({
            items: rows
        });
        console.log(this.state.table.items);
    }

    addRowInForm (i) {
        console.log("am apasat butonul de edit");
        console.log(this.state.table.items[i].description);
        this.setState({
            form: {
                description: this.state.table.items[i].description,
                date: this.state.table.items[i].date,
                notes: this.state.table.items[i].notes || '-'
                // {(!this.state.table.items[i].notes)
                // ? notes:this.state.items[i].notes,
                // : null}
            }
        });

    }

    render() {
        return (
            <div className="my-tasks-page">
                <MenuPage />
                <div className="my-tasks-page__container">
                    <h2 className="my-tasks-page__title">My tasks</h2>
                    <div className="my-tasks-page__table-and-form">
                        <Table
                            items={this.state.table.items}
                            showInfo={(e, index) => this.showInfo(e, index)}
                            showModal={() => this.showModal()}
                            handleDeleteRow={(i) => this.handleDeleteRow(i)} 
                            addRowInForm={(i) => this.addRowInForm(i)}/>
                        <Form
                            newItem={this.state.form}
                            handleUserInput={(e, inputName) => this.handleUserInput(e, inputName)}
                            addNewTask={(e) => this.addNewTask(e)} />
                    </div>
                    <div> 
                        <Modal selectedTask={this.state.selectedTask}
                            isModalVisible={this.state.isModalVisible}
                            handleClick={(e) => this.handleClick(e)}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default MyTasksPage;