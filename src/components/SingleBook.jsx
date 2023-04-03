import { Component } from "react";
import {Card} from 'react-bootstrap';
import CommentArea from "./CommentArea";

class SingleBook extends Component {
    state = {
        selected: false,
    };
    handleChange = () => {
        this.setState({ selected: !this.state.selected });
    };
    
    render() {
        const cardClassName = this.state.selected ? "border-2 border-danger" : "";
        return(
            <Card className={cardClassName}>
            <Card.Img 
            src={this.props.img} 
            className="img-fluid contain" 
            onClick={this.handleChange}/>
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>
                € {this.props.price}
                </Card.Text>
                {this.state.selected && <CommentArea id={this.props.id}>
                </CommentArea> }
            </Card.Body>
            </Card>
        )
    }
}

export default SingleBook;