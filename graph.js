class Node {
  constructor(name) {
    this.name = name
    this.edges = []
    this.minimalWeight = Infinity
  }
  addEdge(node, weight) {
    this.edges.push({ node, weight })
  }
  setMinimalWeight(weight) {
    this.minimalWeight = weight
  }
}

class Graph {
  constructor() {
    this.graph = {}
  }
  addNode(name) {
    const node = new Node(name)
    this.graph[name] = node
  }
  addConnection(node1, node2, weight){
    this.graph[node1].addEdge(node2, weight)
    this.graph[node2].addEdge(node1, weight)
  }
  print(){
    for (let node in this.graph) {
      const edges = this.graph[node].edges.map(edge => `${edge.node} (${edge.weight})`).join(', ')
      console.log(`${node} is connected to: ${edges}`)
    }
  }
  getBestRoute(origin, destination) {
    const currentNode = this.graph[origin]
    const currentWeight = currentNode.minimalWeight
    const edges = currentNode.edges
    
    currentNode.setMinimalWeight(0)

    edges.map(( edge ) => {
      const weight = currentWeight + edge.weight
      if (weight < this.graph[edge.node].minimalWeight)
        this.graph[edge.node].setMinimalWeight(currentWeight + edge.weight)

      if (edge.node === destination) return 'The time is ' + this.graph[edge.node].minimalWeight
    })

  }
}


const graph = new Graph()

graph.addNode('A')
graph.addNode('B')
graph.addNode('C')
graph.addNode('D')


graph.addConnection('A', 'B', 10)
graph.addConnection('A', 'C', 7)
graph.addConnection('C', 'D', 2)
graph.addConnection('B', 'D', 4)
graph.getBestRoute('A', 'D')
console.log(graph)