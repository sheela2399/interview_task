// Valid Parentheses Checker
// Problem Statement:
// Given a string containing only the characters '(', ')', '[', ']', '{', and '}', determine if the input string is valid. A string is considered valid if:
// Every opening bracket has a corresponding closing bracket of the same type.
// Brackets are closed in the correct order.
// Every closing bracket has a previously opened matching bracket.

// Input:
// A string input consisting of the characters '(', ')', '[', ']', '{', and '}'.

// Output:
// Return true if the string is valid; otherwise, return false.s



function parenthesesChecker(s) {
    let container = [];

    for (let char of s) {
    if (char === '(' || char === '[' || char === '{'){
            container.push(char);}
    else if (char === ')') {
        if (container.pop() !== '(') return false;
    } else if (char === ']'){
        if(container.pop()!== '[') return false;
    } else if( char === '}'){
        if(container.pop()!== '{') return false;
    }
}
return container.length === 0;
}
console.log( parenthesesChecker('( }'));
