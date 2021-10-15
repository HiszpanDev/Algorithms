const values = [7,2,87,5,1,923,21];

//We need two loops
//Keep track of the lowest
//Default lowest = first value of the loop
//Compare and push lowest
//Delete lowest element from values array

function selection_sort(values){
    //We will push lowest element to this array
    var sorted = [];
    //We need copy of values to iterate for the whole array, because when we use i<values.lenght we will not do it because we shortening length of the array by filter function
    var unsorted = values;
    for(let i = 0; i<unsorted.length; i++){
        var lowest = loopThrough(values);
        //We delete lowest element
        values = values.filter(function(value){
            if(value != lowest){
                return value;
            }
        })
    }
    return sorted;
}

console.log(selection_sort(values));

//We need this function to iterate through array to find lowest element in every iteration of the main loop
function loopThrough(values){
    var lowest = values[0];
    for(let i = 0; i<values.length; i++){
        if(values[i]<lowest){
            lowest = values[i];
        }
    }
    return lowest
}