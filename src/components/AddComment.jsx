import {useState} from "react";
import { Button, Form } from "react-bootstrap";

let authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzI5NGY4MWI0MjAwMTM5YjI3ZWQiLCJpYXQiOjE2ODA1MjQ2NDksImV4cCI6MTY4MTczNDI0OX0.niPd6nu1dFizpA8FFK5zdC_prg92GwBgNRGPoAgDQ4g";

const AddComment = (props) => {
    const [comment, setComment] = useState('');
    const [rate, setRate] = useState('');

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            headers: {
                Authorization : authorization,
                "Content-type": "application/json; charset=UTF-8"
            },
            method: "POST",
            body: JSON.stringify({comment: comment, rate: rate, elementId: props.id})
        })
            if(response.ok){
                alert("Commento inviato!");
                setComment("");
                setRate("");
                props.fetchComments()
            } else{
                alert("Errore nella pubblicazione del commento")
            }
        } catch (error) {
            console.log(error)
        }
    };

    const submitComment = (e) => {
		e.preventDefault();
		handleSubmit();
	};

        return(
            <>
            <Form onSubmit={submitComment}>
                <Form.Group>
                    <Form.Control 
                    type="text" 
                    placeholder="Inserisci qui il tuo commento"
                    onChange={(e)=>{setComment(e.target.value)}}
                    value={comment} />
                    <Form.Select
							aria-label="Default select example"
							value={rate}
							onChange={(e) => {
								setRate(e.target.value);
							}}>
							<option value="null">Seleziona</option>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
							<option value="4">Four</option>
							<option value="5">Five</option>
						</Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Pubblica
                </Button>
            </Form>
            </>
        )
    }

export default AddComment;