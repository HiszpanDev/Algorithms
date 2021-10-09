const number = [1,2,3,4,5,6,7,8];

function binary_search(list,target){
    //Declare beginning and ending of array
    let first = 0;
    let last = list.length - 1;
    console.log(first,last);

    //Execute until first is less or equal to last
    while(first<=last){
        //Calculate midpoint
        let midpoint = (Math.floor((first + last)/2));
        console.log(midpoint);

        //Check if we found the target
        if(list[midpoint]===target){
            console.log("I found at " + midpoint)
            return "We got that " + midpoint;
        }
        //If target is greater that element at midpoint of list we push beginning of list to midpoint of array plus 1
        else if(list[midpoint]<=target){
            first = midpoint + 1;
        }
        // if target is less than value at midpoint of list we push ending of array to midpoint minus 1
        else{
            last=midpoint-1;
        }
    }
    //If we can't find element after lenght of array is 0 we console.log that
    console.log("Can't find")
}

binary_search(number,8);