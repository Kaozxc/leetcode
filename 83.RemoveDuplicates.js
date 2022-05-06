// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.Return the linked list sorted as well.

var deleteDuplicates = function (head) {
    let ref = head;
    while (ref && ref.next) {
        if (ref.val == ref.next.val) {
            ref.next = ref.next.next;
        } else {
            ref = ref.next;
        }
    }
    return head;
};