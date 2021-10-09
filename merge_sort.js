
const values = [29, 100, 21, 2, 57, 218, 88, 352, 50, 67, 373, 1, 32, 20,111,932];

function merge_sort(list){
    //Stoping condition for recursive function
    if(list.length <= 1){
        return list;
    }
    const mid = Math.floor(list.length/2);

    //We use recursion to get left and right array
    //At beginning we have two single item arrays, then we sort them and return at the end of the function,we repeat that until we get last iteration of arrays to compare
    let left = merge_sort(list.slice(0,mid));
    let right = merge_sort(list.slice(mid));

    //Declare indexes and buffer for our sorting algorithm
    let sorted = [];
    let i= 0;
    let j = 0;

    //We compare elements in arrays and place them in ascending order
    while(i<left.length && j<right.length){
        if(left[i]<right[j]){
            sorted.push(left[i]);
            i++;
        }
        else{
            sorted.push(right[j]);
            j++;
        }
    }

    //We use this loop to push elements from left array if its longer than right
    while(i<left.length){
        sorted.push(left[i])
        i++;
    }

    //We use this loop to push elements from right array if its longer than left
    while(j<right.length){
        sorted.push(right[j])
        j++
    }
    
    //We use return to build left and right array and finally return sorted array from a function
    return sorted;
}

console.log(merge_sort(values));