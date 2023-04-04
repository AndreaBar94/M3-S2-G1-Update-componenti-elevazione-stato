import {Row, Col, Form, FormControl} from 'react-bootstrap';
import scifi from "../data/scifi.json";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import SingleBook from "./SingleBook";
import { useState } from 'react';

const BookList = () => {

    const [initialValue, setInitialValue] = useState(null);
    const [searchString, setSearchString] = useState("");
    const [allTheBooks] = useState([...scifi,
                ...fantasy,
                ...history,
                ...horror,
                ...romance])

    const handleChange = (event) => {
        setInitialValue(event.target.value)
    }
    const filterBookList = (event) =>{
        setSearchString(event.target.value)
    }

        const filteredBooks = allTheBooks.filter(book =>
            book.title.toLowerCase().includes(searchString.toLowerCase()) &&
            (initialValue === null || initialValue === book.category.toLowerCase())
            );

            return(
            <>
                <div className="bg-warning bg-opacity-25 p-5">
                <Form>
                    <FormControl 
                    type="text" 
                    placeholder="Select a category (fantasy, history, horror, romance, scifi)" 
                    onChange={handleChange} 
                    />
                    <FormControl 
                    type="text" 
                    className="my-3"
                    placeholder="Search by title" 
                    onChange={filterBookList} 
                    />
                </Form>
                </div>

                <Row className="bg-warning bg-opacity-50 p-5">
                {filteredBooks.map((book) => (
                    <Col key={`book-${book.asin}`} className="col-12 col-md-4 col-lg-3 col-xl-2 pb-4">
                    <SingleBook id={book.asin} img={book.img} title={book.title} price={book.price}/>
                    </Col>
                ))}
                </Row>
            </>
    )
    
}

export default BookList;