import React, { Component } from "react";

// Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
// Make inputs so that new items can be added
// Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
// Add some style to your app

class Groceries extends Component {
  state = {
    groceries: [],
    // inputData: "",
  };

  handleAddItem = event => {
    event.preventDefault();
    this.state.groceries.push({ item: this.state.item });
    // this.setState({
    //   inputData: "",
    // });
    console.log(this.state.groceries);
  };

  handleChange = event => {
    // computed property names
    // inputData = event.target.value
    this.setState({ [event.target.id]: event.target.value });
  };

  //   handleSubmit = event => {
  //     event.preventDefault();
  //     this.setState({ submitted: true });
  //   };

  // function Input() {
  //   const handleSubmit = () => {
  //     console.log("submitted");
  //   };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <label htmlFor='item'>Add Item:</label>
  //       <input
  //         id='item'
  //         // onChange={this.handleChange}
  //         // value={this.state.username}
  //       />
  //       <button>Submit</button>
  //     </form>
  //   );
  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddItem}>
          <label htmlFor='item'>Item:</label>
          <input
            id='item'
            value={this.state.inputData}
            onChange={this.handleChange}
          />
          <label htmlFor='unit'>Unit:</label>
          <input
            id='unit'
            value={this.state.inputData}
            onChange={this.handleChange}
          />
          <label htmlFor='item'>Item:</label>
          <input
            id='item'
            value={this.state.inputData}
            onChange={this.handleChange}
          />

          <button>Add Item</button>
        </form>

        {this.state.groceries.map((item, i) => {
          return (
            <div>
              <h2>Item {i + 1}</h2>
              <ul>
                <li>Item: {item.item}</li>
                <li>Units: {item.units}</li>
                <li>quantity: {item.quantity}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Groceries;
