var x = Math.floor(Math.random() * 99);
var y = Math.floor(Math.random() * 99);
var z = Math.floor(Math.random() * 99);

//
//
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
//reload funcation


//
//
//
document.getElementById("hex1").innerHTML = rgbToHex(x, y, z);
