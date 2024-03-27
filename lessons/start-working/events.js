// Event Emitter

const EventEmitter = require('events') // конструктор EventEmitter
const myEmitter = new EventEmitter() // instance EventEmitter
// простая функция для логирования после подключения к DB
const logDbConnection = () => {
  console.log('DB connected')
}

// Листенеры будут добавляться в конец массива myEmitter.listeners
// При этом выполняются листенеры по порядку. Кто добавлен позже, тот и выполнится позже

// Можно добавить в начало списка листенеров
myEmitter.prependListener('msg', () => {
  console.log('Prepend')
})

myEmitter.addListener('connected', logDbConnection)
myEmitter.emit('connected') // fire an event

// Необходимо уметь удалять слушатели, чтоб не было утечки памяти
myEmitter.removeListener('connected', logDbConnection)
myEmitter.removeAllListeners('connected')

// Или так
// myEmitter.off('connected', logDbConnection) // удаляет одно событие


// Alias чтоб подписаться на событие
myEmitter.on('msg', (data) => console.log(`Получил: ${data}`))
myEmitter.emit('connected')
myEmitter.emit('msg', 'Привет, получи мое сообщение')

// Подписаться только один раз и потом удалить слушателя
myEmitter.once('off', () => {
  console.log('Я вызвался один раз и не больше')
})

myEmitter.emit('off')
myEmitter.emit('off') // Не сработает, слушатель удален

// Задать максимальное количество слушателей. По умолчанию их должно быть 10
console.log(myEmitter.getMaxListeners())
// myEmitter.setMaxListeners(2)
console.log(myEmitter.getMaxListeners())

console.log(myEmitter.listenerCount('msg')) // посчитать сколько подписчиков на событии msg
console.log(myEmitter.listenerCount('off'))
console.log(myEmitter.listeners('msg'))

// Названия самих событий
console.log(myEmitter.eventNames()) // массив событий, на которые подписаны

// Обработка ошибок
myEmitter.on('error', (err) => {
  console.log(`Произошла ошибка: ${err.message}`)
})

myEmitter.emit('error', new Error('BOOMMM!!'))

// раньше юзали EventTarget
const target = new EventTarget()
const logTarget = () => {
  console.log('Connected to target')
}

target.addEventListener('connected', logTarget)
target.dispatchEvent(new Event('connected'))

