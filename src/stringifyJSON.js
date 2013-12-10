// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to have to write it from scratch:
var stringifyJSON = function (obj) {

    if (typeof obj == 'string') {
        return '"' + obj + '"';
    }

    if (typeof obj == 'boolean' || typeof obj == 'number') {
        return String(obj);
    }

    if (obj == null || obj == undefined) {
        return "null";
    }

    if (typeof obj == 'object' && obj.length == undefined) {
        var result = "";
        for (var key in obj) {
            if (typeof obj[key] == 'function') {
                return '{}';
            }
            result += ',' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
        }

            return '{' + result.substr(1) + '}';
    }

    if (typeof obj == 'object' && obj.length != undefined) {
        var result = "";
        for (var i = 0; i < obj.length; i++) {
            if (typeof obj[i] == 'object' || typeof obj[i] == 'string') {
                result += ',' + stringifyJSON(obj[i]);
            }  else {
                result += ',' + obj[i];
            }
        } return '[' + result.substr(1) + ']';
    }
};
