import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Container, Row, Column } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

class Books extends Component {
  // Setting our component's initial state
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    link: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBooks();
  }

  // Loads all books  and sets them to this.state.books
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data,
          title: "",
          author: "",
          description: "",
          image: "",
          link: ""
        })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>My Saved Books</h1>
        </Jumbotron>
        <Container fluid>
          <div className="container">
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <Row>
                        <Column size="md-2">
                          <img src={book.image} alt="book cover" />
                        </Column>
                        <Column size="md-10">
                          <DeleteBtn
                            onClick={() => this.deleteBook(book._id)}
                          />
                          <strong>
                            <h3>{book.title}</h3>
                            <p>by {book.author}</p>
                          </strong>
                          <p>{book.description}</p>
                          <a href={book.link}>{book.link}</a>
                        </Column>
                      </Row>
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
        </Container>
      </div>
    );
  }
}

export default Books;
