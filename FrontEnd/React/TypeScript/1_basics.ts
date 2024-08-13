// String, Boolean, Number
let userName: string;
userName = 'Max';
console.log("String", userName);

let hasHobbies: boolean;
hasHobbies = true;
console.log("Boolean", hasHobbies);

let age: number;
age = 30;
console.log("Number", age);
//=======================================================

// Union Types
let userId: string | number;
userId = "abc123";
console.log(userId);

//=======================================================

// Object Types
let user : {
    name: string,
    id: string | number,
    isAdmin: boolean
} 
user = {
    name: "Ram",
    id: 123,
    isAdmin: true
}
console.log(user);

//=======================================================

// Array Types
let nums: string[];
nums = ["One", "Two", "Three"];
console.log(nums);

// Union types
let ids: (string | number)[];
ids = [1, 2, "One"];
console.log(ids);

//=======================================================

// Functions
const add = (a: number, b: number): number => {
    return a+b;
}
const res = add(5, 5);
console.log(res);

//=======================================================

// Type and Merge
type Admin = {
    permissions: string[],
};

type AppUser = {
    userName: string,
};

type AppAdmin = Admin & AppUser;

let admin: AppAdmin;
admin = {
    permissions: ["One", "Two", "Three"],
    userName: "Ram"
};

console.log(admin);

//=======================================================
// Lireal Types
let role: "Admin" | "User" | "Guest" | 1; // When the variable will be assigned to only one these values
role = "Admin";
console.log(role);

//=======================================================
// Adding Type Guards
type Role = "Admin" | "User" | "Guest";

const performAction = (action: string, role: Role) => {
    if(role === "Admin") {
        // Do something
    }
}


// Read TypeScript Type Guard 24 Text


