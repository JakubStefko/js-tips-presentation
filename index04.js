const object = {
  name: 'Jake',
  age: 23,
  hello: function () { console.log(`Hello from ${this.name}`) },
  greeting: () => console.log(`Greeting from ${this.name}`)
}

object.hello()
object.greeting()