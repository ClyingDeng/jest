const parser = (str) => {
    const obj = {};
    str.replace(/([^=&]+)=([^=&]+)/g, function () {
        obj[arguments[1]] = arguments[2]
    })
    return obj;
};

const stringify = (obj) => {
    const arr = [];
    for (const key in obj) {
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}
export {
    parser,
    stringify
}

// console.log(parser('name=dy&age=20'));
// console.log(stringify({ name: 'dy', age: 20 }));