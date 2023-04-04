import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

const CommentsList = (props) => {
        return(
            <ListGroup>
                {props.comment.map((book) => 
                    <SingleComment singleComment={book.comment} commentId={book._id}></SingleComment>
                )}
            </ListGroup>
        )
};

export default CommentsList;