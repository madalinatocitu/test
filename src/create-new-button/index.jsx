import React from "react";
import "./create-new-button.css";


class ButtonCreateNew extends React.Component {
    render () {
        return (
            <button className="button-create-new__class" onClick={() => this.props.showForm()}>Create New</button>
        );
    }
}

export default ButtonCreateNew;