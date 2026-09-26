//Problem 1

let set1 = [3, 1, 7, 9];
let set2 = [2, 4, 1, 9, 3];
let sum = 0;
let found;

// Check elements from set1
for (let i = 0; i < set1.length; i++) 
    
{
    found = false;

    for (let j = 0; j < set2.length; j++) {
        if (set1[i] === set2[j]) {
            found = true;
        }
    }

    if (found === false) {
        sum = sum + set1[i];
    }
}

  // Check elements from set2
for (let i = 0; i < set2.length; i++) 

{
    found = false;

    for (let j = 0; j < set1.length; j++) {
        if (set2[i] === set1[j]) {
            found = true;
        }
    }

    if (found === false) {
        sum = sum + set2[i];
    }
}

console.log(sum);



//Problem 2
//dot_product

function dot_product(v1, v2) 
{
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps = ps + (v1[i] * v2[i]);
    }

    return ps;
}

//Vectors

let vectors1 = [
    [1, 2],
    [1, 3],
    [2, 4]
];

let vectors2 = [
    [2, -1],
    [2, 1],
    [1, -1]
];

for (let pair = 0; pair < vectors1.length; pair++) 
    
{

    let ps = dot_product(vectors1[pair], vectors2[pair]);

    if (ps === 0) {
        console.log("The vectors are orthogonal");
    } else {
        console.log("The vectors are not orthogonal");
    }
}

function dot_product(v1, v2) 

{
    let ps = 0;

    for (let i = 0; i < v1.length; i++) {
        ps = ps + (v1[i] * v2[i]);
    }

    return ps;
}

let v1 = [1, 2];
let v2 = [2, -1];

let ps = dot_product(v1, v2);

if (ps === 0) {
    console.log("The vectors are orthogonal");
} else {
    console.log("The vectors are not orthogonal");
}