// function atmDenominationFinder(amount) {
//   var enteredAmount = amount;
//   var denominations = {
//     tenD: 0,
//     fiftyD: 0,
//     hundreaD: 0,
//     twoHundreadD: 0,
//     fiveHundreadD: 0,
//     twoThousandD: 0
//   };
//   var totalNoOfNotes = 0;
//   var remBal = 0;

//   if (enteredAmount % 2000 === 0) {
//     denominations.twoThousandD = enteredAmount / 2000;
//     totalNoOfNotes += denominations.twoThousandD;
//   } else {
//     denominations.twoThousandD = Math.floor(enteredAmount / 2000);
//     totalNoOfNotes += denominations.twoThousandD;
//     remBal = enteredAmount % 2000;
//     if (remBal % 500 === 0) {
//       denominations.fiveHundreadD = remBal / 500;
//       totalNoOfNotes += denominations.fiveHundreadD;
//     } else {
//       denominations.fiveHundreadD = Math.floor(remBal / 500);
//       totalNoOfNotes += denominations.fiveHundreadD;
//       remBal = remBal % 500;
//       if (remBal % 200 === 0) {
//         denominations.twoHundreadD = remBal / 200;
//         totalNoOfNotes += denominations.twoHundreadD;
//       } else {
//         denominations.twoHundreadD = Math.floor(remBal / 200);
//         totalNoOfNotes += denominations.twoHundreadD;
//         remBal = remBal % 200;
//         if (remBal % 100 === 0) {
//           denominations.hundreadD = remBal / 100;
//           totalNoOfNotes += denominations.hundreadD;
//         }
//       }
//     }
//   }
//   console.log(`${denominations.twoThousandD} notes of 2000`);
//   console.log(`${denominations.fiveHundreadD} notes of 500`);
//   console.log(`${denominations.twoHundreadD} notes of 200`);
//   console.log(`${denominations.hundreadD} notes of 100`);
//   console.log(`Total Notes=${totalNoOfNotes}`);
// }

// atmDenominationFinder(15300);

function countCurrency(amount) {
  var notes = new Array(2000, 500, 200, 100, 50, 20, 10, 5, 1);
  var noteCounter = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

  // count notes using
  // Greedy approach
  for (var i = 0; i < 9; i++) {
    if (amount >= notes[i]) {
      noteCounter[i] = Math.floor(amount / notes[i]);
      amount = amount - noteCounter[i] * notes[i];
    }
  }
  // Print notes
  console.log("Currency Count ->" + "\n");
  for (var i = 0; i < 9; i++) {
    if (noteCounter[i] != 0) {
      console.log(notes[i] + " : " + noteCounter[i] + "\n");
    }
  }
}

// Driver Code
var amount = 1000;
countCurrency(amount);
