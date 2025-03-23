function checkWinner(game) {
  
  for (let row of game) {
    if (row[0] !== "" && row[0] === row[1] && row[1] === row[2]) {
      return row[0]; 
    }
  }


  for (let col = 0; col < 3; col++) {
    if (game[0][col] !== "" && game[0][col] === game[1][col] && game[1][col] === game[2][col]) {
      return game[0][col]; 
    }
  }


  if (game[0][0] !== "" && game[0][0] === game[1][1] && game[1][1] === game[2][2]) {
    return game[0][0]; 
  }

  

  if (game[0][2] !== "" && game[0][2] === game[1][1] && game[1][1] === game[2][0]) {
    return game[0][2]; 
  }

  return null; 
}
export default checkWinner;