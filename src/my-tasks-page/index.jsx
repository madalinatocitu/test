import React from 'react';
import './my-tasks-page.css';
import MenuPage from '../menu/';
import Table from '../table';

//titlul paginii

class MyTasksPage extends React.Component {
    render() {
        return (
            <div id="myTasksPage">
                <MenuPage />
                <div id="class2">
                    <h2 id="title">My tasks</h2>
                    <Table />
                </div>
            </div>
        );
    }
}
export default MyTasksPage;