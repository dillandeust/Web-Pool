module.exports = {
    arraysAreEqual: function (arr1, arr2) {
        let a1 = JSON.stringify(arr1);
        let a2 = JSON.stringify(arr2);
        if (a1 == a2) {
            return true;
        }
        else { return false }
    }
}
