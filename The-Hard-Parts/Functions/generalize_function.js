// A Generalized Function

function copyArrayAndManupilate(array, instructions) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return output;
}

function multiplyBy2 (num) {
    return num * 2;
}

const result = copyArrayAndManupilate([1,2,3], multiplyBy2);