// For-loop functions

function positiveIntSum(limit){
    let sum = 0;
    for(let i = 1; i <= limit; i++)
        sum = sum + i;
}
    return sum
}
function additionPatternSum(start, diff, limit){
    let sum = start;
    for(let k = 0; k <= limit; k++){
        sum = sum + diff * k; 
}
    return sum
}


// While-loop function

function multiplicationPatternSum(start, factor, max){
    let sum = start;
    let j = start; 
    while(j <= max){
        sum = sum + j * factor;
        i = i * factor 
}
    return sum
}



//Later copy paste the checking code below here
consol.log("q1:"+positiveIntSum(1500));
