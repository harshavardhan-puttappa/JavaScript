function* generator() {
  yield "this is generator";
  yield "returns multiple statements";
  const value = yield "enter a value";
  return value;
}

let value = generator();

console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next("entered value"));

const resultGen = generator();
for (const result of resultGen) {
  console.log(result);
}
