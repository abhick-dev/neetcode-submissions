class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
       let stack = [];
       let mapping = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
       }
        for(let c of s){
            if(mapping[c]){
                stack.push(mapping[c]);
            } else {
            if (stack.length === 0) return false;
            let expected = stack.pop();
            if (c !== expected) return false;
            }
        }
        return stack.length === 0;
    }
}
