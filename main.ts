import { controller } from './controller'

const operation = process.argv[2]
const a : number = Number(process.argv[3])
const b : number = Number(process.argv[4])

if ( !isNaN(a) && !isNaN(b) ) {
  const result : number = controller(operation, a, b)
  console.log(result)
}
else {
  throw new Error('Arguments passed cannot be parsed into numbers.')
}
