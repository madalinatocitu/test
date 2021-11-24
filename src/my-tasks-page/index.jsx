import React from 'react';
import './my-tasks-page.css';
import MenuPage from '../menu/';
import Table from '../table';
import Form from '../form';
import Modal from '../modal';
import ButtonCreateNew from '../button_create_new';
import StatusEvidence from '../statusEvidence';

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
                        priority: ["minor", "major", "critical"],
                        status: ["open", "in progress", "done"],
                        notes: '',
                        currentStatus: "open",
                        currentPriority: "minor"
                    },

                    {
                        no: 2,
                        description: "Walk the dog",
                        date: "02/11/2021",
                        priority: ["minor", "major", "critical"],
                        status: ["open", "in progress", "done"],
                        notes: '',
                        currentStatus: "open",
                        currentPriority: "minor"
                    },
                    {
                        no: 3,
                        description: "Make the presentation",
                        date: "15/11/2021",
                        priority: ["minor", "major", "critical"],
                        status: ["open", "in progress", "done"],
                        notes: '',
                        currentStatus: "open",
                        currentPriority: "minor"
                    },
                    {
                        no: 4,
                        description: "Volunteer activity form",
                        date: "20/11/2021",
                        priority: ["minor", "major", "critical"],
                        status: ["open", "in progress", "done"],
                        notes: '',
                        currentStatus: "open",
                        currentPriority: "minor"
                    },
                    {
                        no: 5,
                        description: "Finish the OOP project",
                        date: "26/01/2022",
                        priority: ["minor", "major", "critical"],
                        status: ["open", "in progress", "done"],
                        notes: '',
                        currentStatus: "open",
                        currentPriority: "minor"
                    }
                ]
            },
            form: {
                description: '',
                date: '',
                notes: ''
            },
            selectedTask: null,
            isModalVisible: false,
            isFormVisible: false,
            color: ''
        }
    }

    addNewTask(e) {
        e.preventDefault();
        if (this.state.form.description && this.state.form.date) {
            this.setState({
                ...this.state,  //copiaza tot ce aveam in state pana in momentul respectiv
                table: {
                    ...this.state.table,    //copiaza tot ce aveam in tabel pana in mom respectiv
                    items: [...this.state.table.items, {    //adauga obiectul cu prop no, description, date, notes, status
                        no: this.state.table.items[this.state.table.items.length - 1].no + 1,
                        description: this.state.form.description,   //nu punem intre {} pentru ca vrem ca this.state.form.description sa aiba aceeasi forma ca description
                        date: this.state.form.date,
                        notes: this.state.form.notes,
                        priority: ["minor", "major", "critical"],
                        status: ["open", "in progress", "done"],
                        currentStatus: "open",
                        currentPriority: "minor"
                    }]
                },
                form: {
                    description: '',
                    date: '',
                    notes: ''
                }
            })
            console.log(this.state.isButtonDisabled);
        }
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

    handleClick(e) {
        if (this.state.isModalVisible) {
            this.closeModal();
            return;
        }
        this.setState(
            { isModalVisible: true }
        );
        e.stopPropagation();
        document.addEventListener("click", this.closeModal);
    };

    closeModal() {
        this.setState(
            { isModalVisible: false }
        );
        document.removeEventListener("click", this.closeModal)
    };

    handleDeleteRow(i) {
        let rows = this.state.table.items
        rows.splice(i, 1)
        this.setState({
            items: rows
        });
        //facem o copie la items pentru a le updata numarul de fiecare data cand un rand este sters din tabel
        //ne-ma folosit de index, deoarece numarul din tabel este egal cu indexul plus 1
        const copieItems = this.state.table.items.slice();
        copieItems.forEach((copie, index2) => {
                copie.no = index2+1;
        });
        this.setState({ copieItems });
    }

    addRowInForm(i) {
        if (this.state.isFormVisible === false) {
            this.setState(
                { isFormVisible: true }
            );
            document.removeEventListener("click", this.showForm)
        }
        this.setState({
            form: {
                description: this.state.table.items[i].description,
                date: this.state.table.items[i].date,
                notes: this.state.table.items[i].notes || '-'
            }
        });
    }

    showForm() {
        this.setState(
            { isFormVisible: true }
        );
        console.log("formularul a aparut");
        console.log(this.state.isButtonDisabled);
        document.removeEventListener("click", this.showForm)
    }

    handleFormClick(e) {
        if (this.state.isFormVisible) {
            return;
        }
        this.setState(
            { isFormVisible: true }
        );
        e.stopPropagation();
        document.addEventListener("click", this.showForm);
    }

    countStatus(e, index) {
        const copieItems = this.state.table.items.slice();
        copieItems.forEach((copie, index2) => {
            if (index === index2) {
                copie.currentStatus = e.target.value;
            }
        });
        this.setState({ copieItems });
    }

    countPriority(e, index) {
        const copieItems = this.state.table.items.slice();
        copieItems.forEach((copie, index2) => {
            if (index === index2) {
                copie.currentPriority = e.target.value;
            }
        });
        this.setState({ copieItems });
    }

    changeColor (e, index) {
        if(this.state.table.items[index].currentStatus === 'done') {
            this.setState(
                { color: 'green'}
            );
        }
        else {
            if (this.state.table.items[index].currentPriority === 'critical') {
                this.setState(
                    { color: 'red'}
                );
            }

            if(this.state.table.items[index].currentPriority === 'minor') {
                this.setState(
                    { color: 'grey'}
                );
            }
        }
        console.log(this.state.table.items[index].currentPriority);
    }


    render() {

        const openTaks = this.state.table.items.filter(
            sts => sts.currentStatus === 'open'
        );

        const inProgressTasks = this.state.table.items.filter(
            sts => sts.currentStatus === 'in progress'
        );

        const doneTasks = this.state.table.items.filter(
            sts => sts.currentStatus === 'done'
        );


        return (
            <div className="my-tasks-page">
                <MenuPage />
                <div className="my-tasks-page__container">
                    <h2 className="my-tasks-page__title">My tasks</h2>
                    <div>
                        <StatusEvidence
                            openTaks={openTaks.length}
                            inProgressTasks={inProgressTasks.length}
                            doneTasks={doneTasks.length} />
                    </div>
                    <div>
                        <ButtonCreateNew showForm={() => this.showForm()} />
                    </div>

                    <div className="my-tasks-page__table-and-form">

                        <Table
                            items={this.state.table.items}
                            showInfo={(e, index) => this.showInfo(e, index)}
                            showModal={() => this.showModal()}
                            handleDeleteRow={(i) => this.handleDeleteRow(i)}
                            addRowInForm={(i) => this.addRowInForm(i)}
                            countStatus={(e, index) => this.countStatus(e, index)}
                            countPriority={(e, index) => this.countPriority(e, index)}
                            changeColor={(e, index) => this.changeColor(e, index)}
                            color={this.state.color}/>

                        <Form
                            isFormVisible={this.state.isFormVisible}
                            newItem={this.state.form}
                            handleUserInput={(e, inputName) => this.handleUserInput(e, inputName)}
                            addNewTask={(e) => this.addNewTask(e)}
                            dis={!this.state.form.description || !this.state.form.date} />
                    </div>
                    <div>
                        <Modal selectedTask={this.state.selectedTask}
                            isModalVisible={this.state.isModalVisible}
                            handleClick={(e) => this.handleClick(e)} />
                    </div>
                </div>
            </div>
        );
    }
}
export default MyTasksPage;