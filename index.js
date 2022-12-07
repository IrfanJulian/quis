const pola = (number) => {
  for(let i = 0; i < number; i++){
    let pattern
    for(let j = number; j > i; j--){
      pattern += ' ';
    }
    for(let k = 0; k <= i; k++){
      pattern += '*';
    }
    for(let l = 1; l <= i; l++){
      pattern += '*';
    }
    console.log(pattern);
  }
  for(let m = number; m >= 0; m--){
    let pattern
    for(let n = number; n > m; n--){
      pattern += ' ';
    }
    for(let o = 0; o <= m; o++){
      pattern += '*';
    }
    for(let p = 1; p <= m; p++){
      pattern += '*';
    }
    console.log(pattern);
  }
}

pola(3)