// Biến

var x = 1;

// Kieu du lieu

/**
 * Primitive types:
 * - Number
 * - String
 * - Boolean
 * Special types
 * - undefined
 * - null
 * Reference types:
 * - Array
 * - Object
 */

 // Object 
 var dog = {
  name: "lisa",
  age: 10,
  live: true,
 };
 console.log(dog.name);
 dog.name = "name is lisa";
 console.log(dog.name);
 // Array : lưu trữ các phần tử giống nhau.
 var arr = [1, 2, 3, 4, 5];
 var obj_1 = {
   obj: 1,
   author: "le anh vu",
   age: 18.5
 };
 var obj_2 = {
  obj: 2,
  author: "le anh vu",
  age: 18.5
};
var obj_3 = {
  obj: 3,
  author: "le anh vu",
  age: 18.5
};

var ObjArray = [obj_1, obj_2, obj_3];
console.log(ObjArray);

// Các phép toán cơ bản.
console.log(7 / 3);

// Function (Hàm)
function sum (a, b) {
  return a + b;
}

// Object methods
var dogShow = {
  name: "lisa",
  age: 12,
  show: function () {
    return this.name;
  }
};
dogShow.show();
console.log(dogShow.show());

// So Sánh : lưu ý phép so sánh !== và === với != và ==

// For Loop

for (let index = 0; index <= 10; index++) {
  console.log(index);
}
for (let i = 0; i < ObjArray.length; i++) {
  console.log("Index: ", ObjArray[i].obj, "\tAuthor: ", ObjArray[i].author);
}
//  for ... of, for ... in
for (var index of ObjArray) {
  console.log(index.age);
  // đi qua các phần tử trong mảng. và index chính là giá trị nó đi qua
}

for (var index in ObjArray) {
  console.log(ObjArray[index]);
  // index là số phần tử của Mảng
}

// Array Methods
var ArrMet1 = [1, 2, 3, 4, 5, 6];
var ArrMet2 = [6, 8, 9, 10, 11];

console.log("length: ", ArrMet1.length);
console.log("length: ", ArrMet2.length);

console.log("toString : ",ArrMet1.toString());
console.log("join: ", ArrMet1.join(" ")); // noi tat ca phan tu mang thanh 1 chuoi

// lấy đi phần tử cuối của mảng, trả về phần tử lấy đi
console.log("pop(): ", ArrMet1.pop());
// thêm 1 phần tử cuối của mảng, trả về số lượng pt mảng sau khi thêm.
console.log("push(): ", ArrMet1.push(66));
// lấy đi phần tử đầu của mảng, trả về phần tử lấy đi
console.log("shift(): ", ArrMet1.shift());
// thêm 1 phần tử đầu của mảng, trả về số lượng pt mảng sau khi thêm.
console.log("unshift(): ", ArrMet1.unshift(66));
// chèn phần tử vào vị trí 2, 0 giá trị (phía sau) bị xóa, "giá trị chèn vào";
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits.join("  "));

console.log(ArrMet1.concat(ArrMet2));

console.log(ArrMet2);
// cắt phần tử mảng từ vị trí 2 đến 3 và trả về giá trị đã cắt
console.log(ArrMet2.slice(2, 3));


// dùng function như tham số (Callback)
// truyền 1 hàm vào hàm khác với tư cách là 1 tham số thì nó được gọi là callback
// nghĩa là khi thực hiện xong và được gọi vào để thực hiện.
var ob = {
  show: function(func) {
    func();
  }
};
var funcTest = function () {
  console.log("hello world !");
}
console.log(ob.show(funcTest));


// array.map: trả về giá trị mới, có 1 item vào: và item chính là phần tử của mảng, gần giống for of
var arr = [1, 2, 3, 4, 5];
var resultMap = arr.map(function(item) {
  return item + 1;
});
console.log(resultMap);
var rectangles = [
  {width: 2, height: 5},
  {width: 1, height: 5},
  {width: 3, height: 5}
];
var resultRectangles = rectangles.map(function (item) {
  return item.width * item.height;
});
console.log(resultRectangles);

