const person1 = {
  name: "Jake"
}

const person2 = {
  name: "Al"
}

function hi () {
  return this
}

const hey = hi.call(null)
console.log(hey)