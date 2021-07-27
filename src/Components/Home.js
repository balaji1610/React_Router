import React from "react";
import "./Componets.css";

class Home extends React.Component {
  render() {
    return (
      <div class="jumbotron jumbotron-fluid  px_25 bg_home">
        <div class="px_25">
          <div class="container">
            <h1 class="display-4">Home Page</h1>
            <p class="lead">Welcome Home Page</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
