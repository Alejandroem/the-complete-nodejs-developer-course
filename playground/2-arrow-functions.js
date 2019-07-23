/*const square = function (x) {
    return x * x;
};*/

/*

const square = (x) => {
  return x * x;
};
*/

// const square = (x) => x * x;

// console.log(square(5));

// ARROW FUNCTIONS DONT BIND THIS VALUE
const event = {
    name: 'Barcelona beach festival',
    printGuestList() {
        console.log('Guest list for '+this.name);
    }
};

event.printGuestList();
