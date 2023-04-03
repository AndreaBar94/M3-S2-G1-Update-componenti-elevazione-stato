import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";


let authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzI5NGY4MWI0MjAwMTM5YjI3ZWQiLCJpYXQiOjE2ODA1MjQ2NDksImV4cCI6MTY4MTczNDI0OX0.niPd6nu1dFizpA8FFK5zdC_prg92GwBgNRGPoAgDQ4g";

class CommentArea extends Component {
    state = {
        error: false,
        comments: [],
    };

    fetchComments = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.id,{
                headers:{
                    Authorization: authorization
                }
            } );

            if (response.ok){
                const fetchedComments = await response.json();
                this.setState({ comments: fetchedComments});
            } else{
                this.setState({ error: true});
            }
        } catch (error) {
            this.setState({ error: true });
        }
    }
    
    componentDidMount() {
        this.fetchComments();
    }

    render(){
        return( 
            <>
                <CommentsList comment={this.state.comments}/>
                <AddComment id={this.props.id}/>
            </>
        )
            
        
    }
};

export default CommentArea;