// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true
// Example 2:
// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  
    let map = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    let stack = [];
    
    for(let char of s) {
        if(map[char]) {
            stack.push(map[char])
        } else {
            if(stack.pop() !== char) {
                return false;
            }
        }
    }
    return (!stack.length)
};