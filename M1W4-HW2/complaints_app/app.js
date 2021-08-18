document
  .querySelectorAll(".btn")
  .forEach(btn => btn.addEventListener("click", getComplaints));

function getComplaints(e) {
  let userNumOfComplaints;
  let btnBorough = e.target.id.toUpperCase();

  userNumOfComplaints = document.querySelector("#complaint-num").value;
  if (!userNumOfComplaints) userNumOfComplaints = 10;

  const cityUrl = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?$select=descriptor,borough,resolution_description&$limit=${userNumOfComplaints}&agency=NYPD&borough=${btnBorough}`;
  fetch(cityUrl)
    .then(response => response.json())
    .then(data => createList(data));
}

let dataContainer = document.querySelector(".data-div");

function createList(complaints) {
  if (dataContainer.innerHTML) dataContainer.innerHTML = "";

  complaints.forEach(complaint => {
    let listContainer = document.createElement("div");
    let resolutionPara = document.createElement("p");
    listContainer.className = "list-container";
    listContainer.innerHTML = `<p>${complaint.descriptor}</p><a class='resolution-description'>What did the police do?</a>`;
    resolutionPara.innerHTML = `${complaint.resolution_description}`;
    console.log(listContainer);
    listContainer.appendChild(resolutionPara);
    dataContainer.appendChild(listContainer);
  });

  document
    .querySelector(".resolution-description")
    .addEventListener("click", e => {
      console.log(e.target.parentElement);
    });
}
