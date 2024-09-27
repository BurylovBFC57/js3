console.log('Задание 2');
        let users= [
        {
            name: "John",
            age: 30       
        },
        {
            name: "Bob",
            age: 21
            },
        {
            name: "Anna",
            age: 19
        }
    ];
let user = users[1]
console.log(user);

console.log('Задание 3');
delete users[2]
console.log(users);

console.log('Задание 4');
let sort = users.sort((b,c)=> b.age - c.age);
console.log(sort);

console.log('Задание 5');
const obj = {
    id: 5,
   token: 12343423
    };
const { id } = obj;
console.log(id);

console.log('Задание 6');
const obj1 = {
    id: 5,
   token: 12343423
    };
    const {id: userId} = obj;
    console.log(userId);
    