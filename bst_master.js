var Node = function (value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function insert(root, v) {
  if (root == null) {
      root = new Node(v, null, null);
  }
  else if (v < root.value) {
      root.left = insert(root.left, v);
  }
  else {
      root.right = insert(root.right, v);
  }

  return root;
}

function traverse(root) {
  if (root == null) {
      return;
  }

  traverse(root.left);
  traverse(root.right);
}


function tree2str(n) {
  if (!n) {
    return ''
  }

  const left = tree2str(n.left)
  const right = tree2str(n.right)

  if (right) {
    return `${n.value}\n(${left})\n(${right})`
  } else if (left) {
    return `${n.value}\n(${left})`
  } else {
    return `${n.value}`
  }

}

var root = null;
// const SIZE = 2000000;
const SIZE = 20;
var a = [];

console.log("Generating random array with " + SIZE + " values...");

console.time("generate");

for (var i = 0; i < SIZE; i++) {
  // a[i] = Math.floor(Math.random() * 10000);
  a[i] = Math.floor(Math.random() * 50);
}

console.log("Array: " + a)

console.timeEnd("generate");
console.log();
console.log("Filling the tree with " + SIZE + " nodes...");

console.time("fill");

for (var i = 0; i < SIZE; i++) {
  root = insert(root, a[i]);
}

rootString = tree2str(root)
console.log('root string: ' + rootString)

console.timeEnd("fill");
console.log();
console.log("Traversing all " + SIZE + " nodes in tree...");

console.time("traverse");

traverse(root);

console.timeEnd("traverse");