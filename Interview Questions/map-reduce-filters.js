let students = [
  { id: 1, name: "Ravi" },
  { id: 2, name: "suman kumar" },
  { id: 3, name: "Ravichandran" },
  { id: 4, name: "naresh" },
  { id: 5, name: "sooraj kumar" }
];

// Filter all the students whose name includes kumar
let filterResult = students.filter(student => {
  return student.name.includes("kumar");
});
//console.log(JSON.stringify(filterResult));

// add school field to each student and return new list using map
let mapResult = students.map(stu => {
  stu.school = stu.id > 3 ? "Degree" : "school";
  return stu;
});
//console.log(mapResult);

let reduceResult = students.reduce((pre, curr, pos, arr) => {
  //return { name: pre.name + "," + curr.name };
  return pre + curr.name;
}, "");

console.log(reduceResult);
