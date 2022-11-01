module.exports = {
    countGs: function (str) {
        var  G = 0;
        for ( var i = 0; i < str.length; i++)
            if (str[i] === "G") {
                G ++;
            }
        console.log(G);
        return G;
    }

}
