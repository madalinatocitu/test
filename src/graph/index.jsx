import React from "react";
import MenuPage from "../menu";
import ListaImagini from "../image-list";
import './graph.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
//import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
// import PhoneIcon from '@mui/icons-material/Phone';

// class TabPanel extends React.Component {
//     constructor(props) {
//         super (props);
//         this.state = {
//             value: 0,
//             index: 0
//         }
//     }
//     render () {
//         return (
//             <div
//                 hidden = {this.state.value !== this.state.index}
//             >
//                 ceva
//             </div>
//         );
//     }
// }


class GraphPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '0',
        };
    }

    handleTabs = (_, value) => {
        this.setState({
            value
        });
    };


    render() {
        return (
            <div className="graph-page__container">
                <MenuPage />
                <div className="graph-page__container2">
                    <AppBar position="static" className="graph-page__appbar">
                        <Tabs value={this.state.value} onChange={this.handleTabs} className="graph-page__tabs">
                            <Tab label="Things to do" value='0' className="graph-page__tab" />
                            <Tab label="Flights" value='1' className="graph-page__tab" />
                            <Tab label="Hotels" value='2' className="graph-page__tab" />
                        </Tabs>
                    </AppBar>
                    {/* <div className="graph-page__tabPanel"></div> */}
                    <ListaImagini className="graph-page__tabPanel"/>
                </div>
            </div>
        );
    }
}

export default GraphPage;