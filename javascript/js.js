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


const reverseInt = (num) => {
let reverse = 0, divnum = 0;
while(num > 0 )
{
  divnum = num % 10;
  reverse = (reverse * 10) + divnum;
  num = Math.floor(num/10);
}
return reverse;
}


let word = "";
function capitalLetters(sen)
{
    word = sen.toLowerCase();
    let splitString = word.split(" ");
    for(let i=0; i<splitString.length; i++)
    {
        splitString[i]=splitString[i].charAt(0).toUpperCase()+ splitString[i].slice(1);
    }

    return splitString.join(" ");
}


console.log(stringReversal('hello'));
console.log(palindrome('racecar'));
console.log(reverseInt(513));
console.log(capitalLetters("donot RepeaT yourself"));

