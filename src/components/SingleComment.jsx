import { ListGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";

let authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzI5NGY4MWI0MjAwMTM5YjI3ZWQiLCJpYXQiOjE2ODA1MjQ2NDksImV4cCI6MTY4MTczNDI0OX0.niPd6nu1dFizpA8FFK5zdC_prg92GwBgNRGPoAgDQ4g";

const SingleComment = (props) => {
    const deleteComment = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/comments/' + props.commentId,
                {
                method: 'DELETE',
                headers: {
                    Authorization: authorization,
                },
                }
            )
            if (response.ok) {
                alert('Comment was deleted successfully!')
            } else {
                alert('Error - comment was NOT deleted!')
            }
            } catch (error) {
            alert('Error - comment was NOT deleted!')
            }
        }
        return(
            <>
            <ListGroup.Item>
                {props.singleComment}
            </ListGroup.Item>
            <ListGroup.Item>
            <Button
                    variant="danger"
                    className="ml-2"
                    onClick={() => deleteComment(props._id)}
                >
                    Delete
                </Button>
            </ListGroup.Item>
            </>
            
        )
}

export default SingleComment;