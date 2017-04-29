const moment = require('moment')

console.log(moment().format())

let now = moment()

console.log('The current time is: ', now.unix())
let time = moment().unix()
console.log(moment.unix(time).format('MMM Do YYYY @ h:mm a'))

let timeStamp = 1493307581
let currentMoment = moment.unix(timeStamp)
console.log('current Moment: ', currentMoment.format('MMM D, YY @ h:mma'))
console.log('current Moment: ', currentMoment.format('MMMM Do, YYYY @ h:mmA'))
