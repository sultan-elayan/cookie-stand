'use strict'

let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '6PM' , '7PM']
let Seattle = {
    name: 'Seattle',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    averageCookiesPerCustomer: 6.3,
    avaregCookesForCustmer: [],
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {

            this.avaregcookesforcustmer.push(Math.ceil(getrandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


        }

    }

}


// function getRandomArbitrary(min, max) {
    //     console.log(min)
// console.log(max)
// console.log(Math)
//     return Math.random() * (max - min) + min;
//   }



// getRandomArbitrary(23,65);
// let ans = (getRandomInt(23,65))








// 'use strict';
// let hour = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '6PM' , '7PM']
//  let avaregcookesforcustmer = [];
// let Seattle = {

//     name: 'Seattle',
//     maxcustmerhourly: 65,
//     mincustmerhourly: 23,
//     avaregcookes: 6.3,
//     // avaregcookesforcustmer: [],
//     getCookies: function () {
//         for (let i = 0; i < hour.length; i++) {

//             avaregcookesforcustmer.push(Math.ceil(getRandom(this.mincustmerhourly, this.maxcustmerhourly) * this.avaregcookes));


//         }

//     },

//     render : function () {
//         let listOne = document.getElementById('seatle');
//         let par =document.createElement('p');
//         par.textContent=this.name; 
//         listOne.appendChild(par);
//         let ulElemant = document.createElement('ul');
//         listOne.appendChild(ulElemant);
//         for (let i =0 ;  i< hour.length; i++) {
//             let liElemant = document.createElement('li');
//             ulElemant.appendChild(liElemant);
//             // for (let j=0
