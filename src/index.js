module.exports = function check(str, bracketsConfig) {
  
  const BRACKET_MAP = {};
  const OPEN_BRACKETS = [];
  const STACK = [];

  bracketsConfig.forEach(element => {
    BRACKET_MAP[element[1]] = element[0];
    OPEN_BRACKETS.push(element[0]);
  });

  for(let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];
    let isSame = BRACKET_MAP.hasOwnProperty(currentSymbol) && BRACKET_MAP[currentSymbol] === currentSymbol;
       
    if(OPEN_BRACKETS.includes(currentSymbol)) {
         
      if(isSame) {
        if(STACK.includes(currentSymbol)) {
          if(STACK[STACK.length -1] === currentSymbol) {
            STACK.pop();
            continue;
          } else {
            return false;
          }
        }
      }
      
       STACK.push(currentSymbol);
   
    } else {

      if(STACK.length === 0) return false;

      let stackTopSymbol = STACK[STACK.length - 1];

      if(BRACKET_MAP[currentSymbol] === stackTopSymbol) {
        STACK.pop();
      } else {
        return false;
      }


    }
  }

  return STACK.length === 0;

}