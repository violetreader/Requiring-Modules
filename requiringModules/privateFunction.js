function privateFunct(){
  console.log("i am a private function");
}

var object = {
  a : 'a value to key a',
  b: function () {
    privateFunct();
  }
}

// var object2 = {
//   a : 'a value in object 2',
//   b : function object2Funct (){
//     console.log("in a function in object2");
//   }
// }

module.exports = object;


// var exporting = module.exports

// exporting.object






// function a (){
//   console.log('hi');
// }


// function publicFunct() {
//     a();
//   }

// publicFunct();

