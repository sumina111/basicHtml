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


const maxCharacter = (str) => {
    let charec=[], maxNum=0, maxChar="";
    str.split('').forEach(char => {
        if (charec[char]) 
        {
            charec[char]++; 
        } 
        else 
        { 
            charec[char] = 1;
        }
        for(let char in charec)
        {
            if(charec[char]>maxNum)
            {
                maxNum = charec[char];
                maxChar = char;
            }
        }
    });
    return maxChar;
}


function chunkArray(array,chsize)
{
    array = array.slice(0);
    console.log(array);
    let temp = [];
    while(array.length>0)
    {    
        temp.push(array.splice(0, chsize));
    }
    return temp;
}

function fizzbuzz(){
    for(let i=1; i<=100; i++)
    {
    
    if(i%3==0)
    {
        console.log("fizz");
    }
    else if( i%5==0)
    {
        console.log('buzz');
    }
    else{
        console.log(i);
    }
    
    }
}


const numToArray = (num) => {
    let n =num.toString();
    let newone = n.split("");
    return newone;
}


const powerSet = (array) => {
    let power = [];
    let total = Math.pow(2,array.length);
    for(let i=0; i<total; i++)
    {
        let temp = [];
        let num = i.toString(2);
        while(num.length < array.length)
        {
            num = '0' + num;        }
        for (var b = 0; b < num.length; b++) 
        {
            if (num[b] === '1') 
            { 
                temp.push(array[b]);             }    
        }
        power.push(temp);
    }
    return power;
}


console.log(stringReversal('hello'));
console.log(palindrome('racecar'));
console.log(reverseInt(513));
console.log(capitalLetters("donot RepeaT yourself"));
console.log(maxCharacter('javascript'));
console.log(chunkArray([1,2,3,4,5,6,7],3));
console.log(fizzbuzz());
console.log(numToArray(123));
console.log(powerSet([1,2]));