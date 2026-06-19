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
            //is opening pair?
            if(mapping[c]){
                //yes opening pair
                //push the expected barcket now 
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
