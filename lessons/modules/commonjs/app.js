const a = -1

if (a > 0) {
  // При require происходит полное исполнение файла characters.js
  // require можно писать в блоках кода, а не только в начале файла
  // common js модули загружаются синхронно, поэтому надо быть аккуратным в условиях
  const log = require('./characters')
  log()
} else {
  console.log('Меньше нуля')
}
