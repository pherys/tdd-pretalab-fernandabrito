class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  // Implementar aqui
  size(){
    return this.elements.length
  }

  size(){
    return this.elements.length
  }

  add(item){
    return this.elements.push(item)
  }

  peek(){
    return this.elements[0]
  }

  dequeue(){
    return this.elements.shift()
  }
}

module.exports = Queue