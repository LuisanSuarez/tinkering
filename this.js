// var obj = {
//     foo: function() {
//         return this;
//     }
// };


function testThisKeyword() {
    console.log("yeee");
    console.log(this.name) // Alex
    console.log(this.globalVar);
    console.log("yooo");
}
global.globalVar = "This is a Global Var";
global.name = 'Alex';
testThisKeyword();

var jake = {name: "Chad"}

console.log("binding Jake to Strain~~~~~~~~~");
var strain = testThisKeyword.bind(jake)

console.log("\n~~~~~\ntest this keyword");
testThisKeyword();
console.log("\nstrain~~~");
strain();

// function sound() {
//     // console.log(this.sound);
//     function run() {
//         console.log("running");
//         console.log(this.name)
//     }
//     run()
//     return this.sound;
// }

// var motorcycle = {
//     sound: 'braaaaap!'
// }
// var car = { sound: 'ñiiiiiii' }
// var train = { sound: "choo choooo" }

// sound.call(motorcycle);
// var next = sound();
// console.log("next:", next);
// sound.call(car);
// sound();
// sound.call(train);
// sound();

// // test("foo", "bar");
// console.log(obj.foo() === obj);

global.name = "Global Name"
global.globVar = "Global myProperty"

var MyObject = function (name, myProperty){
    // this.name = name;
    // this.myProperty = myProperty;
  };
 
  MyObject.prototype.doStuff = function (action, action2="action2", action3="action3") {
    console.log(this.name + ' is ' + action + '! ' + "My Property: " + this.myProperty);
    console.log("action2:", action2);
    console.log("action3:", action3);
  }

  MyObject.prototype.doStuff("default binding")

  console.log("\n\n\n");
 
  var obj = new MyObject("luisan", "suarez");
 
  obj.doStuff('awesome'); // prints 'MyObjectName is awesome!'

  var paz = new MyObject("Zach", "every single day");

  paz.doStuff('studying')
  paz.doStuff('worrying')
  obj.doStuff('running')

  var runner = { name: 'John', myProperty: 'runner property' };

  console.log("apply\n\n");
  paz.doStuff.call(runner, runner.myProperty, "call");  //will use paz's prototype, but overwrite with runner
//   MyObject.prototype.doStuff.apply(runner, ["apply", runner.myProperty ]);
