let numbers = "0123456789";
let opes = "+-*/";

function getOperatorPriority(ope) {
    switch (ope) {
        case '+':
        case '-':
            return 0;
            break;
        case '*':
        case '/':
            return 1;
            break;
        default:
            throw "Invalid Operator";
    }
}

function calc(ope, v1, v2) {
    switch (ope) {
        case '+':
            return v1 + v2;
        case '-':
            return v1 - v2;
        case '*':
            return v1 * v2;
        case '/':
            return v1 / v2;
        default:
            throw "Invalid Operator !";
    }
}

function parseExpression(exp) {
    let opeStack = [];
    let expQueue = [];

    for (token of exp) {
        if (token == '(') {

        } else if (token == ')') {

        } else if (numbers.includes(token)) {
            expQueue.push(token);
        } else if (opes.includes(token)) {
            let priority = getOperatorPriority(token);
            for (op in opeStack) {
                if (getOperatorPriority(op) > priority) {
                    expQueue.push(opeStack.unshift());
                } else break;
            }
            opeStack.shift(token);
        }
    }

    // Parse result
    console.log(expQueue);
    while (expQueue.len > 1) {
        expQueue = calc(expQueue[2], expQueue[0].valueOf(), expQueue[1].valueOf()).toString() + expQueue.slice(3);
    }

    return expQueue[0];
}

console.log(parseExpression("1+3+5"));