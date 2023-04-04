import {useEffect, useState } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

let authorization = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MzI5NGY4MWI0MjAwMTM5YjI3ZWQiLCJpYXQiOjE2ODA1MjQ2NDksImV4cCI6MTY4MTczNDI0OX0.niPd6nu1dFizpA8FFK5zdC_prg92GwBgNRGPoAgDQ4g";

const CommentArea = (props) => {

    const [setError] = useState(false);
    const [comments, setComments] = useState([]);
    const [id] = useState(props.id);

    const fetchComments = async () => {
        try {
            const response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + props.id,{
                headers:{
                    Authorization: authorization
                }
            } );

            if (response.ok){
                const fetchedComments = await response.json();
                setComments(fetchedComments)

            } else{
                setError(true)
            }
        } catch (error) {
            setError(true)
        }
    }
        
    useEffect(()=>{
        fetchComments();
    },[id]);
    // useEffect(()=> {console.log("willUnmount()")})
    useEffect(() => {
        fetchComments()
    }, [])

        return( 
            <>
                <CommentsList comment={comments} />
                <AddComment id={props.id} fetchComments={fetchComments}/>
            </>
        )
            
        
};

export default CommentArea;