'use strict'

//1


//here we add the hours
let hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM', '1PM', '2PM', '3PM', '4PM', '5PM', '5PM', '6PM', '7PM']

// random function to calculate random numbers to use in the arry
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// create object
let Seattle = {
    name: 'Seattle',
    maxHourlyCustomers: 65,
    minHourlyCustomers: 23,
    avgCookiesPerCustomer: 6.3,
    CustomerPerHour:[],
    CookiesPerHour:[],
    total: 0,
    
    // Customer Per Hour function by for loop
    getCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CustomerPerHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers));      
          }

    },

    // cookies Per Hour function by for loop
    getCookiesPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesPerHour.push(Math.floor(this.CustomerPerHour[i] * this.avgCookiesPerCustomer));
            this.total += this.CookiesPerHour[i];        
        }

    },

    // the connction between html and JS
    render: function () {
        let list1 = document.getElementById('seatle');
        let pharaghrap = document.createElement('p');
        pharaghrap.textContent = this.name;
        list1.appendChild(pharaghrap);
        let ulElement = document.createElement('ul');
        list1.appendChild(ulElement);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}:${this.CookiesPerHour[i]} cookes`
        }
     
        let totalItem = document.createElement('li');
        ulElement.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }

}

// call the functions
Seattle.getCustomerPerHour();
Seattle.getCookiesPerHour();
Seattle.render();



////////////////////////


let Tokyo = {
    name: 'Tokyo',
    maxHourlyCustomers: 3,
    minHourlyCustomers: 24,
    avgCookiesPerCustomer: 1.2,
    CustomerPerHour:[],
    CookiesPerHour:[],
    total: 0,

    
    
    getCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CustomerPerHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers));      
          }

    },

    getCookiesPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesPerHour.push(Math.floor(this.CustomerPerHour[i] * this.avgCookiesPerCustomer));
            this.total += this.CookiesPerHour[i];        
        }

    },
    render: function () {
        let list1 = document.getElementById('Tokyo');
        let pharaghrap = document.createElement('p');
        pharaghrap.textContent = this.name;
        list1.appendChild(pharaghrap);
        let ulElement = document.createElement('ul');
        list1.appendChild(ulElement);
        for (let i = 0; i < hours.length; i++) {
            let liElement = document.createElement('li');
            ulElement.appendChild(liElement);
            liElement.textContent = `${hours[i]}:${this.CookiesPerHour[i]} cookes`
        }
     
        let totalItem = document.createElement('li');
        ulElement.appendChild(totalItem);
        totalItem.textContent = `Total: ${this.total} cookies`
    }

}
Tokyo.getCustomerPerHour();
Tokyo.getCookiesPerHour();
Tokyo.render();



///////////////////


let Dubai = {
    name: 'Dubai',
    maxHourlyCustomers: 11,
    minHourlyCustomers: 38,
    avgCookiesPerCustomer: 3.7,
    CustomerPerHour:[],
    CookiesPerHour:[],
    total: 0,
    
    
    getCustomerPerHour: function () {
        for (let i = 0; i < hours.length; i++) {
            this.CustomerPerHour.push(random(this.minHourlyCustomers, this.maxHourlyCustomers));      
          }

        Branch.prototype.tableRender = function() {

            let table = document.createElement('table');
            theParent.appendChild(table);
            console.log(theParent);
        
            let HR = document.createElement('tr');
            table.appendChild(HR);
            
            let th1 = document.createElement('th');
            HR.appendChild(th1);
            th1.textContent = 'Good with Kids';

            
            for (let index = 0; index < array.length; index++) {
               let 
                
            }}}}
