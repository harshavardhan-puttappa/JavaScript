class employee {
  constructor(name, id, salary) {
    this.name = name;
    this.id = id;
    this.salary = salary;
  }
  displayEmployee() {
    console.log(this.name + " is now registered");
    console.log("Ename: " + this.name + "  Eid: " + this.id + "  E.salary: " + this.salary);
  }
}

class manager extends employee {
  constructor(name, id, salary, duration) {
    super(name, id, salary);
    this.duration = duration;
  }
  displayDuration() {
    console.log(this.name + " is manager for " + this.duration + " Years");
  }
}

let mng = new manager("Harsha", 001, 50000, 5);
mng.displayEmployee();
mng.displayDuration();
