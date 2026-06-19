class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let mappedToFind = {
            '[' : ']',
            '(' : ')',
            '{' : '}'
        }

        let stack = [];


        for(let eachChar of s) {
            if(mappedToFind[eachChar]){
                stack.push(mappedToFind[eachChar]);
            } else {
                if(stack.length < 0) return false;
                let lastElmInStack = stack.pop();
                if(lastElmInStack !== eachChar) return false;
            }
        }

        return stack.length === 0;
    }
}
