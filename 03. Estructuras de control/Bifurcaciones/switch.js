//switch

let num = 3

switch (num) {
  case 1: {
    console.log("En caso de que num sea 1");
    break
  }
  case 2: {
    console.log("En caso de que num sea 2");
    break
  }
  case 3: {
    console.log("En caso de que num sea 3"); //true
    break
  }
  default:
    console.log("En caso de que num sea cualquier cosa");
    break;
}