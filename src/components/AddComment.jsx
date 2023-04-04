import { Component } from "react";
import { Button, Form } from "react-bootstrap";

let authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzI5NGY4MWI0MjAwMTM5YjI3ZWQiLCJpYXQiOjE2ODA1MjQ2NDksImV4cCI6MTY4MTczNDI0OX0.niPd6nu1dFizpA8FFK5zdC_prg92GwBgNRGPoAgDQ4g";

class AddComment extends Component {
    state = {
        comment: "",
        rate: "",
    }

    handleSubmit = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
            headers: {
                Authorization : authorization,
                "Content-type": "application/json; charset=UTF-8"
            },
            method: "POST",
            body: JSON.stringify({comment: this.state.comment, rate: this.state.rate, elementId: this.props.id})
        })
            if(response.ok){
                alert("Commento inviato!");
                this.setState({comment: "", rate: ""})
                this.props.fetchComments()
            } else{
                alert("Errore nella pubblicazione del commento")
            }
        } catch (error) {
            console.log(error)
        }
    };

    submitComment = (e) => {
		e.preventDefault();
		this.handleSubmit();
	};

    handleChange = (propertyName, propertyValue) => {
		this.setState({
			[propertyName]: propertyValue,
		});
	};

    render(){
        return(
            <>
            <Form onSubmit={this.submitComment}>
                <Form.Group>
                    <Form.Control 
                    type="text" 
                    placeholder="Inserisci qui il tuo commento"
                    onChange={(e)=>{this.handleChange("comment", e.target.value)}}
                    value={this.state.comment} />
                    <Form.Select
							aria-label="Default select example"
							value={this.state.rate}
							onChange={(e) => {
								this.handleChange('rate', e.target.value);
							}}>
							<option value="1">One</option>
							<option value="2">Two</option>
							<option value="3">Three</option>
							<option value="4">Four</option>
							<option value="5">Five</option>
						</Form.Select>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </>
        )
    }

    
}

export default AddComment;