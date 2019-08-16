class employee{
    constructor(name,id,salary){
        this.name=name;
        this.id=id;
        this.salary=salary;
    }
    displayEmployee(){
        console.log('Ename: '+this.name+'  Eid: '+this.id+'  E.salary: '+this.salary);
    }
    
    static displayCount(){
        console.log("user created");
    }
}
let emp=new employee('harsha',001,50000);

emp.displayEmployee();
employee.displayCount();
