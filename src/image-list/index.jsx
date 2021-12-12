import React from "react";
import "./image-list.css";
import { ImageList, ImageListItem, ListSubheader } from '@material-ui/core';
import image1 from "./images/bucharest.jpg";

class ListaImagini extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    img: image1,
                    title: 'Bucharest',
                }
            ]
        }
    }
    render() {
        return (
            <div className="image-list__container">
                <ImageList rowHeight={180} className="image-list__list">
                    <ImageListItem cols={2} style={{ height: 'auto' }}>
                        <ListSubheader component="div" className="image-list__footer">Places to visit in Romania</ListSubheader>
                    </ImageListItem>
                    {this.state.items.map((item) => (
                        <ImageListItem key={item.img}>
                            <img src={item.img} alt={item.title} />
                        </ImageListItem>
                    ))}
                </ImageList>
            </div>
        );
    }
}

export default ListaImagini;