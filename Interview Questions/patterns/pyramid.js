function Pyramid(number) {
  document.write("<center>"); // this to align the output in center
  if (number > 0) {
    Pyramid(number - 1); //this is to move through the number of iterations
    for (
      j = 1;
      j <= number;
      j++ //this loop is to print the numbers in ascending order
    ) {
      document.write(" " + j);
    }

    for (
      k = number - 1;
      k > 0;
      k-- // this loop is to print the numbers in descending order
    ) {
      document.write(" " + k);
    }
  }
  document.write("<br>");
}

function Pyramiddn(number) {
  document.write("<center>"); // this to align the output in center
  if (number > 0) {
    //this is to move through the number of iterations

    for (
      i = 1;
      i <= number;
      i++ //this loop is to print the numbers in ascending order
    ) {
      document.write(" " + i);
    }

    for (
      l = number - 1;
      l > 0;
      l-- // this loop is to print the numbers in descending order
    ) {
      document.write(" " + l);
    }
    Pyramiddn(number - 1);
  }
  document.write("<br>");
}
