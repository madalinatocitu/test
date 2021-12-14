import React from "react";
import "./image-list.css";
import { ImageList, ImageListItem } from '@material-ui/core';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import image1 from "./images/bucharest.jpg";
import image2 from "./images/cluj.jpg";
import image3 from "./images/delta_dunarii.jpg";
import image4 from "./images/marea_neagra.jpg";
import image5 from "./images/peles_castle.jpg";
import image6 from "./images/sighisoara.jpg";
import image7 from "./images/timisoara.jpg";
import image8 from "./images/transfagarasan.jpg";
import image9 from "./images/cimitirul_vesel.jpg";

class ListaImagini extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    img: image1,
                    title: 'Bucharest',
                },
                {
                    img: image2,
                    title: 'Cluj-Napoca',
                },
                {
                    img: image3,
                    title: 'Delta Dunarii',
                },
                {
                    img: image4,
                    title: 'Marea Neagra',
                },
                {
                    img: image5,
                    title: 'Castelul Peles',
                },
                {
                    img: image6,
                    title: 'Sighisoara',
                },
                {
                    img: image7,
                    title: 'Timisoara',
                },
                {
                    img: image8,
                    title: 'Transfagarasan',
                },
                {
                    img: image9,
                    title: 'Cimitirul vesel',
                }
            ]
        }
    }
    render() {
        return (
            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
                {this.state.items.map((item) => (
                    <ImageListItem key={item.img} >
                        <img
                            src={`${item.img}`}
                            srcSet={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                        />

                        <ImageListItemBar title={item.title} />
                    </ImageListItem>

                ))}
            </ImageList>
        );
    }
}

export default ListaImagini;