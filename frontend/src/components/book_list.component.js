import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Book = (props) => (
    <div className="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div className="desc">
      <h2>
        {/* <a href="/show-book/123id">{props.title}</a> */}
        <Link to="/create" className="nav-link">
          {props.title}
        </Link>
      </h2>
      <h3>{props.author}</h3>
      <p>{props.description}</p>

      <input
        type="button"
        value="X"
        onClick={() => {
          props.deleteBook(props.keyt);
        }}
      />
    </div>
  </div>

);

export default function BooksList() {
    const [books, setBookList] = useState([]);
    useEffect(() => {
       //const url = "http://localhost:5000";
     const url = "https://300366507-final.vercel.app"
      axios
        .get(url)
        .then((response) => {
          setBookList(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  
    const deleteBook = (id) => {
       //const url = "http://localhost:5000";
      const url = "https://300366507-final.vercel.app"
      axios.delete(url + "/" + id)
        .then((response) => {
        setBookList(books.filter((el) => el._id !== id));
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div className='BookList'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
              <p className='display-10 text-center'>Number of counts</p>
            </div>
  
            <div className='col-md-11'>
              <Link
                to='/create'
                className='btn btn-info float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <br />
              <hr />
            </div>
  
          <div className="list">
          {books.map((book) => {
            return (
              <Book
                title={book.title}
                author={book.author}
                description={book.description}
                key={book._id}
                keyt={book._id}
                deleteBook={deleteBook}
              />
            );
          })}
        </div>
      </div>
    );
    
  }
  