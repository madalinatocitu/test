import React from "react";
import MenuPage from "../menu";
import './graph.css';

class GraphPage extends React.Component {
    render () {
        return (
            <div className="graph-page__container">
                <MenuPage/>
            </div>
        );
    }
}

export default GraphPage;