class MinStack {


    constructor() {
        this.stack = [];
        this.minstack = [];
    }

    push(val) {
        this.stack.push(val);

        if (this.minstack.length === 0) {
            this.minstack.push(val);
        } else {
            this.minstack.push(Math.min(val, this.getMin()));
        }
    }

    pop() {
        this.stack.pop();
        this.minstack.pop();
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.minstack[this.minstack.length - 1];
    }

}

const minStack = new MinStack();

minStack.push(3);
minStack.push(-1);
minStack.push(7);
console.log(minStack.top());
minStack.pop()
console.log(minStack.getMin());

