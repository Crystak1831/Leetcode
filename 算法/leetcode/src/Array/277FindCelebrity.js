/*
Suppose you are at a party with n people (labeled from 0 to n - 1), and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her, but he/she does not know any of them.

    Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information about whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n). There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

Example 1:
Input: graph = [[1,1,0],[0,1,0],[1,1,1]]
Output: 1
Explanation: There are three persons labeled with 0, 1 and 2. graph[i][j] = 1 means person i knows person j, otherwise graph[i][j] = 0 means person i does not know person j. The celebrity is the person labeled as 1 because both 0 and 2 know him but 1 does not know anybody.
    Example 2:
Input: graph = [[1,0,1],[1,1,0],[0,1,1]]
Output: -1
Explanation: There is no celebrity.
*/

var solution = function(knows) {
    return function (n) {
        //第一遍循环，寻找肯定不是celebrity的数：
        let candidate = 0;
        for(let i = 1; i < n; i ++){
            if(knows(candidate,i)){
                candidate = i
            }
        }

        /*2. Make sure if the candidate is a celebrity
        如果i是candidate，继续（跳出循环）

	不知道4 是否知道前面3个数，如果知道其中一个数，则，没有candidate，或者
        往后遍历，i不知道candidate也说明4不是candidate，则return-1*/
        for(let i = 0; i < n; i++){
            if(i === candidate){
                continue
            }
            if(!knows(i,candidate) || knows(candidate,i)){
                return -1
            }

        }

        return candidate

    }
}


