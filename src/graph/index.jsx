import React from "react";
import MenuPage from "../menu";
import ListaImagini from "../image-list";
import ListHotels from "../hotel-list";
import './graph.css';
import { Tabs, Tab, AppBar } from '@material-ui/core';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import HotelIcon from '@mui/icons-material/Hotel';
import FlightIcon from '@mui/icons-material/Flight';
import SelectList from "../select-list";

class GraphPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        };
    }

    handleTabs = (event, value) => {
        this.setState({
            value
        });
        console.log(value);
    };


    render() {
        return (
            <div className="graph-page__container">
                <MenuPage />
                <div className="graph-page__container2">
                    <AppBar position="static" className="graph-page__appbar">
                        <Tabs value={this.state.value} onChange={this.handleTabs} className="graph-page__tabs">
                            <Tab 
                                label="Things to do" 
                                value={0} className="graph-page__tab" 
                                icon={<InsertInvitationIcon />} />
                            <Tab 
                                label="Flights" 
                                className="graph-page__tab" 
                                icon={<FlightIcon />} />
                            <Tab 
                                label="Hotels" 
                                className="graph-page__tab"
                                icon={<HotelIcon />} />
                        </Tabs>
                    </AppBar>
                    {this.state.value === 0 ? <ListaImagini/> : null}
                    {this.state.value === 1 ? <SelectList/> : null}
                    {this.state.value === 2 ? <ListHotels/> : null}
                </div>
            </div>
        );
    }
}

export default GraphPage