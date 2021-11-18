import React from 'react';
import './menu.css';

//meniul din stanga 

class MenuPage extends React.Component {
    render() {
        return (
            <div className="menu-page__container">
                <ul>
                    <li id="home_id">Home</li>
                    <li id="my-tasks_id">My tasks</li>
                    <li id="graph_id">Graph</li>
                    <li id="help_id">Help</li>
                </ul>
            </div>
        );
    }
}
export default MenuPage;