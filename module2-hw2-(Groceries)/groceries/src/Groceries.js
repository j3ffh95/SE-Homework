import React, { Component } from "react";

// Make an array of 3 objects using the above shape and render the item, quantity and units (12 pack, 1lb, 2 liters, etc.)
// Make inputs so that new items can be added
// Conditionally render the grocery items based on whether or not they were purchased (ok to have hard coded values for isPurchased)
// Add some style to your app

class Groceries extends Component {
  state = {
    groceries: [
      {
        item: "bread",
        units: "1 pack",
        quantity: 2,
        isPurchased: false,
      },
      {
        item: "ham",
        units: "2lb",
        quantity: 1,
        isPurchased: false,
      },
      {
        item: "soda",
        units: "2 liters",
        quantity: 3,
        isPurchased: false,
      },
    ],
    inputData: "",
  };

  handleAddItem = event => {
    const newList = [...this.state.groceries, { title: this.state.inputData }];
    this.setState(newList);
    console.log(newList);
  };

  handleChange = event => {
    // computed property names
    // inputData = event.target.value
    this.setState({ inputData: event.target.value });
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
        <label htmlFor='item'>Item:</label>
        <input
          id='item'
          value={this.state.inputData}
          onChange={this.handleChange}
        />

        <button onClick={() => this.handleAddItem()}>Add Item</button>

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
