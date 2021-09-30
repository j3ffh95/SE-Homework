import React, { Component } from "react";

// have it render a div
// move the h3 to inside the div in this component
// work on passing the data from state down
// work on getting the click function work properly

class DivOne extends Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    },
  };

  changeIt = text => {
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false,
        },
      });
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true,
        },
      });
    }
  };

  render() {
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>
          {" "}
          {this.state.tardis.name}{" "}
        </h3>
        {/* <button onClick={() => this.changeMessage()}> Subscribe </button> */}
      </div>
    );
  }
}

export default DivOne;
