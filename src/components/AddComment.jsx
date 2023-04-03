import { Component } from "react";
import { Button, Form } from "react-bootstrap";

let authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzI5NGY4MWI0MjAwMTM5YjI3ZWQiLCJpYXQiOjE2ODA1MjQ2NDksImV4cCI6MTY4MTczNDI0OX0.niPd6nu1dFizpA8FFK5zdC_prg92GwBgNRGPoAgDQ4g";
class AddComment extends Component {
    state = {
        comment: null,
    }

    handleSubmit = async e => {
        e.preventDefault();

        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/'+ this.props.id,{
            method: "POST",
            body: JSON.stringify(this.state.comment),
            headers: {
                Authorization : authorization,
                "Content-type": "application/json"
            }
        })
        if(response.ok){
            this.setState({comment: ""})
        } else{
            alert("errore nella pubblicazione del commento")
        }

        } catch (error) {
            console.log(error)
        }
    
    }

    

    render(){
        return(
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group placeholder="Inserisci qui il tuo commento" >
                    <Form.Control type="text" placeholder="Inserisci qui il tuo commento" />
                        <Form.Text onChange={(e)=>{this.setState({comment: e.target.value})}}>
                        </Form.Text>
                </Form.Group>
                <Button variant="primary">
                    Submit
                </Button>
            </Form>
            </>
        )
    }
}

export default AddComment;