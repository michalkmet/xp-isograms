function isIsogram(str) {
  if(typeof str != 'string'){
    return false;
  }
  if(str.length != 0){
    let charsInString = [];
    for (let i=0;i<str.length;i++){
      let character = str[i].toLowerCase;
      if(!charsInString.includes(character)){
        charsInString.push(character);
      } else {
        return false;
      }
    }
  }
  return true;
}

module.exports = isIsogram;
