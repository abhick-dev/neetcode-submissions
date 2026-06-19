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
        
        let sdata = {};
        let tdata = {};

        for(let i=0;i<s.length;i++){

                sdata[s[i]] = (sdata[s[i]] || 0) + 1;
 
        }
                for(let i=0;i<t.length;i++){
    
                tdata[t[i]] = (tdata[t[i]] || 0) + 1;
  
        }

        for (let key in sdata) {
            if(sdata[key] === tdata[key]){
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
