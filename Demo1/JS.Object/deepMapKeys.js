const deepMapKeys = (obj, fn) =>
    Array.isArray(obj) ?
    obj.map(val => deepMapKeys(val, fn)) :
    typeof obj === 'object' ?
    Object.keys(obj).reduce((acc, current) => {
        const key = fn(current);
        const val = obj[current];
        acc[key] =
            val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : val;
        return acc;
    }, {}) :
    obj;

const obj = {
    foo: '1',
    nested: {
        child: {
            withArray: [{
                grandChild: ['hello']
            }]
        }
    }
};
const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
console.log(upperKeysObj);