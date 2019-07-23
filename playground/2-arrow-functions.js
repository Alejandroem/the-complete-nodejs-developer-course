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
    guestList: ['Alex','Byron','Fer'],
    printGuestList() {
        console.log('Guest list for '+this.name);

        //Standar functions has their own this bindings
        //const that = this
        //Arrow functions dont bind their own this value
        this.guestList.forEach( (guest) => {
            console.log(guest +' is attending to ',this.name);
        });
    }
};

event.printGuestList();
