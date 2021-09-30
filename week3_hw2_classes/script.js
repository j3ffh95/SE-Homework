// Let's create shaped objects

//     Define a new class called Circle with appropriate attributes and instantiate a few Circle objects.
//         Write a function called circle_area that returns the area of the object.
//         Write a function total_sides that returns the number of sides of the object.
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  circle_area() {
    return (Math.PI * this.radius ** 2).toFixed(2);
  }

  circle_circumference() {
    return (2 * Math.PI * this.radius).toFixed(2);
  }
}
// let circle1 = new Circle(5);
// console.log(circle1.circle_circumference());

//     Define a new class called Rectangle with appropriate attributes and instantiate a few Rectangle objects.
//         Write a function called rectangle_area that returns the area of the given object.
//         Write a function total_sides that returns the number of sides of the object.
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  rectangle_area() {
    return this.width * this.length;
  }

  rectangle_perimeter() {
    return 2 * (this.width + this.length);
  }

  total_sides() {
    return 4;
  }
}
// let rec1 = new Rectangle(10, 10);
// console.log(rec1.rectangle_perimeter());

//     Define a new class called Square with appropriate attributes and instantiate a few Square objects.
//         Write a function called square_area that returns the area of the given object.
//         Write a function total_sides that returns the number of sides of the object.
class Square {
  constructor(sideLength) {
    this.side = sideLength;
  }

  square_area() {
    return this.side ** 2;
  }

  square_perimeter() {
    return this.total_sides() * this.side;
  }

  total_sides() {
    return 4;
  }
}
// let square1 = new Square(10);
// console.log(square1.square_area());

// ---------------------------HTML CODE BEGINS ------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

let areaButton = document.querySelector("#area-button");
let section = document.querySelector(".section");

document.addEventListener("click", e => {
  let userInputCircleRadius = document.querySelector("#circle-radius").value;
  let userCircle = new Circle(userInputCircleRadius);

  //   Rectangle User Input
  let userInputRectangleLength = document.querySelector();

  switch (true) {
    case e.target.id === "area-button":
      createCircleAreaInformation(userCircle);
      break;
    case e.target.id === "circum-button":
      createCircleCircumInformation(userCircle);
      break;

    default:
      break;
  }
});

function createCircleAreaInformation(circleObj) {
  let circleInfoPara = document.querySelector("#circle-info");
  let circleArea = circleObj.circle_area();

  //   clear out the circleInfoPara
  circleInfoPara.innerText = "";
  circleInfoPara.innerText = `Area: ${circleArea}`;
  section.appendChild(circleInfoPara);
}

function createCircleCircumInformation(circleObj) {
  let circleInfoPara = document.querySelector("#circle-info");
  let circleCircum = circleObj.circle_circumference();

  //   clear out the circleInfoPara
  circleInfoPara.innerText = "";
  circleInfoPara.innerText = `Circumference: ${circleCircum}`;
  section.appendChild(circleInfoPara);
}
