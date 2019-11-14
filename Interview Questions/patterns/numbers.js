var noOfRows = prompt("Please enter number of rows");
noOfRows = eval(noOfRows);

document.write("<div style='text-align:center;'>");

for (var i = 1; i <= noOfRows; i++) {
  if (i !== noOfRows) {
    for (space = 1; space <= noOfRows - i; space++) {
      document.write(" ");
    }

    for (var j = 1; j <= i; j++) {
      document.write(j * j + " ");
    }

    for (var k = i - 1; k >= 1; k--) {
      document.write(k * k + " ");
    }

    document.write("<br/>");
  } else {
    for (space = 1; space <= noOfRows - i; space++) {
      document.write(" ");
    }
    for (var j = 1; j < i; j++) {
      document.write(j * j + " ");
    }
    document.write("0 ");
    for (var k = i - 1; k >= 1; k--) {
      document.write(k * k + " ");
    }
    document.write("<br/>");
  }
}

for (i = 1; i <= noOfRows - 1; i++) {
  for (space = 1; space <= i; space++) {
    document.write(" ");
  }
  for (var j = 1; j <= noOfRows - i; j++) {
    document.write(j * j + " ");
  }
  for (var k = noOfRows - i - 1; k >= 1; k--) {
    document.write(k * k + " ");
  }
  document.write("<br>");
}
document.write("</div>");
