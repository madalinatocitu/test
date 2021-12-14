import React from "react";
import "./hotel-list.css";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GradeIcon from '@mui/icons-material/Grade';


class ListHotels extends React.Component {
  render() {
    return (
      <div className="list-hotels__container">
        <List sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,133,153)', marginTop: 2, borderRadius: 2, marginLeft: 4 }}>
          <ListItem sx={{ backgroundColor: 'rgb(255,153,170)', width: '100%', maxWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Grand Hotel Continental"
              secondary="Bucharest" />
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,173,187)' }}>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary="56 Calea Victoriei, Sector 1, Bucharest, Romania" />
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,184,196)' }}>
            <ListItemAvatar>
              <Avatar>
                <GradeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Rating" secondary="9.6" />
          </ListItem>
        </List>

        <List sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,133,153)', marginTop: 2, borderRadius: 2, marginLeft: 3 }}>
          <ListItem sx={{ backgroundColor: 'rgb(255,153,170)', width: '100%', maxWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Hampton by Hilton"
              secondary="Cluj-Napoca" />
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,173,187)' }}>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary="B-ul 21 Decembrie 1989 nr. 67, Cluj-Napoca, Romania" />
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,184,196)' }}>
            <ListItemAvatar>
              <Avatar>
                <GradeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Rating" secondary="9.2" />
          </ListItem>
        </List>

        <List sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,133,153)', marginTop: 2, borderRadius: 2, marginLeft: 3 }}>
          <ListItem sx={{ backgroundColor: 'rgb(255,153,170)', width: '100%', maxWidth: 300 }}>
            <ListItemAvatar>
              <Avatar>
                <HomeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Lebada Luxury Resort and Spa "
              secondary="Delta Dunarii" />
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,173,187)' }}>
            <ListItemAvatar>
              <Avatar>
                <LocationOnIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Location" secondary="Crisan Mijlocul Biosferei Deltei Dunarii, Crisan, Romania" />
          </ListItem>
          <ListItem sx={{ width: '100%', maxWidth: 260, bgcolor: 'rgb(255,184,196)' }}>
            <ListItemAvatar>
              <Avatar>
                <GradeIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Rating" secondary="9.5" />
          </ListItem>
        </List>
      </div>
    );
  }
}

export default ListHotels;

