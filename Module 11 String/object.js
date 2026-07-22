// let student = {
//     name: "Likhon",
//     age: 18,
//     department: "CST",
//     cgpa: 3.80
// };
// console.log(student);



let person = {
    name: 'Likhon'
}

let key = 'name';
// console.log(person[key]);
// console.log(person.name);



let introduct = {
    name: 'Likhon',
    age:  18
}

introduct.age = 20;
introduct.country = 'Bangladesh'
// console.log(introduct);
delete introduct.age;
// console.log(introduct);




let student = {
    name: "Likhon",
    department: "CST",
    semester: 6
};
let value = student['department']
// console.log(value);
// console.log(student.department);


let car = {
    name: 'BMW'
}
car.color = 'Black'
// console.log(car);

let keys = Object.keys(student)
// console.log(keys);


// let student = {
//     name: "Likhon",
//     age: 18,
//     department: "CST"
// };

// let keys = Object.keys(student);

// console.log(keys);


let university = {
    name: "RUET",

    department: {
        name: "CSE",
        semester: 6
    }
};

console.log(university.department.name);