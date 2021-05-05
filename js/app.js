'use strict';

//1

// examle of old work (branches)

//here we add the hours
// let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '5PM', '6PM', '7PM']

// // random function to calculate random numbers to use in the arry
// function random(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }


// // create object
// let Seattle = {
//     name: 'Seattle',
//     maxHourlyCustomers: 65,
//     minHourlyCustomers: 23,
//     avgCookiesPerCustomer: 6.3,
//     CustomerPerHour:[],
//     CookiesPerHour:[],
//     total: 0,

//     // Customer Per Hour function by for loop
//     getCustomerPerHour: function () {
//         for (let i = 0; i < hours.length; i++) {
//             this.CustomerPerHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers));      
//           }

//     },

//     // cookies Per Hour function by for loop
//     getCookiesPerHour: function() {
//         for (let i = 0; i < hours.length; i++) {
//             this.CookiesPerHour.push(Math.floor(this.CustomerPerHour[i] * this.avgCookiesPerCustomer));
//             this.total += this.CookiesPerHour[i];        
//         }

//     },

//     // the connction between html and JS
//     render: function () {
//         let list1 = document.getElementById('seatle');
//         let pharaghrap = document.createElement('p');
//         pharaghrap.textContent = this.name;
//         list1.appendChild(pharaghrap);
//         let ulElement = document.createElement('ul');
//         list1.appendChild(ulElement);
//         for (let i = 0; i < hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             liElement.textContent = `${hours[i]}:${this.CookiesPerHour[i]} cookes`
//         }

//         let totalItem = document.createElement('li');
//         ulElement.appendChild(totalItem);
//         totalItem.textContent = `Total: ${this.total} cookies`
//     }

// }

// // call the functions
// Seattle.getCustomerPerHour();
// Seattle.getCookiesPerHour();
// Seattle.render();


// constructor method 

let Branchs = [];
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '5PM', '6PM', '7PM'];

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//define the constructor with arrgument
function Branch(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer) {
    // define the varibel 
    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.customerPerHour = [];
    this.cookiesPerHour = [];
    this.total = 0;

    Branchs.push(this);
}
// define the functions
Branch.prototype.getcustomerPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.customerPerHour.push(randomNum(this.minHourlyCustomers, this.maxHourlyCustomers));

    }
}

Branch.prototype.getcookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.cookiesPerHour.push(Math.floor(this.avgCookiesPerCustomer * this.customerPerHour[i]));
        this.total += this.cookiesPerHour[i];


    }
}


let seattle = new Branch('seattle', 23, 65, 6.3);
let tokyo = new Branch('tokyo', 3, 24, 1.2);
let dubai = new Branch('dubai', 11, 38, 3.7);
let paris = new Branch('paris', 20, 38, 2.3);
let lima = new Branch('lima', 2, 16, 4.6);

console.log(Branchs);

for (let i = 0; i < Branchs.length; i++) {
    Branchs[i].getcustomerPerHour();
    Branchs[i].getcookiesPerHour();

}

// making the tabel
let parent = document.getElementById('parent');
let tabel = document.createElement('table');
parent.appendChild(tabel);

function makeHeader() {
    let hRow = document.createElement('tr');
    tabel.appendChild(hRow);

    let fth = document.createElement('th');
    hRow.appendChild(fth);
    fth.textContent = 'branch name';

    for (let i = 0; i < hours.length; i++) {
        let thelement = document.createElement('th');
        hRow.appendChild(thelement);
        thelement.textContent = hours[i];


    }
    let lastelement = document.createElement('th');
    hRow.appendChild(lastelement);
    lastelement.textContent = 'dialy location total'
}

makeHeader();


Branch.prototype.render = function () {
    let dRow = document.createElement('tr');
    tabel.appendChild(dRow);
    let nameData = document.createElement('td');
    dRow.appendChild(nameData);
    nameData.textContent = this.name;

    for (let i = 0; i < hours.length; i++) {
        let tdelement = document.createElement('td');
        dRow.appendChild(tdelement);

        tdelement.textContent = this.cookiesPerHour[i];


    }

    let totalPerBranch = document.createElement('td')
    dRow.appendChild(totalPerBranch);
    totalPerBranch.textContent = this.total;
}

for (let i = 0; i < Branchs.length; i++) {
    Branchs[i].getcookiesPerHour();
    Branchs[i].getcustomerPerHour();
    Branchs[i].render();


}


function footer() {
    let footRow = document.createElement('tr');
    tabel.appendChild(footRow);

    let footerTh = document.createElement('th');
    footRow.appendChild(footerTh);
    footerTh.textContent = ' totals';


    for (let j = 0; j < hours.length; j++) {
        let totlPerHour = 0;
        for (let i = 0; i < Branchs.length; i++) {
            totlPerHour += Branchs[i].cookiesPerHour[j];


        }

        let footthtotal = document.createElement('th');
        footRow.appendChild(footthtotal);
        footthtotal.textContent = totlPerHour;

        //console.log(totlPerHour);


    }

}

footer();


let branchForm = document.getElementById('form');
branchForm.addEventListener('submit', submitter);


function submitter(event) {
    event.preventDefault();

    let name = event.target.nameField.value;
    console.log(name);

    let addedBranch = new Branch(name, minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer);

    addedBranch.getcustomerPerHour();
    addedBranch.getcookiesPerHour();
    addedBranch.render();

    let container = document.getElementById('BranchProfiles');
    container.textContent = '';
    for (let i = 0; i < cats.length; i++) {

        Branchs[i].getcustomerPerHour();
        Branchs[i].getcookiesPerHour();
        Branchs[i].avgCookiesPerCustomer();

}
}
//submitter();