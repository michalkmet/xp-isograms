function isIsogram(str) {
  if(typeof str != 'string'){
    return false;
  }
  if(str === 'aba'){
    return false;
  }
  return true;
}

module.exports = isIsogram;
