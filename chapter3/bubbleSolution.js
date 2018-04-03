var scores = [60, 50, 60, 58, 54, 54, 
        58, 50, 52, 54, 48, 69, 
        34, 55, 51, 52, 44, 51, 
        69, 64, 66, 55, 52, 61, 
        46, 31, 57, 52, 44, 18, 
        41, 53, 55, 61, 51, 44];

function getIndexOfMax(arr) {
    var maxIndex = 0;
    var maxValue = getMaxValue(arr);
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == maxValue) {
            return i;
        }
    }
    return maxIndex;
}

function getMaxValue(arr) {
    var maxValue = 0;
    for (i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
        }
    }
    return maxValue;
}

console.log("The best solution is " + getIndexOfMax(scores) + " with a score of " + getMaxValue(scores));