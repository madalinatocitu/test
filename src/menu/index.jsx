import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

//meniul din stanga 

class MenuPage extends React.Component {
    render() {
        return (
            <div className="menu-page__container">
                <ul>
                    <li id="home_id">
                        <Link to = '/home'>Home</Link> 
                    </li>
                    <li id="my-tasks_id">
                        <Link to = '/my-tasks-page'> My tasks </Link>
                    </li>
                    <li id="graph_id">
                        <Link to = '/graph'>Graph</Link>
                    </li>
                    <li id="help_id">
                        <Link to = '/help'>Help</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default MenuPage;