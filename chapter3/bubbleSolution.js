var scores = [60, 50, 60, 58, 54, 54, 
        58, 50, 52, 54, 48, 69, 
        34, 55, 51, 52, 44, 51, 
        69, 64, 66, 55, 52, 61, 
        46, 31, 57, 52, 44, 18, 
        41, 53, 55, 61, 51, 44];

function getIndexOfMax(arr) {
    var maxIndex = 0;
    var maxValue = getMaxValue(arr);
    var maxArr = [];
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == maxValue) {
            maxArr.push(i);
        }
    }
    return maxArr;
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

function getStringOfBestSolutions(arr) {
    var bestSolution = "";
    var arrOfBestSolutions = getIndexOfMax(arr);
    if (arrOfBestSolutions.length == 1) {
        bestSolution = arrOfBestSolutions[0];
    } else if (arrOfBestSolutions.length > 1) {
        for (i = 0; i < arrOfBestSolutions.length; i++) {
            if (i == arrOfBestSolutions.length - 1) {
                bestSolution = bestSolution + "#" + arrOfBestSolutions[i];
            } else {
                bestSolution = bestSolution + "#" + arrOfBestSolutions[i] + ", "; 
            }
        }
    } else {
        bestSolution = "n/a";
    }
    return bestSolution;
}

function printSolutions(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log("Bubble solution #" + i + " score: " + arr[i]);
    }

    console.log("\n Bubbles tests: " + arr.length);
    console.log("Highest bubble score: " + getMaxValue(arr));
    console.log("Solutions with highest score: " + getStringOfBestSolutions(arr));
}

printSolutions(scores);
