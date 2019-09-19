// original code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

function makeAdder(x) {
	function adder(y) {
    	return x + y;
 	};
	return adder
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

// console.log(add5(2));  // 7
// console.log(add10(2)); // 12
// miFunk();
// console.log(2);
// console.log(miFunk() == "Luisan");
// console.log(miFunk);

// var counter = function () {
//     console.log("executed");
// }();

// function makeCounter(x) {
//     var privateCounter = x;
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     return {
//       increment: function() {
//         changeBy(1);
//       },
//       decrement: function() {
//         changeBy(-1);
//       },
//       value: function() {
//         return privateCounter;
//       }
//     };
//   };

//   var counter = makeCounter(10)
//   var counting = makeCounter(0)

//   console.log(counter.value()); // logs 0
//   counter.increment();
//   counter.increment();
//   console.log(counter.value()); // logs 2
//   counter.decrement();
//   console.log(counter.value());

//   console.log(counting.value()); // logs 0
//   counting.increment();
//   counting.increment();
//   counting.increment();
//   counting.increment();
//   console.log(counting.value()); // logs 2
//   counting.decrement();
//   console.log(counting.value());

// global scope
var e = 10;
function sum(a){
  return function(b){
    return function(c){
      // outer functions scope
      return function(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

console.log(sum(1)(2)(3)(4)); // log 20

// We can also write without anonymous functions:

// global scope
var e = 10;
function sum(a){
  return function sum2(b){
    return function sum3(c){
      // outer functions scope
      return function sum4(d){
        // local scope
        return a + b + c + d + e;
      }
    }
  }
}

var s = sum(1);
console.log(s);
var s1 = s(2);
console.log(s1);
var s2 = s1(3);
console.log(s2);
var s3 = s2(4);
console.log(s3) //log 20
var k3 = s2(14);
console.log(k3);