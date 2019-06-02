"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var n = null;
var u = undefined;
var arr = [1, 2, 3];
var arr2 = [1, 2, 3];
var person = ['Sergey', 23];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var nikogdaProtoTakNeIspolzui = true;
var nikogdaProtoTakNeIspolzui2 = 10;
var name = 'Sergey';
function greetMe(name) {
    return "Hello, " + name;
}
var a;
a = 10;
a = true;
var b = true;
b = false;
var andType = 3.1415;
andType = 20;
andType = '20';
if ((typeof andType) === 'string') {
    andType = parseFloat(andType);
}
;
function add(a, b) {
    if (b === void 0) { b = 10; }
    if (b)
        return a + b;
    else
        return a;
}
;
console.log(add(2, 3));
console.log(add(2));
function fullName(p) {
    console.log(p.firstname + " " + p.lastname);
}
var p = {
    firstname: 'Sergey'
};
fullName(p);
var cUser = /** @class */ (function () {
    function cUser(name, lastname) {
        var _this = this;
        this.greetAll = function () {
            var names = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                names[_i] = arguments[_i];
            }
            names.forEach(function (el) { return _this.greet(el); });
        };
        this.userName = name;
        this.userLastname = lastname;
    }
    cUser.prototype.greet = function (name) {
        console.log("Hey, " + name);
    };
    return cUser;
}());
var cAdmin = /** @class */ (function (_super) {
    __extends(cAdmin, _super);
    function cAdmin(adminName, adminLastname, age) {
        var _this = _super.call(this, adminName, adminLastname) || this;
        _this.sayMyau = function () { return "Myau"; };
        _this.age = age;
        return _this;
    }
    return cAdmin;
}(cUser));
var currentUser = new cAdmin("Sergey", "Shlykov", 23);
currentUser.greetAll();
console.log(currentUser.sayMyau());
//console.log(currentUser.userLastname);
var value = 173;
var fCountOddNums = function (value) {
    var num = 0;
    for (var i = 0; i < value; i++) {
        if (i % 2) {
            num++;
        }
    }
    console.log(num);
};
fCountOddNums(value);
