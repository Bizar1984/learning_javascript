let movingInSteps = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
];

let moveBackwards = [
    0,
    2,
    4,
    6
];

for (i = moveBackwards.length - 1; i >= 0; i -= 1) {
    for (j = 0; j < movingInSteps.length - 1; j +=2) {
        console.log(i * j);

    }
}