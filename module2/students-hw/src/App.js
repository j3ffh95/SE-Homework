import "./App.css";
import React, { useState } from "react";
import Student from "./Student";

function App() {
  const [students] = useState([
    {
      name: "Cait Yomorta",
      bio: "nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae ",
      scores: [
        {
          date: "2018-02-08",
          score: 77,
        },
        {
          date: "2018-04-22",
          score: 92,
        },
        {
          date: "2018-09-15",
          score: 68,
        },
      ],
    },

    {
      name: "Holly Baird",
      bio: "Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.",
      scores: [
        {
          date: "2018-12-14",
          score: 88,
        },
        {
          date: "2019-01-09",
          score: 79,
        },
        {
          date: "2019-02-23",
          score: 91,
        },
        {
          date: "2019-03-01",
          score: 95,
        },
      ],
    },

    {
      name: "Wes Mungia",
      bio: "natus eius doloremque ullam perferendis. Enim repellendus ut veniam?",
      scores: [
        {
          date: "2018-10-11",
          score: 62,
        },
        {
          date: "2018-11-24",
          score: 74,
        },
        {
          date: "2018-12-19",
          score: 85,
        },
      ],
    },
  ]);
  return (
    <div className='App'>
      <Student studentData={students} />
    </div>
  );
}

export default App;

// Code the <App> App component to display a <Student> component for each student object in the students array being held in state.
// Code the <Student> component so that it:

// Renders the student's name & bio properties
// Renders a <Score> component for each score object in the student's scores property.

// Code the <Score> component so that it renders the score object's date & score properties.
