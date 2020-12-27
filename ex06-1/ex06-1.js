// n * 100 - 5
const n = 10

const mul100 = x => x * 100

const sub5 = x => x - 5

const result = sub5(mul100(n))

console.log(result)

// (n + 3) * 8 + 3
const add3 = x => x + 3

const mul8 = x => x * 8

function cal(f, x) {
    return f(x(f(n)))
}

const result2 = cal(add3, mul8)

console.log(result2)
