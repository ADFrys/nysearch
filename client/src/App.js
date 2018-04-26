import React, { Component } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import Results from "./components/Results";
import Articles from "./components/Articles";

class App extends Component {
  state = {
    articles: []
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
    return (
      <div>
        <Nav />
        <Search />
        <Results />
        <Articles />
      </div>
    );
}

}

export default App;
