var a = (document.getElementById("rand1").innerHTML = Math.floor(
  Math.random() * 255
));

var b = (document.getElementById("rand2").innerHTML = Math.floor(
  Math.random() * 255
));

var c = (document.getElementById("rand3").innerHTML = Math.floor(
  Math.random() * 255
));

if (a<100 || b< 100 || c<100) {
    document.getElementById("body").style.color='white';
}

setTimeout(() => {
    // window.location.reload();
    document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";

});
function relode(){
  window.location = window.location
}
function rando() {
  document.body.style.backgroundColor = "rgb(" + a + "," + b + "," + c + ")";
}


/* function firstFunction(_callback){
    // do some asynchronous work
    // and when the asynchronous stuff is complete
    _callback();    
} */

// function reload1(){
//     // call first function and pass in a callback function which
//     // first function runs when it has completed
//     window.location.reload();
//     firstFunction(function() {
//         console.log('huzzah, I\'m done!');
//     });    
// }
//Generate Random number
