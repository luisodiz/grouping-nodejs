// Timers

// const start = performance.now()
//
// setTimeout(() => {
//   console.log(performance.now() - start)
//   console.log('Прошла секунда')
// }, 1000)

// function myFunction(arg) {
//   console.log('Аргумент =>', arg)
// }
//
// setTimeout(myFunction, 1500, 'Классный')


// const timerId = setTimeout(() => {
//   console.log('BOOM')
// }, 5000)
//
// setTimeout(() => {
//   clearTimeout(timerId)
//   console.log('Очищено')
// }, 1000)


// const intervalId = setInterval(() => {
//   console.log(performance.now())
// }, 1000)
//
// setTimeout(() => {
//   clearInterval(intervalId)
// }, 5000)

// console.log('Перед')
// console.log(performance.now())
// setImmediate(() => {
//   console.log(performance.now())
//   console.log('После всего')
// })
// console.log('После')

const timerId = setTimeout(() => {
  console.log('BOOM')
}, 5000)

timerId.unref() // отбросить ссылку на таймер

setImmediate(() => {
  timerId.ref() // заново вернуть ссылку на таймер
})
