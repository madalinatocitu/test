import React from "react";
import "./home.css";
import MenuPage from "../menu";

class HomePage extends React.Component {
    render () {
        return (
            <div className="home-page__container">
                <MenuPage />
            </div>
        );
    }
}

export default HomePage;