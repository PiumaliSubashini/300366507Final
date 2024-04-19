import './styles.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BooksList from "./components/book_list.component";
import BookCreate from "./components/book_create.component";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BooksList />} exact />
      <Route path="/create" element={<BookCreate />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
