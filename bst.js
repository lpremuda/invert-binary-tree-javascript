var Node = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

function insert(root, v) {
  if (root == null) {
    return new Node(v, null, null)
  } else if (v < root.value) {
    root.left = insert(root.left, v)
  } else {
    root.right = insert(root.right, v)
  }
  return root
}


a = [4, 3 , 10, 2, 8, 20, 15, 5]
var root = null
for (let i=0; i<a.length; i++) {
  root = insert(root, a[i])
}

console.log(root)