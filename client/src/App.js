import React, { Component } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Results from "./components/Results";
import API from "./utils/API";
import Articles from "./components/Articles";

class App extends Component {
  state = {
    articles: {},
    search: ""
  };

  searchArticles = query => {
    API.getArticles(query)
    .then(res => this.setState({ articles: res.data.response }))
    .catch(err => console.log(err));
      console.log(this.state);
  };



  componentDidMount() {

    this.searchArticles("USA");
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.search)
      .then(res => this.setState({ articles: res.data }))
    .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Nav />
        <Search value={this.state.search}
        handleInputChange={this.handleInputChange}
        handleFormSubmit={this.handleFormSubmit}
        />
        <Results 
        article={this.state.articles}/>
        <Articles />
      </div>
    );
}

}

export default App;
