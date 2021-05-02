'use strict'

//1

let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
 let avaregCookiesForCustomerPerHour = [];
let Seattle = {
    name: 'Seattle',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    averageCookiesPerCustomer: 6.3,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
        }
    },
    render : function () {
        let list1 = document.getElementById('seatle');
        let pharaghrap =document.createElement('p');
        pharaghrap.textContent=this.name; 
        list1.appendChild(pharaghrap);
        let ulElement = document.createElement('ul');
        list1.appendChild(ulElement);
        for (let i =0 ;  i< hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
            }
           liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
        }
    }
}
Seattle.getCookies();
Seattle.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

2// 
//let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
 //let avaregCookiesForCustomerPerHour = [];
let Tokyo = {
    name: 'Tokyo',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    averageCookiesPerCustomer: 6.3,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
        }
    },
    render : function () {
        let list1 = document.getElementById('Tokyo');
        let pharaghrap =document.createElement('p');
        pharaghrap.textContent=this.name; 
        list1.appendChild(pharaghrap);
        let ulElement = document.createElement('ul');
        list1.appendChild(ulElement);
        for (let i =0 ;  i< hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
            }
           liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
        }
    }
}
Tokyo.getCookies();
Tokyo.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}


3//
//let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
 //let avaregCookiesForCustomerPerHour = [];
let Dubai = {
    name: 'Dubai',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    averageCookiesPerCustomer: 6.3,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
        }
    },
    render : function () {
        let list1 = document.getElementById('Dubai');
        let pharaghrap =document.createElement('p');
        pharaghrap.textContent=this.name; 
        list1.appendChild(pharaghrap);
        let ulElement = document.createElement('ul');
        list1.appendChild(ulElement);
        for (let i =0 ;  i< hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
            }
           liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
        }
    }
}
Dubai.getCookies();
Dubai.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

4//
//let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
 //let avaregCookiesForCustomerPerHour = [];
let Paris = {
    name: 'Paris',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    averageCookiesPerCustomer: 6.3,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
        }
    },
    render : function () {
        let list1 = document.getElementById('Paris');
        let pharaghrap =document.createElement('p');
        pharaghrap.textContent=this.name; 
        list1.appendChild(pharaghrap);
        let ulElement = document.createElement('ul');
        list1.appendChild(ulElement);
        for (let i =0 ;  i< hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
            }
           liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
        }
    }
}
Paris.getCookies();
Paris.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}

5//
//let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
 //let avaregCookiesForCustomerPerHour = [];
let Lima = {
    name: 'Lima',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    averageCookiesPerCustomer: 6.3,
    getCookies: function () {
        for (let i = 0; i < hours.length; i++) {
            avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
        }
    },
    render : function () {
        let list1 = document.getElementById('Lima');
        let pharaghrap =document.createElement('p');
        pharaghrap.textContent=this.name; 
        list1.appendChild(pharaghrap);
        let ulElement = document.createElement('ul');
        list1.appendChild(ulElement);
        for (let i =0 ;  i< hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
            }
           liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
        }
    }
}
Lima.getCookies();
Lima.render(); 
function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min + 1) + min);
}
