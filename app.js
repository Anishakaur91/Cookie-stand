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

const seattle = {
  name: "seattle",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  CookiePerHour: [],
  calcCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
    this.calcCookiesPerHour();
  },
  calcCookiesPerHour: function () {
    for (let i = 0; i < this.custPerHour.length; i++) {
      this.CookiePerHour.push(this.custPerHour[i] * this.avgSale);
    }
  },
};

seattle.calcCustPerHour();
console.log(seattle);

//make next list-cut and copy into render function() {everything outside of the object}
const seattleDiv = document.getElementById("seattle");
console.log(seattleDiv);

const h2 = document.createElement("h2");
h2.textContent = seattle.name;
seattleDiv.appendChild(h2);

const ul = document.createElement("ul");
seattleDiv.appendChild(ul);

for (let i = 0; i < seattle.CookiePerHour.length; i++) {
  const li = document.createElement("li");
  li.textContent = seattle.CookiePerHour[i] + "cookies";
  ul.appendChild(li);
  console.log(seattle.CookiePerHour[i]);
}
