// or, and, not

//or || (primer valor verdadero (string, numero, true))
const o = false || true   //true
const ro = true || false  //true
const or = false || false //false
const oro = true || true  //true
const primer = false || false || 'Hola' || 'Chau'     // Hola
const segun = false || false || 3 || 'Chau'          //3

//and &&
const y = false && true   //false
const a = true && false   //false
const an = false && false //false
const and = true && true  //true

//not !
const nno = !true     //false
const not = !false  //true