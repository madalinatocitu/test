import React from "react";
import "./select-list.css";
//import ButtonCreateNew from "../create-new-button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';


class SelectList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startingPoint: '',
            destination: ''
        }
    }

    handleChangeStartingPoint(e) {
        this.setState({
            startingPoint: e.target.value,
        });
        console.log(e.target.value);
    }

    handleChangeDestination(e) {
        this.setState({
            destination: e.target.value,
        });
        console.log(e.target.value);
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
                        <MenuItem value={1}>Amsterdam</MenuItem>
                        <MenuItem value={2}>Andora la Vella</MenuItem>
                        <MenuItem value={3}>Athens</MenuItem>
                        <MenuItem value={4}>Belgrade</MenuItem>
                        <MenuItem value={5}>Berlin</MenuItem>
                        <MenuItem value={6}>Bern</MenuItem>
                        <MenuItem value={7}>Bratislava</MenuItem>
                        <MenuItem value={8}>Brussel</MenuItem>
                        <MenuItem value={9}>Bucharest</MenuItem>
                        <MenuItem value={10}>Budapest</MenuItem>
                        <MenuItem value={11}>Chisinau</MenuItem>
                        <MenuItem value={12}>Copenhaga</MenuItem>
                        <MenuItem value={13}>Dublin</MenuItem>
                        <MenuItem value={14}>Helsiki</MenuItem>
                        <MenuItem value={15}>Kiev</MenuItem>
                        <MenuItem value={16}>Lisbon</MenuItem>
                        <MenuItem value={17}>Ljubljana</MenuItem>
                        <MenuItem value={18}>London</MenuItem>
                        <MenuItem value={19}>Luxemburg</MenuItem>
                        <MenuItem value={20}>Madrid</MenuItem>
                        <MenuItem value={21}>Minsk</MenuItem>
                        <MenuItem value={22}>Monaco</MenuItem>
                        <MenuItem value={23}>Moscow</MenuItem>
                        <MenuItem value={24}>Oslo</MenuItem>
                        <MenuItem value={25}>Paris</MenuItem>
                        <MenuItem value={26}>Podgorica</MenuItem>
                        <MenuItem value={27}>Reykjavik</MenuItem>
                        <MenuItem value={28}>Riga</MenuItem>
                        <MenuItem value={29}>Rome</MenuItem>
                        <MenuItem value={30}>San Marino</MenuItem>
                        <MenuItem value={31}>Sarajevo</MenuItem>
                        <MenuItem value={32}>Skopje</MenuItem>
                        <MenuItem value={33}>Sofia</MenuItem>
                        <MenuItem value={34}>Stockholm</MenuItem>
                        <MenuItem value={35}>Tallin</MenuItem>
                        <MenuItem value={36}>Tirna</MenuItem>
                        <MenuItem value={37}>Vaduz</MenuItem>
                        <MenuItem value={38}>Valletta</MenuItem>
                        <MenuItem value={39}>Vienna</MenuItem>
                        <MenuItem value={40}>Vilnius</MenuItem>
                        <MenuItem value={41}>Warsaw</MenuItem>
                        <MenuItem value={42}>Zagreb</MenuItem>

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
                        <MenuItem value={1}>Amsterdam</MenuItem>
                        <MenuItem value={2}>Andora la Vella</MenuItem>
                        <MenuItem value={3}>Athens</MenuItem>
                        <MenuItem value={4}>Belgrade</MenuItem>
                        <MenuItem value={5}>Berlin</MenuItem>
                        <MenuItem value={6}>Bern</MenuItem>
                        <MenuItem value={7}>Bratislava</MenuItem>
                        <MenuItem value={8}>Brussel</MenuItem>
                        <MenuItem value={9}>Bucharest</MenuItem>
                        <MenuItem value={10}>Budapest</MenuItem>
                        <MenuItem value={11}>Chisinau</MenuItem>
                        <MenuItem value={12}>Copenhaga</MenuItem>
                        <MenuItem value={13}>Dublin</MenuItem>
                        <MenuItem value={14}>Helsiki</MenuItem>
                        <MenuItem value={15}>Kiev</MenuItem>
                        <MenuItem value={16}>Lisbon</MenuItem>
                        <MenuItem value={17}>Ljubljana</MenuItem>
                        <MenuItem value={18}>London</MenuItem>
                        <MenuItem value={19}>Luxemburg</MenuItem>
                        <MenuItem value={20}>Madrid</MenuItem>
                        <MenuItem value={21}>Minsk</MenuItem>
                        <MenuItem value={22}>Monaco</MenuItem>
                        <MenuItem value={23}>Moscow</MenuItem>
                        <MenuItem value={24}>Oslo</MenuItem>
                        <MenuItem value={25}>Paris</MenuItem>
                        <MenuItem value={26}>Podgorica</MenuItem>
                        <MenuItem value={27}>Reykjavik</MenuItem>
                        <MenuItem value={28}>Riga</MenuItem>
                        <MenuItem value={29}>Rome</MenuItem>
                        <MenuItem value={30}>San Marino</MenuItem>
                        <MenuItem value={31}>Sarajevo</MenuItem>
                        <MenuItem value={32}>Skopje</MenuItem>
                        <MenuItem value={33}>Sofia</MenuItem>
                        <MenuItem value={34}>Stockholm</MenuItem>
                        <MenuItem value={35}>Tallin</MenuItem>
                        <MenuItem value={36}>Tirna</MenuItem>
                        <MenuItem value={37}>Vaduz</MenuItem>
                        <MenuItem value={38}>Valletta</MenuItem>
                        <MenuItem value={39}>Vienna</MenuItem>
                        <MenuItem value={40}>Vilnius</MenuItem>
                        <MenuItem value={41}>Warsaw</MenuItem>
                        <MenuItem value={42}>Zagreb</MenuItem>
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
                        />
                    </Stack>
                    <TextField label="Passanger" variant="outlined" sx={{ paddingLeft: '8px', paddingTop: '10px' }} />
                </div>


                <FormControl component="fieldset" sx={{paddingLeft: '8px', paddingTop: '10px'}}>
                    <RadioGroup
                        aria-label="trips"
                        defaultValue="One way"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="one-way" control={<Radio />} label="One way" sx={{color: 'black'}}/>
                        <FormControlLabel value="round-trip" control={<Radio />} label="Round trip" sx={{color: 'black'}}/>
                    </RadioGroup>
                </FormControl>
                <button className="button-create-new__class" >Book the flight</button>

            </div>
        );
    }
}

export default SelectList;