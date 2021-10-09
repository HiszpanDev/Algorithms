number = [1,2,3,4,5,6,7,8];

function recursive_binary_search(list,target){
    //Stoping conditon for our recursive function
    if(list.length === 0){
        console.log("Not found");
        return false;
    }
    else{
        let midpoint = Math.floor(list.length/2);

        //Checks if we found our target
        if(list[midpoint]===target){
            console.log("Found");
            return true;
        }
        //If target is less than value at midpoint,we  slice our list to first half and use recursion to found target until midpoint of sliced list is target
        else if(list[midpoint]>target){
            return recursive_binary_search(list.slice(0,midpoint),target);
        }
        //If target is greater than value at midpoint,we slice our list to end half and use recursion to found target until midpoint of sliced list is target
        else if(list[midpoint]<target){
            return recursive_binary_search(list.slice(midpoint+1,list.length),target);
        }
    }
}

recursive_binary_search(number,2)