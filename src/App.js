import React from "react";
import PropTypes from "prop-types";
import { logDOM } from "@testing-library/react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, book: true});
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{ isLoading ? "Loading..." : "We are Ready!"}</div>      
    )
  }

}

export default App;
