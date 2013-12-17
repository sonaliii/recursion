// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  // your code here

    var node = document.body;
    var result = [];

    if (node.classList.contains(className)) {
        result.push(node);
    }

    for (var i = 1; i < node.childNodes.length; i++) {
        var children = "";
        var child = node.childNodes[i];
        if (child.classList.contains(className)) {
            children += child;
            result.push(children);
        }
        var nodeChild = node.childNodes[i];
        getElementsByClassName(className)
    }

    if (nodeChild.classList.contains(className)) {
        nodeChild.appendTo(result);
    }

    return result;
};

