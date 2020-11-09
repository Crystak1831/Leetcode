/*
* Design a class which receives a list of words in the constructor, and implements a method that takes two words word1 and word2 and return the shortest distance between these two words in the list. Your method will be called repeatedly many times with different parameters.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1
*
* 假设有很多单词，给出word1和word2, 并且word1和word2不断变换，我们不能每次都遍历一下数组。我们可以把数组存到一个map里，通过找key和
* value来确定最短距离
* */



var WordDistance = function (words) {
    //记录words的长度
    this.n = words.length;
    //建立一个空的map
    this.map = {}
    for(var i = 0; i < words.length;i++){
        var w = words[i]
        //initialize map
        if(!this.map[w]){
            this.map[w] = [];
        }
        //因为this.map[w]是数组，所以用push
        this.map[w].push(i)
    }
}


WordDistance.prototype.shortest = function (word1, word2) {
    //word1出现的位置：[1,3]
    var postA = this.map[word1]
    //word2出现的位置：[2,4,5]
    var postB = this.map[word2]
    var res = this.n
    //两个指针，一个指向word1，一个指向word2
    for(var i = 0, j = 0; i < postA.length && j<postB.length;) {
        //指针所在的位置
        var post1 = postA[i];
        var post2 = postB[j];
        if(post1 < post2) {
            res = Math.min(res, post2 - post1)
            i++
        }else{
            res = Math.min(res, post1 - post2)
            j++
        }
    }
    return res;
};

var words = ["practice", "makes", "perfect", "coding", "makes"]
var word1 = 'makes';
var word2 = 'coding'

var obj = new WordDistance(words)
console.log(obj)
var param_1 = obj.shortest(word1, word2)
console.log(param_1)
