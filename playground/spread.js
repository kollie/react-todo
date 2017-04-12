function add (a, b) {
  return a + b
}

console.log(add(3, 1))

let toAdd = [9, 5]

console.log(add(...toAdd))


let groupA = ['Israel', 'James', 'Fati']
let groupB = ['Viram', 'Vic']
let final = [...groupB, 3, ...groupA]

console.log(final)

let Techsol = ['Israel', 24]
let TechsolTwo = ['James', 27]

function Tech (name, age) {
  console.log('Hi ' + name + ', you are ' + age)
}

Tech(...Techsol)
Tech(...TechsolTwo)

let names = ['Jonathan', 'Phoebe']
let final1 = ['Israel', ...names]

final.forEach(function (name) {
  console.log('Hi ' +  name)
})
