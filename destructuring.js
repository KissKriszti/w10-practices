const userProfile = {
    name: "Kriszti",
    age: 29,
    country: "Hungary"
};

/* const name = userProfile.name;
const age = userProfile.age; */

// new version

/* const {name,age} = userProfile;
console.log("name: ", name);
console.log('age: ', age); */

// old version

/* const logNameAndAge = (incomingUser) => {
    console.log(incomingUser.name);
    console.log(incomingUser.age);
};

logNameAndAge(userProfile); */

// deconstruction version/ new version in function mode
const logNameAndAge = ({name, age}) => {
    console.log("name: ", name);
    console.log("age: ", age);
};

logNameAndAge(userProfile);

const arr1 = [5,10,8,21];
/* const first = arr1[0];
const second = arr1[1];

console.log("first: ", first);
console.log("second: ", second); */

const [a, b] = arr1;
console.log('a: ', a);
console.log('b: ', b);

const [x, ...y] = arr1;
console.log('x: ', x);
console.log('y: ', y);