function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

function CookieStore(name, mincust, maxcust, avgsale) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgsale = avgsale;
  this.CustPerHour = [];
  this.CookiesPerHour = [];
}

CookieStore.prototype.calcCustPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let numcust = randomNum(this.mincust, this.maxcust);
    this.CustPerHour.push(numcust);
  }
};

CookieStore.prototype.calCookiesPerHour = function () {
  for (let i = 0; i < this.CustPerHour.length; i++) {
    let cookiessold = Math.floor(this.CustPerHour[i] * this.avgsale);
    this.CookiesPerHour.push(cookiessold);
  }
};
CookieStore.prototype.render = function () {
  this.calcCustPerHour();
  this.calCookiesPerHour();

  //table
  const table = document.getElementById("myTable");

  //table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  //table cell
  let td = document.createElement("td");
  td.textContent = this.name;
  tr.appendChild(td);

  let total = 0;

  //get data into the row
  console.log(this.CookiesPerHour);
  for (let i = 0; i < this.CookiesPerHour.length; i++) {
    td = document.createElement("td");
    td.textContent = this.CookiesPerHour[i];
    tr.appendChild(td);

    total = total + this.CookiesPerHour[i];
  }
  //total cell
  td = document.createElement("td");
  td.textContent = total;
  tr.appendChild(td);
};
function makeHeaderRow() {
  //table
  const table = document.getElementById("myTable");

  //table row
  const tr = document.createElement("tr");
  table.appendChild(tr);

  //starting cell
  let th = document.createElement("th");
  tr.appendChild(th);
  //get data into the row
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement("th");
    th.textContent = hours[i];
    tr.appendChild(th);
  }
  //total cell
  th = document.createElement("th");
  th.textContent = "Totals";
  tr.appendChild(th);
}
makeHeaderRow();

const seattle = new CookieStore("Seattle", 23, 65, 6.3);
const tokyo = new CookieStore("tokyo", 3, 24, 1.2);
const dubai = new CookieStore("dubai", 11, 38, 3.7);
const paris = new CookieStore("paris", 20, 38, 2.3);
const lima = new CookieStore("lima", 2, 16, 4.6);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

//insert row

//Event listeners

const form = document.getElementById("new-store-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const storeNameInput = event.target.name.value;
  const mincustInput = event.target.mincust.value;
  const maxcustInput = event.target.maxcust.value;
  const avgcookieInput = event.target.avgcookie.value;

  console.log(storeNameInput);
  console.log(mincustInput);
  console.log(maxcustInput);
  console.log(avgcookieInput);

  form.reset();
  const newStore = new CookieStore(
    storeNameInput,
    mincustInput,
    maxcustInput,
    avgcookieInput
  );
  newStore.render();
});

// function randomNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const hours = [
//   "6am",
//   "7am",
//   "8am",
//   "9am",
//   "10am",
//   "11am",
//   "12pm",
//   "1pm",
//   "2pm",
//   "3pm",
//   "4pm",
//   "5pm",
//   "6pm",
//   "7pm",
// ];

// const seattle = {
//   name: "seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   custPerHour: [],
//   CookiePerHour: [],

//   calcCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCusts = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCusts);
//     }
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       this.CookiePerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
//     }
//   },
//   render: function () {
//     this.calcCustPerHour();
//     this.calcCookiesPerHour();

//     const div = document.getElementById(this.name);

//     const h2 = document.createElement("h2");
//     h2.textContent = this.name;
//     div.appendChild(h2);

//     const ul = document.createElement("ul");
//     div.appendChild(ul);

//     for (let i = 0; i < this.CookiePerHour.length; i++) {
//       const li = document.createElement("li");
//       li.textContent = this.CookiePerHour[i] + "cookies";
//       ul.appendChild(li);
//     }
//   },
// };
// const tokyo = {
//   name: "tokyo",
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   custPerHour: [],
//   CookiePerHour: [],

//   calcCustPerHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let numCusts = randomNum(this.minCust, this.maxCust);
//       this.custPerHour.push(numCusts);
//     }
//   },
//   calcCookiesPerHour: function () {
//     for (let i = 0; i < this.custPerHour.length; i++) {
//       this.CookiePerHour.push(Math.floor(this.custPerHour[i] * this.avgSale));
//     }
//   },
//   render: function () {
//     this.calcCustPerHour();
//     this.calcCookiesPerHour();

//     const div = document.getElementById(this.name);

//     const h2 = document.createElement("h2");
//     h2.textContent = this.name;
//     div.appendChild(h2);

//     const ul = document.createElement("ul");
//     div.appendChild(ul);

//     for (let i = 0; i < this.CookiePerHour.length; i++) {
//       const li = document.createElement("li");
//       li.textContent = this.CookiePerHour[i] + "cookies";
//       ul.appendChild(li);
//     }
//   },
// };

// //make next list-cut and copy into render function() {everything outside of the object}

// seattle.render();
// tokyo.render();
