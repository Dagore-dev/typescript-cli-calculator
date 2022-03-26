import { Calculator } from './calculator'

export function controller (operation : string, a : number, b : number) : number {

  switch (operation) {
    case 'add': return Calculator.add(a, b)
    case 'substract': return Calculator.substract(a, b)
    case 'multiply': return Calculator.multiply(a, b)
    case 'divide': return Calculator.divide(a, b)

    default: throw new Error('Operation not found')
  }

}