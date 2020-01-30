const test = [1, 2, 3, 4, 5];

// PRIVATE VARIABLES. AVOID USING GLOBAL CONTEXT, ETC.

(function(array) {

  // counter = 0; -> GLOBAL VARIABLE, WATCH OUT!
  let counter = 0;

  const up = document.querySelector(".up")
  const down = document.querySelector(".down")

  function uppie() {
    counter ++
    console.log(array[counter])
  }

  function downie() {
    counter --
    console.log(array[counter])
  }

  // 
  up.addEventListener("click", uppie)
  down.addEventListener("click", downie)

})(test);
//console.log(counter)

// BLOCK SCOPE

let setName, readName;
let name = "Global"
{
  let name = "Sebastian"

  setName = function setName(newName) {
    name = newName
  }

  readName = function readName() {
    console.log(`My name is ${name}`)
  }
}

readName()
setName("Mateo")
readName()
console.log(name)

// CLOSURES

function returnFunction() {
    let counter = 0;
    return function() {
        console.log(counter ++)
    }
}

const countUp = returnFunction()

countUp()
countUp()
countUp()
countUp()

// MODULE PATTERN BELOW

const a = (function() {

    let arr = [1, 2, 3]
    let counter = arr[arr.length - 1]

    return {
        add() {
            counter ++
            arr.push(counter)
            console.log(arr)
        },
        remove() {
            counter --
            arr.pop()
            console.log(arr)
        }
    }

})();

a.add()
a.add()
a.add()

a.remove()
a.remove()
a.remove()

a.add()

