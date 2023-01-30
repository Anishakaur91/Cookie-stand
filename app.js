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
const location = ["seattle", "tokyo", "dubai", "paris", "lima"];

const this.location = {
  name: "this.location",
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  custPerHour: [],
  getCustPerHour: function () {
    for (let i = 0; i < hours.length; i++) {
      let numCusts = randomNum(this.minCust, this.maxCust);
      this.custPerHour.push(numCusts);
    }
  },
};

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.getCustPerHour();
console.log(seattle);
