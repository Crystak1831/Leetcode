var rotateRight = function(head, k) {
    // get to the end to find length
    if(!head || head.next === null){
        return head
    }
    let i = 0;
    let list = head
    while(true){
        if(list.next == null){
            break;
        }
        list = list.next
        i += 1
    }
    // find the new head pointer in the line
    i = i - k % (i+1)
    // link the last list to the head, creating a loop
    list.next = head
    // find the point at which to break the loop (at pointer)
    list = head
    while(i > 0){
        list = list.next
        i --
    }
    // list now is the point of where we need to break the loop and its link becomes a new head
    head = list.next
    list.next = null
    return head
};
