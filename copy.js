const arr1 = [5,8,21];
const arr2 = [25,30,15];

const arr3 = [...arr1];
arr3.push(6)
console.log('arr3: ', arr3);
console.log('arr1: ', arr1);

const arr4 = [...arr1, ...arr2];
console.log('arr4: ', arr4);

const userProfile = {
    name: "Kriszti",
    age: 29,
    country: "Hungary"
};

const userProfile2 = {...userProfile, gender:"female", name:"Kiss"};
console.log("userProfile2: ", userProfile2);
console.log("userProfile: ", userProfile);