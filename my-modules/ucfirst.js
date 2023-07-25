//module perso permettant de mettre la premiére lettre d'une string en majuscule.
//et nous evite de telecharger un modules tiers npm 

function ucfirst(str) {
    if (str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    } else {
      return false;
    }
  }
  const word = ucfirst();
  
  //console.log(word);
  
  module.exports = ucfirst;