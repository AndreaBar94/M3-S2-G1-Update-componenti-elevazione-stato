import { ListGroup } from "react-bootstrap";

const SingleComment = (props) => {
        return(
            <ListGroup.Item>
                {props.singleComment}
            </ListGroup.Item>
        )
}

export default SingleComment;