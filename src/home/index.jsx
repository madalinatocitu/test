import React from "react";
import "./home.css";
import MenuPage from "../menu";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
// import API from './api.jsx';
// import RemovePerson from "./RemovePerson";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
            ]
        }
    }
    // componentDidMount() {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.setState({
    //             items: data
    //         })
    //         console.log(data)
    //     })

    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then (response => {
    //             const items = response.data;
    //             this.setState({
    //                 items
    //             });
    //         })  
    // }

    // async componentDidMount () {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const data = await response.json();
    //     this.setState ({
    //         items: data
    //     });
    // }

    async componentDidMount() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        // console.log(response.data);
        this.setState({
            items: response.data
        });
        console.log(this.state.items);
    }


    handleChange(e, id) {
        const id2 = e.target.value;
        // console.log(id2);
        // console.log(this.state.items[id2-1].title);
        console.log(this.state.items[id2 - 1]); // elementul ce trebuie sters
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.state.items[id2 - 1]}`)
            .then(response => {
                console.log(response);
                console.log(response.data);

                const ceva = this.state.items.filter(item => item.id !== id);
                this.setState({
                    ceva
                });
            })
    }

    render() {
        return (
            <div className="home-page__container">
                <MenuPage />
                <TableContainer className="home__table-container" >
                    <Table className="home__table" stickyHeader>
                        <TableHead className="home__table-head">
                            <TableRow className="home__table-row">
                                <TableCell className="home__table-cell-header" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Id</TableCell>
                                <TableCell className="home__table-cell-header" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>UserID</TableCell>
                                <TableCell className="home__table-cell-header" style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 17 }}>Title</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {this.state.items.map((item, i) => (
                                <TableRow key={item.id}>
                                    <TableCell className="home__table-cell">
                                        {item.id}
                                    </TableCell>
                                    <TableCell className="home__table-cell">{item.userId}</TableCell>
                                    <TableCell className="home__table-cell">{item.title}</TableCell>
                                    <TableCell className="home__table-cell" >
                                        <button className="button" onClick={(e) => this.handleChange(e, i)}>Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                {/* <div>
                    <form onSubmit={(e) => this.handleDelete(e)}>
                        <label>
                            Person ID:
                            {this.state.items.map((item, id) => (
                                 <input type="number" name="id" onChange={(e) => this.handleChange(e, id)}/>
                            ))}
                            <input type="number" name="id" onChange={(e) => this.handleChange(e)}/>
                        </label> 
                        <button type="submit">Delete</button>
                    </form>
                </div> */}
            </div>
        );
    }
}

export default HomePage;