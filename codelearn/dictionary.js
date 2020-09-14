var arr_op = ["insert A", "insert C", "insert T", "insert G", "insert AA", "insert CC", "insert TT", "insert GG", "insert AAA", "insert CCC", "insert TTT", "insert GGG", "insert AAAA", "insert CCCC", "insert TTTT", "insert GGGG", "insert AAAAAAAA", "insert CCCCCCCC", "insert TTTTTTTT", "insert GGGGGGGG", "find A", "find C", "find T", "find G", "find AA", "find CC", "find TT", "find GG", "find AAAA", "find CCCC", "find TTTT", "find GGGG", "find AC", "find CT", "find TG", "find GT", "find AAC", "find CCA", "find TTG", "find GGT", "find AAAAC", "find CCCCA", "find TTTTC", "find GGGGC"];
var S = [];
var r = [];

function dictionary(arr_op) {
    for (let i = 0; i < arr_op.length; i++) {
        let t = arr_op[i].split(' ');
        if (t[0] == 'insert') {
            is(S, t[1]);
        }
        if (t[0] == 'find') {
            fd(S, t[1]);
        }
    }
    return r;
}

function is(d, p) {
    for (let w of d)
        if (w == p) return;
    d.push(p);
    return;
}

function fd(d, p) {
    for (const w of d)
        if (p == w) { r.push("yes"); return; }
    r.push("no");
    return;
}

dictionary(arr_op);
console.log(r);