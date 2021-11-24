import React from "react";
import "./button_create_new.css";


class ButtonCreateNew extends React.Component {
    render () {
        return (
            <button className="button-create-new__class" onClick={() => this.props.showForm()}>Create New</button>
        );
    }
}

export default ButtonCreateNew;