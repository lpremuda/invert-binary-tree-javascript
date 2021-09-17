

function invertTree(root) {

  function trav(currNode) {
    if (currNode.left == null || currNode.right == null) {
      return;
    }

    const temp = currNode.left
    currNode.left = currNode.right
    currNode.right = temp
    trav(currNode.left)
    trav(currNode.right)
    return currNode
  }

  const rootReversed = trav(root)
  return rootReversed

}