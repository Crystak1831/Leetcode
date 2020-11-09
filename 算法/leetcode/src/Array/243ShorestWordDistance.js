/*
* Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
* */

    var shortestDistance = function(words, word1, word2) {
        //建立map
       /* var pos = {};
        w = words[i]
        for(let i = 0; i < words.length; i++){
            if(!pos[w]){
                pos[w] = [i]
            }else{
                pos[w].push(i)
            }
        }

        var i = 0, j= 0, post1 = pos[word1], post2 = pos[word2]
        var res = words.length - 1;
        while(i < post1.length && j < post2.length){
            if(post1[i] < post2[j]){
                res = Math.min(res, post2[j] - post1[i])
                i++
            }else if(post[i] > post2[j]){
                res = Math.min(res, post1[i] - post2[j])
                j++
            }
            else{
                return 0;
            }
        }

        return res*/

       /*
       * 解法2：
       * 对于每个a,找到最近b的位置，对于每个b，找到最近a的位置。
       * index(-1)在目前遍历的时候还没有找到a和b
       * */

       let res = Number.MAX_SAFE_INTEGER
       let index1 = -1, index2 = -1
        for (let i = 0; i < words.length; i++){
            word = words[i]
            if(word === word1){
                if(index2 !== -1){
                    res = Math.min(res, i - index2);
                }
                index1 = i
            }else if(word ===word2){
                if(index1 !== -1 ){
                    res = Math.min(rew, i- index1)
                }
                index2
            }
        }
        return res === Number.MAX_SAFE_INTEGER?-1:res

    };

let words = ["hello","make","of"]

