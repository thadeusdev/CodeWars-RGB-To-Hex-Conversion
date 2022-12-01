function rgb(r, g, b){
  // complete this function
    return [r,g,b].map((val)=>{
      let cl=val
      if (val < 0){
        cl =0
      }else if(val > 255){
        cl = 255
      }
      let hex=cl.toString(16).toUpperCase()
      if(hex.length <2){
        return '0'+hex
      }else{
        return hex
      }
    }).join('')
}
