function isIsogram(str) {
  if(typeof str != 'string'){
    return false;
  }
  if(str.length != 0){
    let charsInString = [];
    for (let i=0;i<str.length;i++){
      if(!charsInString.includes(str[i])){
        charsInString.push(str[i]);
      } else {
        return false;
      }
    }
  }
  return true;
}

module.exports = isIsogram;
