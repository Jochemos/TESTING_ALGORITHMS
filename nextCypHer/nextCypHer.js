const myFun = (input) => {
  const h = []
  const obj = {}
  const tab = []

  for(let s=1; s<=input.length; s+2){
    h.push(input.slice((s++)-1, (s++)))
    }


  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for(let t=0; t<=letters.length; t++){
    const z = []
    for(let r=6; r>-21; r--){
      if(r !== 0 ){
        z.push(r)
      }
      obj[letters.slice(t, t+1)]=z[t];
    }
  }

  for(let n=0; n<h.length; n++){
    for(let v=0; v<=h[n].length; v++){
      if(v){
        const txt = h[n][v++]
        //console.log(h[n][v++]); // G G G
        Object.entries(obj).forEach((key, value) => {
          if(key.includes(txt)){
            tab.push(key[1])
          }
        });
      }
      if(v<1){
        //console.log(h[n][v]); // B C D
        const d = tab[0]
        for(let f=0; f<letters.length; f++){
          if(d && h[n][v] === letters[f]){
            // THIS IS NEXT RUN
          }
        }
        //console.log(d);
      }
    }
  }
  //console.log(tab[0]);
}


const text = "BGCGDG";

console.log(`${myFun(text)}`);
