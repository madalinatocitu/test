import React from "react";
import "./select-list.css";
//import Modal from "../modal";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


class SelectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startingPoint: '',
            destination: '',
            date: '',
            passager: '',
            showModal: 0,
            items: [
                {
                    value: 1,
                    country: 'Amsterdam'
                },
                {
                    value: 2,
                    country: 'Andora la Vella'
                },
                {
                    value: 3,
                    country: 'Athens'
                },
                {
                    value: 4,
                    country: 'Belgrade'
                },
                {
                    value: 5,
                    country: 'Berlin'
                },
                {
                    value: 6,
                    country: 'Bern'
                },
                {
                    value: 7,
                    country: 'Bratislava'
                },
                {
                    value: 8,
                    country: 'Brussels'
                },
                {
                    value: 9,
                    country: 'Bucharest'
                },
                {
                    value: 10,
                    country: 'Budapest'
                },
                {
                    value: 11,
                    country: 'Chisinau'
                },
                {
                    value: 12,
                    country: 'Copenhaga'
                },
                {
                    value: 13,
                    country: 'Dublin'
                },
                {
                    value: 14,
                    country: 'Helsinki'
                },
                {
                    value: 15,
                    country: 'Kiev'
                },
                {
                    value: 16,
                    country: 'Lisbon'
                },
                {
                    value: 17,
                    country: 'Ljubljana'
                },
                {
                    value: 18,
                    country: 'London'
                },
                {
                    value: 19,
                    country: 'Luxemburg'
                },
                {
                    value: 20,
                    country: 'Madrid'
                },
                {
                    value: 21,
                    country: 'Minsk'
                },
                {
                    value: 22,
                    country: 'Monaco'
                },
                {
                    value: 23,
                    country: 'Moscow'
                },
                {
                    value: 24,
                    country: 'Oslo'
                },
                {
                    value: 25,
                    country: 'Paris'
                },
                {
                    value: 26,
                    country: 'Podgorica'
                },
                {
                    value: 27,
                    country: 'Prague'
                },
                {
                    value: 28,
                    country: 'Reykjavik'
                },
                {
                    value: 29,
                    country: 'Riga'
                },
                {
                    value: 30,
                    country: 'Rome'
                },
                {
                    value: 31,
                    country: 'San Marino'
                },
                {
                    value: 32,
                    country: 'Sarajevo'
                },
                {
                    value: 33,
                    country: 'Skopje'
                },
                {
                    value: 34,
                    country: 'Sofia'
                },
                {
                    value: 35,
                    country: 'Stockholm'
                },
                {
                    value: 36,
                    country: 'Tallin'
                },
                {
                    value: 37,
                    country: 'Tirana'
                },
                {
                    value: 38,
                    country: 'Vaduz'
                },
                {
                    value: 39,
                    country: 'Valleta'
                },
                {
                    value: 40,
                    country: 'Vienna'
                },
                {
                    value: 41,
                    country: 'Vilnius'
                },
                {
                    value: 42,
                    country: 'Warsaw'
                },
                {
                    value: 43,
                    country: 'Zagreb'
                }
            ]
        }
    }

    handleChangeStartingPoint(e) {
        this.setState({
            startingPoint: e.target.value,
        });
    }

    handleChangeDestination(e) {
        this.setState({
            destination: e.target.value,
        });
    }

    handleChangeDate(e) {
        this.setState({
            date: e.target.value
        });
    }

    handleChangePassager(e) {
        this.setState({
            passager: e.target.value
        });
    }

    showModal(e) {
        this.setState({
            showModal: 1
        });
    }

    hideModal(e) {
        this.setState({
            showModal: 0
        });
    }

    render() {
        return (
            <div className="select-list__container">
                <h2>Where do you like to go?</h2>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>From</InputLabel>
                    <Select
                        value={this.state.startingPoint}
                        label="startingPoint"
                        onChange={(e) => this.handleChangeStartingPoint(e)}
                        sx={{ width: '400px' }}
                    >
                        {this.state.items.map((item) =>
                            <MenuItem value={item.value}>{item.country}</MenuItem>
                        )}

                    </Select>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>To</InputLabel>
                    <Select
                        value={this.state.destination}
                        label="destination"
                        onChange={(e) => this.handleChangeDestination(e)}
                        sx={{ width: '400px' }}
                    >
                        {this.state.items.map((item) =>
                            <MenuItem value={item.value}>{item.country}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <div className="date-and-class">
                    <Stack sx={{ paddingLeft: '8px', paddingTop: '10px' }}>
                        <TextField
                            id="date"
                            label="departureDate"
                            type="date"
                            defaultValue="dd/mm/yyyy"
                            sx={{ width: 220 }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e) => this.handleChangeDate(e)}
                        />
                    </Stack>

                    <TextField
                        label="Passanger"
                        variant="outlined"
                        sx={{ paddingLeft: '8px', paddingTop: '10px' }}
                        onChange={(e) => this.handleChangePassager(e)} />
                </div>


                <FormControl component="fieldset" sx={{ paddingLeft: '8px', paddingTop: '10px' }}>
                    <RadioGroup
                        aria-label="trips"
                        defaultValue="one-way"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="one-way" control={<Radio />} label="One way" sx={{ color: 'black' }} />
                        <FormControlLabel value="round-trip" control={<Radio />} label="Round trip" sx={{ color: 'black' }} />
                    </RadioGroup>
                </FormControl>

                <button
                    className="button-create-new__class"
                    disabled={!this.state.startingPoint || !this.state.destination || !this.state.date || !this.state.passager}
                    style={{
                        color: (!this.state.startingPoint || !this.state.destination || !this.state.date || !this.state.passager) ? 'grey' : 'rgb(126, 33, 126)'
                    }}
                    onClick={(e) => this.showModal(e)}
                >Book the flight</button>
                <Modal
                    open={this.state.showModal}
                    onClose={(e) => this.hideModal(e)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={{
                         position: 'absolute',
                         top: '50%',
                         left: '50%',
                         transform: 'translate(-50%, -50%)',
                         width: 400,
                         bgcolor: 'rgb(255,228,225)',
                         border: '2px solid rgb(255,20,147)',
                         boxShadow: 24,
                         padding: 4,
                    }}>
                        <div className="modal-box">
                            Successful operation!
                        </div>
                    </Box>
                </Modal>

            </div>
        );
    }
}

export default SelectList;