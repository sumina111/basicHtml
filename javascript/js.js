const stringReversal = (str) => {
    let reversedString = "";
    for(let i=str.length-1; i>=0; i--)
    {
        reversedString = reversedString + str[i];
    }
    return reversedString;
}

const palindrome = (str) => {
    
    let reversedString = stringReversal(str);
    return str === reversedString ? true : false;

    // another method:
    // let reversedString = "";
    // for(let i=str.length-1; i>=0; i--)
    // {
    //     reversedString = reversedString + str[i];
    // }
    // if(str === reversedString)
    // {
    //     return true;
    // }
    // else
    // {
    //     return false;
    // }
}

console.log(stringReversal('hello'));
console.log(palindrome('racecar'));

