function collectedValues(arr){
    
    let newArr = [];

    if(newArr.lengh === 0){
        return newArr;
    }

    if(newArr[0] % 2 !== 0){
        newArr.push[newArr[0]];
    }
    
    newArr = newArr.concat(collectedValues(arr.slice(1)))

    return newArr;

}

collectedValues([1,2,3,4,5]);