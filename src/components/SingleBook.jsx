import { useState } from "react";
import {Card} from 'react-bootstrap';
import CommentArea from "./CommentArea";

const SingleBook = (props) => {
    
    const [selected, setSelected] = useState(false)

    const handleChange = () => {
        setSelected(!selected)
    };
    
        const cardClassName = selected ? "border-2 border-danger" : "";

        return(
            <Card className={cardClassName}>
            <Card.Img 
            src={props.img} 
            className="img-fluid contain" 
            onClick={handleChange}/>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                € {props.price}
                </Card.Text>
                {selected && <CommentArea id={props.id}>
                </CommentArea> }
            </Card.Body>
            </Card>
        )
    
}

export default SingleBook;