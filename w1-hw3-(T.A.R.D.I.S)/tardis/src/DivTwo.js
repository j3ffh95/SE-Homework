import React, { Component } from "react";
import DivOne from "./DivOne";

// have it render a div
// move the h3 to inside the div in this component
// work on passing the data from DivOne down
// work on getting the click function to work properly

class DivTwo extends Component {
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
          <DivOne />
        </h3>
        {/* <button onClick={() => this.changeMessage()}> Subscribe </button> */}
      </div>
    );
  }
}

export default DivTwo;
