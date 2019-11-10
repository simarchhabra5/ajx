//Create the XHR Object
let xhr = new XMLHttpRequest();

import { fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

let rxjs = require("rxjs");

var str ="";
var output ="";
var count = 0;
var strArr =[];
var status = "200";

//Call the open function, GET-type of request, url, true-asynchronous


const node = document.querySelector("input");
const p = document.querySelector("p");

function Observable(subscribe) {
  this.subscribe = subscribe;
}




document.getElementById("submit").addEventListener("click", displayInfo);

function displayInfo() {
 
  Observable.fromEvent = (element, name) => {
    return new Observable(observer => {
      const callback = event => observer.next(event);
      element.addEventListener(name, callback, false);
      return () => element.removeEventListener(name, callback, false);
    });
  };
  
  const input$ = Observable.fromEvent(node, "input");
  
  input$.subscribe({
    next: event => {
      str = event.target.value;
       strArr = str.split(',');
       console.log(strArr);
    }
  });


  if(str=="SNAP") {
    count = 0;
  }
  
  if(str=="TWTR"){
    count = 1;
  }

  if(str =="VOD.L"){
count = 2;

  }
  

  xhr.open(
    "GET",
    "https://api.worldtradingdata.com/api/v1/stock?symbol=SNAP,TWTR,VOD.L&api_token=demo",
    true
  );
  //call the onload
  xhr.onload = function() {
    //check if the status is 200(means everything is okay)
    if (this.status === 200) {
      //return server response as an object with JSON.parse


      
      var myObj = JSON.parse(this.responseText);
      console.log(myObj);
      document.getElementById("para").innerHTML = JSON.stringify(myObj.data[count]);
      let table = document.querySelector("table");
      let data = Object.keys(myObj.data[count]);
      let data1= Object.values(myObj.data[count]);
      console.log(data1);
      console.log("DAta" +data);
      generateTableRow(table, data1);
  

      var removeTab = document.getElementById('table1');
  };
  //call send
  xhr.send();




// Promise
var stProm = new Promise(
    function (resolve, reject) {
        if (status) {
            resolve(); // fulfilled
        } else {
            var reason = new Error('Page not found');
            reject(reason); // reject
        }

    }
);

  }
  
}

function generateTableRow(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let value of data) {
    let tr = document.createElement("tr");
    let text = document.createTextNode(value);
    tr.appendChild(text);
    row.appendChild(tr);
  }
}




function removeTable(table){

// var parentEl = removeTab.parentElement;
      
      // parentEl.removeChild(removeTab);



// var parentEl = removeTab.parentElement;
      
      // parentEl.removeChild(removeTab);
}







