var isValid = function(s){
    const map = new Map();
    map.set("(", ")");
    map.set("[", "]");
    map.set("{", "}");

    const stack = [];
    for(let i = 0; i < s.length; i++){
        if(map.has(s[i])){
            stack.push(map.get(s[i]));
        }else{
            if(stack.pop() !== s[i]){
                return false;
            }
        }

    }

    if(stack.length !==0){
        return false;
    }

    return true
}

let st = "({})"
console.log(isValid(st))



