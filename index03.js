function outer () {
  const name = 'Jake'
  let counter = 0

  function inner () {
    counter++
    return `${name}: ${counter}`
  }

  return inner
}

const w = outer()

console.log(w())
console.log(w())
console.log(w())