import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import MyFooter from "./components/MyFooter";


function App() {
	return (
		<>
			<MyNav/>
			<Welcome/>
			<BookList/>
			<MyFooter/> 
		</>
	);
}

export default App;
