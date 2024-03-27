// обычный импорт es modules
// import log, {characters, greet as hello} from "./characters.mjs";

async function main() {
  // динамический импорт. его можно обернуть в try catch для обработки исключений
  try {
    const {characters, greet} = await import('./characters.mjs')
    for (const c of characters) {
      greet(c)
    }
  } catch(e) {
    console.log('Ошибка!')
  }
}

const random = Math.random()

if (random > 0.5) {
  main()
}

console.log('hello world')