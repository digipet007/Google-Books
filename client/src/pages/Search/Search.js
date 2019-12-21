import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import SaveBtn from "../../components/SaveBtn";
import API from "../../utils/API";
import { Container, Row, Column } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Books extends Component {
  // Setting our component's initial state-
  state = {
    books: [],
    title: "",
    author: "",
    description: "",
    image: "",
    message: ""
  };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  saveBook = event => {
    var toSave = this.state.books.filter(book => book.id === event);
    toSave = toSave[0];
    toSave = {
      title: toSave.title,
      author: toSave.author,
      description: toSave.description,
      image: toSave.image,
      link: toSave.link
    };
    API.saveBook(toSave).then(
      this.setState({ message: alert("Your book has been saved") })
    );
  };

  //newFUNCTION SEARCH API
  handleSearch = event => {
    event.preventDefault();
    if (this.state.title) {
      API.searchForBooks(this.state.title)
        .then(res => {
          console.log(res.data.items);
          var books = res.data.items;
          books = books.map(book => {
            book = {
              key: book.id,
              id: book.id,
              title: book.volumeInfo.title,
              author: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks.thumbnail,
              link: book.volumeInfo.infoLink
            };
            console.log(book);
            return book;
          });
          this.setState({ books: books });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1>Book Search</h1>
        </Jumbotron>
        <Container fluid>
          <div>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn disabled={!this.state.title} onClick={this.handleSearch}>
                Search
              </FormBtn>
            </form>
          </div>
          <div>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => {
                  return (
                    <ListItem key={book.id}>
                      <Row>
                        <Column size="md-2">
                          <img src={book.image} alt="book cover" />
                        </Column>
                        <Column size="md-10">
                          <SaveBtn onClick={() => this.saveBook(book.id)} />
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