// array.filter: trả về true/false: true qua, false không qua;
// có 1 item vào: và item chính là phần tử của mảng, gần giống for of
var resultFilter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(resultFilter);

// array.find: làm như filter nhưng dừng lại khi gặp true đầu tiên. trả về 1 phần tử.
var resultFind = arr.find(function (item) {
  return item % 2 === 0;
});
console.log(resultFind);

// array.reduce
var resultReduce = arr.reduce(function(item1, item2){
  item1 += item2.toString();
  console.log(item1, item2);
  return item1.toString(); //
});
console.log(resultReduce);
console.log("================");
var orders = [
  {name: 'A', quantity: 2, unitPrice: 100},
  {name: 'B', quantity: 1, unitPrice: 400},
  {name: 'C', quantity: 5, unitPrice: 15}
];
var resutlOrders = orders.reduce(function (item1, item2) {
  return item1 + (item2.quantity * item2.unitPrice);
}, 0);
console.log(resutlOrders);

var items = ['Tom', 'Bill', 'Kim'];
var resultItems = items.reduce(function(item1, item2) {
  return item1 + ('<' + item2 + '>');
}, '');
console.log(resultItems);

// array.sort
/** 
 * if return < 0 >>> a will come before b
 * if return > 0 >>> a will come after b
 * if return = 0 >>> a and b will stay unchanged
 * */
var number = [2, 9, 3, 4, 1];
var num = number.sort(function(a, b) {
  return b - a;
});
console.log(num);


var employees = [
  {name: "Ti", age: 18},
  {name: "Teo", age: 20},
  {name: "Nha", age: 19}
];

var sortEmployees = employees.sort(function(a, b) {
  return a.age - b.age;
});
console.log(employees);

// #################### Đối tượng trong JavaScript ##################### //

/**
 * khái niệm đối tượng: là một thực thể có tên xác định và có thuộc tính trở đến giá trị,
 *    hàm hoặc cũng có thể là một đối tượng khác.
 * Trong JavaScript, hầu hết "mọ thứ" đề là đối tượng, chẳng hạng như Booleans
 *    là đối tượng, Number là đối tượng, String là đối tượng, .....
 * 
 */
// khởi tạo đối tượng
var objectName = {
  property1: "value[function|object]",
  property2: "value[function|object]",
  methodName: function() {
    return this.property1 + "  " + this.property2;
  }
}
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "yellow",
  fullName: function() {return this.firstName + " " + this.lastName;}
};
// gọi đối tượng
console.log(objectName.property1);
console.log(objectName["property2"]);
console.log(objectName.methodName());
console.log("############## Doi tuong co ban  ################");
console.log("First name: ",person.firstName);
console.log("Last name: ",person.lastName);
console.log("Age: ",person.age);
console.log("Eyes Color ",person.eyeColor);
console.log("full name: ",person.fullName());

/// Đối tượng String
console.log("############## DOi tuong String ##############");
var stringVariable = new String();
stringVariable = "hello this is test for Doi tuong String";
console.log(stringVariable.length);
console.log(stringVariable.charAt(1)); // trả về ký tự tại vị trí 1
console.log(stringVariable.charCodeAt(1));// trả về Unicode tại vị trí 1
console.log(stringVariable.concat(" ---- Concat is True "));
console.log("############## DOi tuong Math ##############");
console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1, 2, 3, 4, 5, 6 , 123 ,123, 1,23,41, 213,1231, 4 ,5123, 3));
console.log("############## DOi tuong DATE ##############");
var dt = new Date(2020, 4, 2, 11, 5, 30, 19);
console.log(dt);


// Từ khóa new 
function Mouse(color) { // constructor function
  this.color = color;
}
// var mouse1 = new Mouse('black');
// var mouse2 = new Mouse('white');
// console.log(mouse1);
// console.log(mouse2);

// prototypes
Mouse.prototype.sleep = function() {
  console.log("slepping ....");
}
var jerry = new Mouse("yeellow");
var mickey = new Mouse("yeellow");
console.log(jerry.sleep());
console.log(jerry.sleep === mickey.sleep);