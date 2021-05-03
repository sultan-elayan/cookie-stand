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

    },

    getCookiesPerHour: function() {
        for (let i = 0; i < hours.length; i++) {
            this.CookiesPerHour.push(Math.floor(this.CustomerPerHour[i] * this.avgCookiesPerCustomer));
            this.total += this.CookiesPerHour[i];        
        }

    },
    render: function () {
        let list1 = document.getElementById('Dubai');
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
Dubai.getCustomerPerHour();
Dubai.getCookiesPerHour();
Dubai.render();


///////////////////////



let Paris = {
    name: 'Paris',
    maxHourlyCustomers: 20,
    minHourlyCustomers: 38,
    avgCookiesPerCustomer: 2.3,
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
        let list1 = document.getElementById('Paris');
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
Paris.getCustomerPerHour();
Paris.getCookiesPerHour();
Paris.render();


//////////////////////////////


let Lima = {
    name: 'Lima',
    maxHourlyCustomers: 2,
    minHourlyCustomers: 16,
    avgCookiesPerCustomer: 4.6,
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
        let list1 = document.getElementById('Lima');
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
Lima.getCustomerPerHour();
Lima.getCookiesPerHour();
Lima.render();
=======

// let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
//  let avaregCookiesForCustomerPerHour = [];
// let Seattle = {
//     name: 'Seattle',
//     maxHourlyCustomers: 65,
//     minHourlyCustomers: 23,
//     averageCookiesPerCustomer: 6.3,
//     getCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
//         }
//     },
//     render : function () {
//         let list1 = document.getElementById('seatle');
//         let pharaghrap =document.createElement('p');
//         pharaghrap.textContent=this.name; 
//         list1.appendChild(pharaghrap);
//         let ulElement = document.createElement('ul');
//         list1.appendChild(ulElement);
//         for (let i =0 ;  i< hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
//             }
//            liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
//         }
//     }
// }
// Seattle.getCookies();
// Seattle.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }

// 2// 
// //let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
//  //let avaregCookiesForCustomerPerHour = [];
// let Tokyo = {
//     name: 'Tokyo',
//     maxHourlyCustomers: 65,
//     minHourlyCustomers: 23,
//     averageCookiesPerCustomer: 6.3,
//     getCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
//         }
//     },
//     render : function () {
//         let list1 = document.getElementById('Tokyo');
//         let pharaghrap =document.createElement('p');
//         pharaghrap.textContent=this.name; 
//         list1.appendChild(pharaghrap);
//         let ulElement = document.createElement('ul');
//         list1.appendChild(ulElement);
//         for (let i =0 ;  i< hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
//             }
//            liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
//         }
//     }
// }
// Tokyo.getCookies();
// Tokyo.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }


// 3//
// //let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
//  //let avaregCookiesForCustomerPerHour = [];
// let Dubai = {
//     name: 'Dubai',
//     maxHourlyCustomers: 65,
//     minHourlyCustomers: 23,
//     averageCookiesPerCustomer: 6.3,
//     getCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
//         }
//     },
//     render : function () {
//         let list1 = document.getElementById('Dubai');
//         let pharaghrap =document.createElement('p');
//         pharaghrap.textContent=this.name; 
//         list1.appendChild(pharaghrap);
//         let ulElement = document.createElement('ul');
//         list1.appendChild(ulElement);
//         for (let i =0 ;  i< hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
//             }
//            liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
//         }
//     }
// }
// Dubai.getCookies();
// Dubai.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }

// 4//
// //let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
//  //let avaregCookiesForCustomerPerHour = [];
// let Paris = {
//     name: 'Paris',
//     maxHourlyCustomers: 65,
//     minHourlyCustomers: 23,
//     averageCookiesPerCustomer: 6.3,
//     getCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
//         }
//     },
//     render : function () {
//         let list1 = document.getElementById('Paris');
//         let pharaghrap =document.createElement('p');
//         pharaghrap.textContent=this.name; 
//         list1.appendChild(pharaghrap);
//         let ulElement = document.createElement('ul');
//         list1.appendChild(ulElement);
//         for (let i =0 ;  i< hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
//             }
//            liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
//         }
//     }
// }
// Paris.getCookies();
// Paris.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }

// 5//
// //let hours = ['6AM' , '7AM' , '8AM' , '9AM' , '10AM' , '11AM' , '12AM' , '1PM' , '2PM' , '3PM' , '4PM' , '5PM' , '5PM' , '6PM' , '7PM']
//  //let avaregCookiesForCustomerPerHour = [];
// let Lima = {
//     name: 'Lima',
//     maxHourlyCustomers: 65,
//     minHourlyCustomers: 23,
//     averageCookiesPerCustomer: 6.3,
//     getCookies: function () {
//         for (let i = 0; i < hours.length; i++) {
//             avaregCookiesForCustomerPerHour.push(Math.ceil(getRandom(this.minHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiesPerCustomer));
//         }
//     },
//     render : function () {
//         let list1 = document.getElementById('Lima');
//         let pharaghrap =document.createElement('p');
//         pharaghrap.textContent=this.name; 
//         list1.appendChild(pharaghrap);
//         let ulElement = document.createElement('ul');
//         list1.appendChild(ulElement);
//         for (let i =0 ;  i< hours.length; i++) {
//             let liElement = document.createElement('li');
//             ulElement.appendChild(liElement);
//             for (let j=0 ; j<avaregCookiesForCustomerPerHour.length; j++){
//             }
//            liElement.textContent = `${hours[i]}:${avaregCookiesForCustomerPerHour[i]} cookes`
//         }
//     }
// }
// Lima.getCookies();
// Lima.render(); 
// function getRandom(min, max) {
//     return Math.ceil(Math.random() * (max - min + 1) + min);
// }


function Branch(name, minHourlyCustomers, maxHourlyCustomers,averageCookiesPerCustomer,) {
    

    this.name = name;
    this.minHourlyCustomers = minHourlyCustomers;
    this.maxHourlyCustomers = maxHourlyCustomers;
    this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  let theParent = document.getElementById('sales1');

    function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
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
                
            }
        
            // let th2 = document.createElement('th');
            // HR.appendChild(th2);
            // th2.textContent = 'Good with Cats';
        
            // let th3 = document.createElement('th');
            // HR.appendChild(th3);
            // th3.textContent = 'Good with Dogs';
        
            // // rows for the values
            // let dataRow = document.createElement('tr');
            // table.appendChild(dataRow);
            // // td
        
            // let td1 = document.createElement('td');
            // dataRow.appendChild(td1);
            // td1.textContent = this.isGoodWithKids;
        
            // let td2 = document.createElement('td');
            // dataRow.appendChild(td2);
            // td2.textContent = this.isGoodWithCats;
        
            // let td3 = document.createElement('td');
            // dataRow.appendChild(td3);
            // td3.textContent = this.isGoodWithDogs;


    // I will build a prototype of it 
    // this.swim = function() {
    //     console.log('Hello I am ' + this.name + ' and I am swimming');
    // }

}

