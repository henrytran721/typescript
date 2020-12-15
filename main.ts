// TypeScript types:

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1, 'true', true];

// a = 4;
// b = false;
// c = 'hello';
// d = true;
// e = [1,2,3,4];
// enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};

export {};

// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');

// let log = function(message) {
//     console.log(message);
// }

// let doLog = (message) => console.log(message);

// defines the shape of the object
class Point {
    // fields to store data
    x:number;
    y:number;
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    
    // methods 

    draw() {
        //...
        console.log(this.x, this.y);
    }

    getDistance(another: Point) {
        //...
    }
}

// instance of the class
let point = new Point(2,5);
point.draw();