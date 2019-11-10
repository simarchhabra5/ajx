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
  
    





    }
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