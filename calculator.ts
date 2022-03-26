export class Calculator {

  static add (a : number, b: number) : number {
    return a + b
  }

  static substract (a : number, b: number) : number {
    return a - b
  }

  static multiply (a : number, b: number) : number {
    return a * b
  }

  static divide (a : number, b: number) : number {
    if (b === 0) throw new Error('Can\'t divide a number between zero.')
    return a / b
  }

}
