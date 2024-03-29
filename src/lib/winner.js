const todasLasPosibilidades = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [16, 17, 18, 19],
    [20, 21, 22, 23],
    [24, 25, 26, 27],
    [28, 29, 30, 31],
    [32, 33, 34, 35],
    [36, 37, 38, 39],
    [40, 41, 42, 43],
    [44, 45, 46, 47],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [16, 20, 24, 28],
    [17, 21, 25, 29],
    [18, 22, 26, 30],
    [19, 23, 27, 31],
    [32, 36, 40, 44],
    [33, 37, 41, 45],
    [34, 38, 42, 46],
    [35, 39, 43, 47],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
    [16, 21, 26, 31],
    [19, 22, 25, 28],
    [32, 37, 42, 47],
    [35, 38, 41, 44],
    [0, 17, 34, 51],
    [3, 18, 33, 48],
    [12, 25, 38, 51],
    [15, 22, 29, 36],
    [0, 20, 40, 60],
    [3, 21, 39, 57],
    [12, 28, 44, 60],
    [15, 26, 37, 48],
    [0, 21, 42, 63],
    [3, 22, 41, 60],
    [12, 29, 46, 63],
    [15, 26, 37, 48],
    [0, 18, 36, 54],
    [3, 22, 41, 60],
    [12, 27, 42, 57],
    [15, 26, 37, 48]
  ];


export default function winner(cells){
    for (const linea of todasLasPosibilidades) {
      
        const [a, b, c, d] = linea;
        if (
          cells[a] &&
          cells[a] === cells[b] &&
          cells[a] === cells[c] &&
          cells[a] === cells[d]
        ) {
          return cells[a]

        }
      } 
      return null

}