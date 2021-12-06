import React from "react";
import './help.css';
import MenuPage from "../menu";

class HelpPage extends React.Component {
    render () {
        return (
            <div className="help-page__container">
                <MenuPage/>
            </div>
        );
    }
}

export default HelpPage;