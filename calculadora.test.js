const Calculadora = require('./calculadora')

describe('Calculadora', () => {
  it('Deverá retornar a soma de dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()
    expect(calculadora.soma(2,2)).toEqual(4)
  })

  it('Deverá retornar a subtração de dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()
    expect(calculadora.subtracao(3,2)).toEqual(1)
  })

  it('Deverá retornar a multiplicação entre dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()
    expect(calculadora.multiplicacao(2,5)).toEqual(10)
  })

  it('Deverá retornar a divisao entre dois números', () => {
    //Seu código aqui
    const calculadora = new Calculadora()
    expect(calculadora.divisao(6,2)).toEqual(3)
  })
})