import logo from "./logo.svg";
import "./App.css";
import Groceries from "./Groceries";

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

function App() {
  return (
    <div className='App'>
      <h1>Grocery List</h1>
      {/* <Input /> */}
      <Groceries />
    </div>
  );
}

export default App;
