class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length){
            return false;
        }

        let storeSValueCount = {};
        let storeTValueCount = {};


        for(let i=0;i<s.length;i++) {

                if(storeSValueCount[s[i]]){
                    storeSValueCount[s[i]]++
                } else {
                    storeSValueCount[s[i]]=1;
                }

                if(storeTValueCount[t[i]]){
                    storeTValueCount[t[i]]++
                } else {
                    storeTValueCount[t[i]]=1;
                }

        }


        for(let key in storeSValueCount) {
            if(storeSValueCount[key] !== storeTValueCount[key]){
                return false;
            }
        }


        return true;
    }
}
