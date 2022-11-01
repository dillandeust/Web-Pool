module.exports = {
  drawTriangle: function (limit) {

    let string = "";
    for (let i = 1; i <= limit; i++) {
      for (let j = 1; j <=i; j++) {
        string += "$";
      }
      string += "\n";
    }
    console.log(string);
  }
}
