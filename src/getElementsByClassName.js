// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {

    function recursiveElements(className, node) {
        for (var i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];
            if(child.classList) {
                if (child.classList.contains(className)) {
                    result.push(child);
                }
            }
            recursiveElements(className, child);
        }
    }

    var result = [];
    recursiveElements(className, document.body);
    return result;
};

