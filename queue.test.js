const Queue = require('./queue')

describe('Queue', () => {
  it('Deve criar uma fila', () => {
    const queue = new Queue()

    expect(queue).toEqual({ elements: []})
  })

  it('Deve ser capaz de calcular o tamanho da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    expect(queue.size()).toEqual(0)
  })

  it('Deve ser capaz de adicionar um item na fila', () => {
   // Seu código aqui
   const queue = new Queue()
    expect(queue.add(42)).toEqual(1)
  })

  it('Deve escolher o primeiro item da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    queue.add(10)
    queue.add(20)
    expect(queue.peek()).toEqual(10)
  })

  it('Deve remover o primeiro item da fila', () => {
    // Seu código aqui
    const queue = new Queue()
    queue.add(5)
    queue.add(8)
    const removedItem = queue.dequeue()
    expect(removedItem).toEqual(5)
    expect(queue.size()).toEqual(1)
  })
})