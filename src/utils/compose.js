export default function(...funcs) {
  return Component => funcs.reduce((comp, func) => func(comp), Component);
}
