function getMaximum() {
    if(arguments.length === 0) {
        return;
    }

    var max = arguments[0];

    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(getMaximum(3, 2, 5, 1));
console.log(getMaximum() === undefined ? "No arguments passed" : "Error in processing");
console.log(getMaximum(577, 211, 20, 0));
console.log(getMaximum(-1, 0, -7));
console.log(getMaximum(-18, -5));

