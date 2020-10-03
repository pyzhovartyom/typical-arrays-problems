
exports.min = function min (array) {
    if (Array.isArray(array) === false || array.length === 0) {
        return 0;
    } else {
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
        array.sort(compareNumeric);
        return array[0];
    }
}

exports.max = function max (array) {
    if (Array.isArray(array) === false || array.length === 0) {
        return 0;
        } else {
        function compareNumeric(a, b) {
            if (a > b) return 1;
            if (a == b) return 0;
            if (a < b) return -1;
        }
        array.sort(compareNumeric);
        return array[array.length - 1];
        }
    }

exports.avg = function avg (array) {
    if (Array.isArray(array) === false || array.length === 0) {
        return 0;
      } else {
        let result = array.reduce((sum, current) => sum + current, 0);
        return result / array.length
      }
    }
