import React, { Component } from "react";

class Tardis extends Component {
  state = {
    tardis: {
      name: "Time and Relative Dimension in Space",
      caps: false,
    },
  };

  //   changeMessage() {
  //     this.setState({
  //       message: " Thank you for subsrcibing!!",
  //     });
  //   }

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

export default Tardis;
