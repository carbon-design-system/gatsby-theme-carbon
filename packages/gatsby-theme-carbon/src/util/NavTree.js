/**
 * Iterates through all nodes in a tree and stops if a returnFunction() condition is met
 * @param {{[key]: any, pages: object[]}[]} nodes tree
 * @returns {void}
 */
export const dfs = (nodes, returnFunction) => {
  let node;
  const stack = [];
  stack.push(...nodes);
  while (stack.length > 0) {
    node = stack.pop();
    if (returnFunction(node)) {
      return node;
    }
    node.pages?.forEach((item) => {
      stack.push(item);
    });
  }
};
