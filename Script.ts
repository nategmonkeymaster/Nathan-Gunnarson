// // class Vehicle{
// //     constructor(
// //     make,
// //     model,
// //     color
// //         ) {
// //         this.make = make;
// //     }
// //     getMake(){
// //         return this.make
// //     }
// // }

// // class Car extends Vehicle {
// //     getMake() {
// //         return super.getMake();//super refers to parent class
// //     }
// // }

// // let connorsCar = new Car('Honda', 'Accord', 'gray');
// // console.log(connorsCar.getMake());

// //Explisit Variable definition


// // let number = 1;

// // // let string = '1';
// // number = '1';//follows the 3= logic.
//             //typescript sees that it is not the same.

// interface Car{
//     make: string;
//     model: string;
//     color: string;
// }     //   (name)?: causes this to be optional

// let car: Car = [
//     {
//         make: 'Honda',
//         model: 'Accord',
//         color: 'Gray'
//     }
// ];



//                         //If you want to you can specify what, or if nothing it returns void
// // const func = (parameterOne: boolean, parameterTwo: number) => {
    
// // }
// const func = (
//     car: {
//         make: string,
//         model: string,
//         color?: string
//     }
// )