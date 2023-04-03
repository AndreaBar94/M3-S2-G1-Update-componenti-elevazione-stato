import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
    render(){
        return(
            <ListGroup>
                {this.props.comment.map((book) => 
                    <SingleComment singleComment={book.comment}></SingleComment>
                )}
            </ListGroup>
        )
    }
};

export default CommentsList;