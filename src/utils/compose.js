/*
Brukes:
  compose(
    x => x * 2,
    x => x + 3,
  )(2);
  --> 7
*/
export default function compose(...funcs) {
  return obj => funcs.reduce((o, func) => func(o), obj);
}
