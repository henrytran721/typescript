"use strict";
// TypeScript types:
exports.__esModule = true;
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let alternativeWay = (message as string).endsWith('c');
// let log = function(message) {
//     console.log(message);
// }
// let doLog = (message) => console.log(message);
// defines the shape of the object
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // methods 
    Point.prototype.draw = function () {
        //...
        console.log(this.x, this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
// instance of the class
var point = new Point(2, 5);
point.draw();
