class Cell{
  constructor(i,j){
    this.i = i;
    this.j = j;
    this.paredes = [true,true,true,true]; //0->Arriba | 1->Derecha | 2->Abajo | 3-> Izquierda
    this.visited = false;
    this.path = 0;
    this.checkNeighbors = (grid, neighbors, dif) => {
      let top = grid[index(this.i,this.j-1,dif)];
      let rigth = grid[index(this.i+1,this.j,dif)];
      let bottom = grid[index(this.i,this.j+1,dif)];
      let left = grid[index(this.i-1,this.j,dif)];

      if(top && !top.visited)
        neighbors.push(top);
      if(rigth && !rigth.visited)
        neighbors.push(rigth);
      if(bottom && !bottom.visited)
        neighbors.push(bottom);
      if(left && !left.visited)
        neighbors.push(left);

      //Retorna un vecino aleatorio, sino tiene devuelve undefined
      return (neighbors.length > 0) ? neighbors[Math.floor(Math.random() * neighbors.length)] : undefined;
    }

    this.checkWalls = (grid, neighbors, dif) => {
      let top = grid[index(this.i,this.j-1,dif)];
      let rigth = grid[index(this.i+1,this.j,dif)];
      let bottom = grid[index(this.i,this.j+1,dif)];
      let left = grid[index(this.i-1,this.j,dif)];

      if(!this.paredes[0] && top && !top.visited)
          neighbors.push(top) //Ingresa el de arriba
      if(!this.paredes[1] && rigth && !rigth.visited)
          neighbors.push(rigth) //Ingresa el derecha
      if(!this.paredes[2] && bottom && !bottom.visited)
          neighbors.push(bottom) //Ingresa el de abajo
      if(!this.paredes[3] && left && !left.visited)
          neighbors.push(left) //Ingresa el de left

      return (neighbors.length > 0) ? neighbors[Math.floor(Math.random() * neighbors.length)] : undefined;
    }
  }
}

//Me dice si el indice esta fuera de los valores de la matriz
let index = (x,y,tamano) => (x < 0 || y < 0 || x > tamano-1 || y > tamano-1) ? -1 : x + y * tamano;

let toCell = e =>{
  let cell = new Cell(e.i,e.j);
  cell.paredes = e.paredes;
  return cell;
}

let toCellSol = e =>{
  let cell = new Cell(e.i,e.j);
  cell.paredes = e.paredes;
  cell.path = e.path;
  cell.visited = e.visited;
  return cell;
}
